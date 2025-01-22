import { int, mysqlTable, serial, varchar, text, timestamp, boolean, mysqlEnum, date } from "drizzle-orm/mysql-core";


export const Role = mysqlEnum('role', ['USER', 'ADMIN']);
export const skillsTable = mysqlTable('skills_table', {

    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    logo: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),

});


export const projectsTable = mysqlTable('projects_table', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    logo: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    link: varchar({ length: 255 }),
    github: varchar({ length: 255 }),
    image_preview: varchar({ length: 255 }).notNull(),
    image_preview_secondary: varchar({ length: 255 }).notNull(),
    tech_stack: varchar({ length: 255 }),
    status: varchar({ length: 255 }),

});

export const experienceTable = mysqlTable('experience_table', {
    id: serial().primaryKey(),
    company: varchar({ length: 255 }).notNull(),
    position: varchar({ length: 255 }).notNull(),
    startDate: date().notNull(),
    endDate: date().notNull(),
    logo : varchar({ length: 255 }).notNull(),
});

export const user = mysqlTable("user", {
    id: varchar("id", { length: 36 }).primaryKey(),
    name: text('name').notNull(),
    role: Role.default('USER'),
    email: varchar('email', { length: 255 }).notNull().unique(),
    emailVerified: boolean('email_verified').notNull(),
    image: text('image'),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at').notNull()
});

export const session = mysqlTable("session", {
    id: varchar("id", { length: 36 }).primaryKey(),
    expiresAt: timestamp('expires_at').notNull(),
    token: varchar('token', { length: 255 }).notNull().unique(),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at').notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id)
});

export const account = mysqlTable("account", {
    id: varchar("id", { length: 36 }).primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at').notNull()
});

export const verification = mysqlTable("verification", {
    id: varchar("id", { length: 36 }).primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at')
});