"use client"

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Logout() {
    const router = useRouter();

    const handleLogout = useCallback(async () => {
        try {
            await authClient.signOut();
            router.push("/login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }, [router]);

    return (
        <Button onClick={handleLogout}>
            <span>Logout</span>
        </Button>
    );
}