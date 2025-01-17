"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Github } from "lucide-react";
 
export default function Login() {
 
  const signIn= async () => {
    await authClient.signIn.social({ 
        provider: "github", 
        callbackURL: "/dashboard",
    });
  };
 
  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Portfolio Dashboard Access
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Please sign in to continue
          </p>
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={signIn}
            className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white py-6"
          >
            <Github className="w-5 h-5" />
            <span className="text-lg">Sign in with Github</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
