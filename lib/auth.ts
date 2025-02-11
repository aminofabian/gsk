import bcrypt from "bcryptjs";

// Force Node.js runtime for bcrypt operations
export const runtime = 'nodejs';

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
} 