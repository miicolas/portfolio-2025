import { getSession } from "@/lib/get-session";
import { getRole } from "@/lib/get-role";


export async function isAdmin() {

    const session = await getSession();
    if (!session) return false;
    const isAdmin = await getRole(session!.user.id);
    if (!isAdmin) return false;
    return true;

} 