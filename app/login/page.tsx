"use client"
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useState } from 'react';
 
export default function SignUp() {
 
  const signIn= async () => {
    await authClient.signIn.social({ 
        provider: "github", 
        callbackURL: "/dashboard",
    });
  };
 
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}