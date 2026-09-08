import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" SET DATA TYPE jsonb;
  ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" DROP NOT NULL;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" SET DATA TYPE jsonb;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" DROP NOT NULL;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_hero_brand_hero_description" SET DATA TYPE jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_hero_brand_hero_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"We design iconic brand identities that work via visual design, messaging, and positioning. We help you convey your value, build trust, and become a brand that performs well and is remembered by your audience."}]}]}}'::jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_showcase_showcase_description" SET DATA TYPE jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_showcase_showcase_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_services_brand_services_description" SET DATA TYPE jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_services_brand_services_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_stats_stats_description" SET DATA TYPE jsonb;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_stats_stats_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" SET DATA TYPE varchar;
  ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" DROP DEFAULT;
  ALTER TABLE "brand_service_items" ALTER COLUMN "bs_description" SET NOT NULL;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" SET DATA TYPE varchar;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" DROP DEFAULT;
  ALTER TABLE "brand_process_steps" ALTER COLUMN "bp_description" SET NOT NULL;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_hero_brand_hero_description" SET DATA TYPE varchar;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_hero_brand_hero_description" SET DEFAULT 'We design iconic brand identities that work via visual design, messaging, and positioning. We help you convey your value, build trust, and become a brand that performs well and is remembered by your audience.';
  ALTER TABLE "branding_page" ALTER COLUMN "brand_showcase_showcase_description" SET DATA TYPE varchar;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_showcase_showcase_description" SET DEFAULT 'Branding is the strategic process of creating a unique identity for your business. It encompasses everything from your visual identity and tone of voice to your values and customer experience. At Optimal Dev, we believe great branding tells a story that connects, converts, and creates loyalty.';
  ALTER TABLE "branding_page" ALTER COLUMN "brand_services_brand_services_description" SET DATA TYPE varchar;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_services_brand_services_description" SET DEFAULT 'From strategic foundations to visual execution, we provide end-to-end branding solutions.';
  ALTER TABLE "branding_page" ALTER COLUMN "brand_stats_stats_description" SET DATA TYPE varchar;
  ALTER TABLE "branding_page" ALTER COLUMN "brand_stats_stats_description" SET DEFAULT 'Branding isn''t just about aesthetics; it''s a measurable driver of business growth.';`)
}
