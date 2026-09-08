import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "auto_solutions_items" ALTER COLUMN "auto_solution_description" SET DATA TYPE jsonb;
  ALTER TABLE "auto_solutions_items" ALTER COLUMN "auto_solution_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter solution description..."}]}]}}'::jsonb;
  ALTER TABLE "auto_why_items" ALTER COLUMN "why_description" SET DATA TYPE jsonb;
  ALTER TABLE "auto_why_items" ALTER COLUMN "why_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter description..."}]}]}}'::jsonb;
  ALTER TABLE "auto_faq_items" ALTER COLUMN "faq_answer" SET DATA TYPE jsonb;
  ALTER TABLE "auto_faq_items" ALTER COLUMN "faq_answer" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter answer..."}]}]}}'::jsonb;
  ALTER TABLE "automotive_page" ALTER COLUMN "auto_hero_auto_hero_description" SET DATA TYPE jsonb;
  ALTER TABLE "automotive_page" ALTER COLUMN "auto_hero_auto_hero_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"We provide expert automotive software development services for vehicle automation, safety, connectivity, and performance optimization."}]}]}}'::jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "auto_solutions_items" ALTER COLUMN "auto_solution_description" SET DATA TYPE varchar;
  ALTER TABLE "auto_solutions_items" ALTER COLUMN "auto_solution_description" DROP DEFAULT;
  ALTER TABLE "auto_why_items" ALTER COLUMN "why_description" SET DATA TYPE varchar;
  ALTER TABLE "auto_why_items" ALTER COLUMN "why_description" DROP DEFAULT;
  ALTER TABLE "auto_faq_items" ALTER COLUMN "faq_answer" SET DATA TYPE varchar;
  ALTER TABLE "auto_faq_items" ALTER COLUMN "faq_answer" DROP DEFAULT;
  ALTER TABLE "automotive_page" ALTER COLUMN "auto_hero_auto_hero_description" SET DATA TYPE varchar;
  ALTER TABLE "automotive_page" ALTER COLUMN "auto_hero_auto_hero_description" SET DEFAULT 'We provide expert automotive software development services for vehicle automation, safety, connectivity, and performance optimization.';`)
}
