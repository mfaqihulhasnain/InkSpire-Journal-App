import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    try {
      const loggedInUser = await db.user.findUnique({
        where: {
          clerkUserId: user.id,
        },
      });

      if (loggedInUser) {
        return loggedInUser;
      }

      // User doesn't exist in database, create them
      console.log('Creating new user in database for Clerk user:', user.id);
      
      const name = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';
      const email = user.emailAddresses?.[0]?.emailAddress || '';

      const newUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name,
          imageUrl: user.imageUrl || null,
          email,
        },
      });

      console.log('Successfully created user in database:', newUser.id);
      return newUser;
    } catch (dbError) {
      console.error('Database error in checkUser function:', dbError);
      
      // Return a fallback user object to prevent crashes
      return {
        id: 'fallback',
        clerkUserId: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
        email: user.emailAddresses?.[0]?.emailAddress || '',
        imageUrl: user.imageUrl || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  } catch (error) {
    console.error('Error in checkUser function:', error);
    
    // Return null instead of throwing to prevent server crashes
    return null;
  }
};