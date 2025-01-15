import { db } from "@/db";
import { eq } from 'drizzle-orm';
import { user } from '../db/schema';

export const getRole = async (userId: string): Promise<boolean> => {
    try {
        // Récupérer le rôle de l'utilisateur
        const result = await db.select({ role: user.role })
            .from(user)
            .where(eq(user.id, userId));

        // Vérifier si un rôle a été trouvé et s'il s'agit de "ADMIN"
        if (result.length > 0 && result[0].role === "ADMIN") {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Erreur lors de la récupération du rôle :", error);
        return false;
    }
};
