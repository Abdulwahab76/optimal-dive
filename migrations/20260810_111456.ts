import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_brand_service_items_bs_icon" AS ENUM('BadgeCheck', 'Palette', 'MessageSquare', 'BookOpen', 'RefreshCw', 'LayoutGrid');
  CREATE TYPE "public"."enum_branding_page_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_branding_page_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TABLE "brand_service_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bs_title" varchar NOT NULL,
  	"bs_icon" "enum_brand_service_items_bs_icon" DEFAULT 'BadgeCheck',
  	"bs_description" varchar NOT NULL
  );
  
  CREATE TABLE "brand_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bp_title" varchar NOT NULL,
  	"bp_description" varchar NOT NULL,
  	"bp_icon_id" integer
  );
  
  CREATE TABLE "brand_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"b_stat_value" varchar NOT NULL,
  	"b_stat_label" varchar NOT NULL
  );
  
  CREATE TABLE "branding_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand_hero_brand_hero_badge_label" varchar DEFAULT 'Brand Identity Design',
  	"brand_hero_brand_hero_title_line1" varchar DEFAULT 'Crafting Identities',
  	"brand_hero_brand_hero_title_highlight" varchar DEFAULT 'That Resonate',
  	"brand_hero_brand_hero_description" varchar DEFAULT 'We design iconic brand identities that work via visual design, messaging, and positioning. We help you convey your value, build trust, and become a brand that performs well and is remembered by your audience.',
  	"brand_hero_brand_hero_cta_label" varchar DEFAULT 'Start Your Project',
  	"brand_hero_brand_hero_cta_link" varchar DEFAULT '/contact-us',
  	"brand_hero_brand_hero_image_id" integer,
  	"brand_showcase_showcase_side_image_id" integer,
  	"brand_showcase_showcase_heading" varchar DEFAULT 'More Than Just a Logo',
  	"brand_showcase_showcase_description" varchar DEFAULT 'Branding is the strategic process of creating a unique identity for your business. It encompasses everything from your visual identity and tone of voice to your values and customer experience. At Optimal Dev, we believe great branding tells a story that connects, converts, and creates loyalty.',
  	"brand_showcase_showcase_image_one_id" integer,
  	"brand_showcase_showcase_image_two_id" integer,
  	"brand_services_brand_services_heading" varchar DEFAULT 'Our Branding Services',
  	"brand_services_brand_services_description" varchar DEFAULT 'From strategic foundations to visual execution, we provide end-to-end branding solutions.',
  	"brand_process_process_heading" varchar DEFAULT 'Our Branding Process',
  	"brand_process_process_subheading" varchar DEFAULT 'A proven methodology to bring your brand to life.',
  	"brand_stats_stats_heading" varchar DEFAULT 'The Power of a Strong Brand',
  	"brand_stats_stats_description" varchar DEFAULT 'Branding isn''t just about aesthetics; it''s a measurable driver of business growth.',
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical_u_r_l" varchar,
  	"meta_robots_no_index" boolean DEFAULT false,
  	"meta_robots_no_follow" boolean DEFAULT false,
  	"meta_social_og_title" varchar,
  	"meta_social_og_description" varchar,
  	"meta_social_og_image_id" integer,
  	"meta_social_twitter_title" varchar,
  	"meta_social_twitter_description" varchar,
  	"meta_social_twitter_image_id" integer,
  	"meta_social_twitter_card" "enum_branding_page_meta_social_twitter_card" DEFAULT 'summary_large_image',
  	"meta_schema_schema_type" "enum_branding_page_meta_schema_schema_type" DEFAULT 'WebPage',
  	"meta_schema_custom_schema" jsonb,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "brand_service_items" ADD CONSTRAINT "brand_service_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."branding_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brand_process_steps" ADD CONSTRAINT "brand_process_steps_bp_icon_id_media_id_fk" FOREIGN KEY ("bp_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "brand_process_steps" ADD CONSTRAINT "brand_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."branding_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brand_stats_items" ADD CONSTRAINT "brand_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."branding_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_brand_hero_brand_hero_image_id_media_id_fk" FOREIGN KEY ("brand_hero_brand_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_brand_showcase_showcase_side_image_id_media_id_fk" FOREIGN KEY ("brand_showcase_showcase_side_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_brand_showcase_showcase_image_one_id_media_id_fk" FOREIGN KEY ("brand_showcase_showcase_image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_brand_showcase_showcase_image_two_id_media_id_fk" FOREIGN KEY ("brand_showcase_showcase_image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "branding_page" ADD CONSTRAINT "branding_page_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "brand_service_items_order_idx" ON "brand_service_items" USING btree ("_order");
  CREATE INDEX "brand_service_items_parent_id_idx" ON "brand_service_items" USING btree ("_parent_id");
  CREATE INDEX "brand_process_steps_order_idx" ON "brand_process_steps" USING btree ("_order");
  CREATE INDEX "brand_process_steps_parent_id_idx" ON "brand_process_steps" USING btree ("_parent_id");
  CREATE INDEX "brand_process_steps_bp_icon_idx" ON "brand_process_steps" USING btree ("bp_icon_id");
  CREATE INDEX "brand_stats_items_order_idx" ON "brand_stats_items" USING btree ("_order");
  CREATE INDEX "brand_stats_items_parent_id_idx" ON "brand_stats_items" USING btree ("_parent_id");
  CREATE INDEX "branding_page_brand_hero_brand_hero_brand_hero_image_idx" ON "branding_page" USING btree ("brand_hero_brand_hero_image_id");
  CREATE INDEX "branding_page_brand_showcase_brand_showcase_showcase_sid_idx" ON "branding_page" USING btree ("brand_showcase_showcase_side_image_id");
  CREATE INDEX "branding_page_brand_showcase_brand_showcase_showcase_ima_idx" ON "branding_page" USING btree ("brand_showcase_showcase_image_one_id");
  CREATE INDEX "branding_page_brand_showcase_brand_showcase_showcase_i_1_idx" ON "branding_page" USING btree ("brand_showcase_showcase_image_two_id");
  CREATE INDEX "branding_page_meta_meta_image_idx" ON "branding_page" USING btree ("meta_image_id");
  CREATE INDEX "branding_page_meta_social_meta_social_og_image_idx" ON "branding_page" USING btree ("meta_social_og_image_id");
  CREATE INDEX "branding_page_meta_social_meta_social_twitter_image_idx" ON "branding_page" USING btree ("meta_social_twitter_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "brand_service_items" CASCADE;
  DROP TABLE "brand_process_steps" CASCADE;
  DROP TABLE "brand_stats_items" CASCADE;
  DROP TABLE "branding_page" CASCADE;
  DROP TYPE "public"."enum_brand_service_items_bs_icon";
  DROP TYPE "public"."enum_branding_page_meta_social_twitter_card";
  DROP TYPE "public"."enum_branding_page_meta_schema_schema_type";`)
}
