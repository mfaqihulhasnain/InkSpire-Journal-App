import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
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
  } catch (error) {
    console.error('Error in checkUser function:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    throw error; // Re-throw to handle in calling component
  }
};