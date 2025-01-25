import NextAuth, { type NextAuthConfig } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "@/data/user";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";

interface ExtendedNextAuthConfig extends NextAuthConfig {
  trustProxy: boolean;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustProxy: true,
  events: {
    async linkAccount({ user, account, profile }) {

      if (account?.provider === "google" || account?.provider === "github") {
        const updateData: any = {};

        if (profile?.name) {
          const [firstName, ...lastNameParts] = profile.name.split(" ");
          updateData.firstName = firstName;
          updateData.lastName = lastNameParts.join(" ");
        }

        if (profile?.email) {
          updateData.email = profile.email;
        }

        if (profile?.image) {
          updateData.image = profile.image;
        }

        // Only set emailVerified if it's not already set
        const existingUser = await db.user.findUnique({ where: { id: user.id } });
        if (!existingUser?.emailVerified) {
          updateData.emailVerified = new Date();
        }

        console.log("Update data:", updateData);

        try {
          const updatedUser = await db.user.update({
            where: { id: user.id },
            data: updateData,
          });
          console.log("User updated successfully:", updatedUser);
        } catch (error) {
          console.error("Error updating user:", error);
          throw error; // Re-throw the error to be caught by NextAuth
        }
      }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("SignIn callback:", { user, account });
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;
      const existingUser = await getUserById(user.id ?? "");
      // Prevent Sign In without Email Verification
      if (!existingUser?.emailVerified) return false;
      return true;
    },
    async session({ token, session }) {
      console.log("Session callback - Input:", { token, session });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (session.user) {
        session.user.name = token.name as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.email = token.email as string;
        session.user.role = token.role as UserRole;
        session.user.image = token.picture as string;
        session.user.emailVerified = token.emailVerified as Date | null;
      }
      console.log("Session callback - Output:", session);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("JWT callback - Input:", { token, user, account, profile });
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.name = `${existingUser.firstName || ''} ${existingUser.lastName || ''}`.trim();
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.picture = existingUser.image;
      token.emailVerified = existingUser.emailVerified;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
} as ExtendedNextAuthConfig);

export async function getSession() {
  const session = await auth();
  return session;
}