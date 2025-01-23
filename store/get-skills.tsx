import { create } from "zustand";
import { Store } from "@/lib/types";

const useGetSkillsStore = create<Store>((set, get) => ({
    data: null,
    loading: false,
    error: null,
    fetchData: async () => {
        const { data } = get();
        if (data) return;
        set(() => ({ loading: true }));
        try {
            const response = await fetch("/api/get-skills", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            set(() => ({ data: data, loading: false }));
        } catch (error) {
            set(() => ({ error: (error as Error).message, loading: false }));
        }
    }
}));

export { useGetSkillsStore };