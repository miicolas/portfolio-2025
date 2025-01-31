'use server';

import { db } from '@/db';
import { projectsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ProjectData } from '@/lib/types';

export default async function getProjectById(id: string): Promise<ProjectData | Response> {
    try {
        if (!id) {
            return new Response('ID is required', { status: 400 });
        }
        console.log('id:', id);

        const project = await db
            .select()
            .from(projectsTable)
            .where(eq(projectsTable.id, Number(id)))
            .execute()
            .then(res => res[0]);

        if (!project) {
            return new Response('Project not found', { status: 404 });
        }

        return project as ProjectData;

    } catch (error) {
        console.error('Error fetching project:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}