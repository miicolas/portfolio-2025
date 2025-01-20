import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql",
    }),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24 
    },
    trustedOrigins: [
        'https://dev.nicolas-becharat.com',
        'https://dev.nicolas-becharat.com/api/auth',
        'https://nicolas-becharat.com',
        'https://nicolas-becharat.com/api/auth',
        'https://localhost:3000',
    ],
});