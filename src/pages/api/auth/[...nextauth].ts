import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_CLIENT_SECRET_KEY,
  callbacks: {
    async signIn({ user }) {
      if (user?.email?.endsWith("@gmail.com")) {
        return true;
      }
      return false;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        token.auth_type = "google";
        token.email = user.email;
      }
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
});
