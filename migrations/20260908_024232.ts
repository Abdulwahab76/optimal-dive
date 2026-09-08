import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page_process_process_steps" ALTER COLUMN "step_description" SET DATA TYPE jsonb;
  ALTER TABLE "home_page_process_process_steps" ALTER COLUMN "step_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter step description..."}]}]}}'::jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page_process_process_steps" ALTER COLUMN "step_description" SET DATA TYPE varchar;
  ALTER TABLE "home_page_process_process_steps" ALTER COLUMN "step_description" DROP DEFAULT;`)
}
