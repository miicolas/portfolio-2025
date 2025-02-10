import { isAdmin } from "@/lib/is-admin";
import { redirect } from "next/navigation";


export default async function Dashboard() {

    const is_admin = await isAdmin();
    if (!is_admin) {
        redirect("/login");
    }

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}