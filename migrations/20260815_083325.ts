import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_page_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_blog_page_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TABLE "footer_company_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "blog_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"blog_hero_blog_badge_label" varchar DEFAULT 'Blogs',
  	"blog_hero_blog_title_line1" varchar DEFAULT 'The Optimal Dive',
  	"blog_hero_blog_title_highlight" varchar DEFAULT 'Insights',
  	"blog_hero_blog_hero_image_id" integer,
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
  	"meta_social_twitter_card" "enum_blog_page_meta_social_twitter_card" DEFAULT 'summary_large_image',
  	"meta_schema_schema_type" "enum_blog_page_meta_schema_schema_type" DEFAULT 'WebPage',
  	"meta_schema_custom_schema" jsonb,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DROP TABLE "footer_company_links" CASCADE;
  ALTER TABLE "footer" ADD COLUMN "company_links_heading" varchar DEFAULT 'Company' NOT NULL;
  ALTER TABLE "footer_company_links_links" ADD CONSTRAINT "footer_company_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page" ADD CONSTRAINT "blog_page_blog_hero_blog_hero_image_id_media_id_fk" FOREIGN KEY ("blog_hero_blog_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_page" ADD CONSTRAINT "blog_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_page" ADD CONSTRAINT "blog_page_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_page" ADD CONSTRAINT "blog_page_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_company_links_links_order_idx" ON "footer_company_links_links" USING btree ("_order");
  CREATE INDEX "footer_company_links_links_parent_id_idx" ON "footer_company_links_links" USING btree ("_parent_id");
  CREATE INDEX "blog_page_blog_hero_blog_hero_blog_hero_image_idx" ON "blog_page" USING btree ("blog_hero_blog_hero_image_id");
  CREATE INDEX "blog_page_meta_meta_image_idx" ON "blog_page" USING btree ("meta_image_id");
  CREATE INDEX "blog_page_meta_social_meta_social_og_image_idx" ON "blog_page" USING btree ("meta_social_og_image_id");
  CREATE INDEX "blog_page_meta_social_meta_social_twitter_image_idx" ON "blog_page" USING btree ("meta_social_twitter_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "footer_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL
  );
  
  DROP TABLE "footer_company_links_links" CASCADE;
  DROP TABLE "blog_page" CASCADE;
  ALTER TABLE "footer_company_links" ADD CONSTRAINT "footer_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_company_links_order_idx" ON "footer_company_links" USING btree ("_order");
  CREATE INDEX "footer_company_links_parent_id_idx" ON "footer_company_links" USING btree ("_parent_id");
  ALTER TABLE "footer" DROP COLUMN "company_links_heading";
  DROP TYPE "public"."enum_blog_page_meta_social_twitter_card";
  DROP TYPE "public"."enum_blog_page_meta_schema_schema_type";`)
}
