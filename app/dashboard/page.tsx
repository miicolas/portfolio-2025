import { getSession } from "@/lib/get-session";
import { getRole } from "@/lib/get-role";
import Skills from "./_dashboard/skills/skills";

export default async function Dashboard() {

    const session = await getSession();
    const isAdmin = await getRole(session!.user.id);

    if (!session || !session.user.id) {
        return <div>You are not logged in.</div>;
    }

    if (!isAdmin) {
        return <div>You are not authorized to access this page.</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Skills />
        </div>
    );
}