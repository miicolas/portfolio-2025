'use server';

import { db } from '@/db';
import { projectsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { FormResponse } from '@/lib/types';
import { z } from 'zod';

const bodySchema = z.object({
    id: z.number(),
});

export default async function getProjectById(body: z.infer<typeof bodySchema>): Promise<FormResponse> {

    try {
        const validatedBody = bodySchema.safeParse(body);
        if (!validatedBody.success) {
            return { status: 'error', errors: validatedBody.error.issues };
        }

        const id = validatedBody.data.id;

        const project = await db
            .select()
            .from(projectsTable)
            .where(eq(projectsTable.id, id))
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