import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/lib/prisma';

export async function POST(req) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  // Handle the webhook
  switch (eventType) {
    case 'user.created':
      try {
        const { id: clerkUserId, first_name, last_name, email_addresses, image_url } = evt.data;
        
        // Create user in database
        const newUser = await db.user.create({
          data: {
            clerkUserId: clerkUserId,
            name: `${first_name || ''} ${last_name || ''}`.trim() || 'User',
            email: email_addresses[0]?.email_address || '',
            imageUrl: image_url || null,
          },
        });
        
        console.log('User created in database:', newUser);
        return new Response('User created successfully', { status: 200 });
      } catch (error) {
        console.error('Error creating user:', error);
        return new Response('Error creating user', { status: 500 });
      }
      
    case 'user.updated':
      try {
        const { id: clerkUserId, first_name, last_name, email_addresses, image_url } = evt.data;
        
        // Update user in database
        const updatedUser = await db.user.update({
          where: { clerkUserId: clerkUserId },
          data: {
            name: `${first_name || ''} ${last_name || ''}`.trim() || 'User',
            email: email_addresses[0]?.email_address || '',
            imageUrl: image_url || null,
          },
        });
        
        console.log('User updated in database:', updatedUser);
        return new Response('User updated successfully', { status: 200 });
      } catch (error) {
        console.error('Error updating user:', error);
        return new Response('Error updating user', { status: 500 });
      }
      
    case 'user.deleted':
      try {
        const { id: clerkUserId } = evt.data;
        
        // Delete user from database
        await db.user.delete({
          where: { clerkUserId: clerkUserId },
        });
        
        console.log('User deleted from database:', clerkUserId);
        return new Response('User deleted successfully', { status: 200 });
      } catch (error) {
        console.error('Error deleting user:', error);
        return new Response('Error deleting user', { status: 500 });
      }
      
    default:
      console.log(`Unhandled event type: ${eventType}`);
      return new Response('Webhook received', { status: 200 });
  }
}
