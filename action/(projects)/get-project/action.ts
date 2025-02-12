'use server';

import { db } from '@/db';
import { projectsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { FormResponse, ProjectData } from '@/lib/types';

export default async function getProjectById(id: string): Promise<FormResponse> {
    try {
        if (!id) {
            return { status: 'error', message: 'ID is required' };
        }

        const project = await db
            .select()
            .from(projectsTable)
            .where(eq(projectsTable.id, Number(id)))
            .execute()
            .then(res => res[0]);

        if (!project) {
            return { status: 'error', message: 'Project not found' };
        }

        return { status: 'success', content: project, message: 'Project fetched successfully' };

    } catch (error) {
        console.error('Error fetching project:', error);
        return { status: 'error', content: null, message: 'Internal Server Error' };
    }
}