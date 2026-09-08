import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" SET DATA TYPE jsonb;
  ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" DROP NOT NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_description" SET DATA TYPE jsonb;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "contact_page" ALTER COLUMN "form_panel_panel_description" SET DATA TYPE jsonb;
  ALTER TABLE "contact_page" ALTER COLUMN "form_panel_panel_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" SET DATA TYPE varchar;
  ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" DROP DEFAULT;
  ALTER TABLE "contact_page_process_steps" ALTER COLUMN "ps_description" SET NOT NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_description" SET DATA TYPE varchar;
  ALTER TABLE "contact_page" ALTER COLUMN "hero_description" SET DEFAULT 'Have a project in mind? Tell us about your goals and our team will help turn your ideas into powerful digital solutions.';
  ALTER TABLE "contact_page" ALTER COLUMN "form_panel_panel_description" SET DATA TYPE varchar;
  ALTER TABLE "contact_page" ALTER COLUMN "form_panel_panel_description" SET DEFAULT 'Share your idea with our team and let''s create something powerful together.';`)
}
