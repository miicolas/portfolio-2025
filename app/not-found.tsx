import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl font-bold text-primary">404</h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="text-muted-foreground">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>

        <Link href="/" >
          <Button variant="outline" className="gap-2 mt-6">
            <ArrowLeft size={16} />
            Go bach Home
          </Button>
        </Link>
      </div>
    </div>
  );
}