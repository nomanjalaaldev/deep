import { Redis } from '@upstash/redis';
// import { Ratelimit } from '@upstash/ratelimit';  // ❌ Commented out

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
  automaticDeserialization: true,
  agent: process.env.NODE_ENV === 'development' ? {
    https: {
      rejectUnauthorized: false
    }
  } : undefined,
});

// ✅ Provide a fallback export
export const rateLimiter = {
  limit: async () => ({
    success: true, // Always allow requests
    remaining: Infinity,
    reset: Date.now() + 60000, // Dummy reset time
  }),
};
