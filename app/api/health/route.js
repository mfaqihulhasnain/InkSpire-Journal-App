import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if basic environment variables are set
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      CLERK_SECRET_KEY: !!process.env.CLERK_SECRET_KEY,
      CLERK_PUBLISHABLE_KEY: !!process.env.CLERK_PUBLISHABLE_KEY,
      ARCJET_KEY: !!process.env.ARCJET_KEY,
      API_NINJAS_KEY: !!process.env.API_NINJAS_KEY,
      PIXABAY_API_KEY: !!process.env.PIXABAY_API_KEY,
    };

    // Check database connection
    let dbStatus = 'unknown';
    try {
      const { db } = await import('@/lib/prisma');
      await db.$queryRaw`SELECT 1`;
      dbStatus = 'connected';
    } catch (dbError) {
      dbStatus = 'error';
      console.error('Database connection error:', dbError);
    }

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      database: dbStatus,
      environmentVariables: envCheck,
    });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
      },
      { status: 500 }
    );
  }
}
