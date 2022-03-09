import { db } from './db.server';

export async function getUsername(userId: string) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  // If there doesn't exist such user
  if (!user) return null;

  return user.username;
}
