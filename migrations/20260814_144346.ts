import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contact_page_cards_cc_icon" AS ENUM('Phone', 'Send', 'MapPin');
  CREATE TYPE "public"."enum_contact_page_process_steps_ps_icon" AS ENUM('Video', 'PhoneCall', 'TrendingUp');
  CREATE TYPE "public"."enum_contact_page_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_contact_page_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TABLE "contact_page_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cc_title" varchar NOT NULL,
  	"cc_value" varchar NOT NULL,
  	"cc_icon" "enum_contact_page_cards_cc_icon" DEFAULT 'Phone'
  );
  
  CREATE TABLE "contact_page_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ps_title" varchar NOT NULL,
  	"ps_icon" "enum_contact_page_process_steps_ps_icon" DEFAULT 'Video',
  	"ps_description" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge_label" varchar DEFAULT 'Contact Us',
  	"hero_title_line1" varchar DEFAULT 'Let''s Build Something',
  	"hero_title_highlight" varchar DEFAULT 'Amazing Together',
  	"hero_description" varchar DEFAULT 'Have a project in mind? Tell us about your goals and our team will help turn your ideas into powerful digital solutions.',
  	"form_panel_panel_image_id" integer,
  	"form_panel_panel_eyebrow" varchar DEFAULT 'Contact Optimal Dive',
  	"form_panel_panel_title_line1" varchar DEFAULT 'Let''s build your next',
  	"form_panel_panel_title_highlight" varchar DEFAULT 'digital solution',
  	"form_panel_panel_description" varchar DEFAULT 'Share your idea with our team and let''s create something powerful together.',
  	"process_process_eyebrow" varchar DEFAULT 'Our Process',
  	"process_process_heading" varchar DEFAULT 'How We Work Together',
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
  	"meta_social_twitter_card" "enum_contact_page_meta_social_twitter_card" DEFAULT 'summary_large_image',
  	"meta_schema_schema_type" "enum_contact_page_meta_schema_schema_type" DEFAULT 'WebPage',
  	"meta_schema_custom_schema" jsonb,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "contact_page_cards" ADD CONSTRAINT "contact_page_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_process_steps" ADD CONSTRAINT "contact_page_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_form_panel_panel_image_id_media_id_fk" FOREIGN KEY ("form_panel_panel_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "contact_page_cards_order_idx" ON "contact_page_cards" USING btree ("_order");
  CREATE INDEX "contact_page_cards_parent_id_idx" ON "contact_page_cards" USING btree ("_parent_id");
  CREATE INDEX "contact_page_process_steps_order_idx" ON "contact_page_process_steps" USING btree ("_order");
  CREATE INDEX "contact_page_process_steps_parent_id_idx" ON "contact_page_process_steps" USING btree ("_parent_id");
  CREATE INDEX "contact_page_form_panel_form_panel_panel_image_idx" ON "contact_page" USING btree ("form_panel_panel_image_id");
  CREATE INDEX "contact_page_meta_meta_image_idx" ON "contact_page" USING btree ("meta_image_id");
  CREATE INDEX "contact_page_meta_social_meta_social_og_image_idx" ON "contact_page" USING btree ("meta_social_og_image_id");
  CREATE INDEX "contact_page_meta_social_meta_social_twitter_image_idx" ON "contact_page" USING btree ("meta_social_twitter_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_page_cards" CASCADE;
  DROP TABLE "contact_page_process_steps" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TYPE "public"."enum_contact_page_cards_cc_icon";
  DROP TYPE "public"."enum_contact_page_process_steps_ps_icon";
  DROP TYPE "public"."enum_contact_page_meta_social_twitter_card";
  DROP TYPE "public"."enum_contact_page_meta_schema_schema_type";`)
}
