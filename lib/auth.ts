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
});