import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_posts_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_posts_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TYPE "public"."enum__posts_v_version_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum__posts_v_version_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TYPE "public"."enum_pages_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_pages_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TYPE "public"."enum__pages_v_version_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum__pages_v_version_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TYPE "public"."enum_home_page_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_home_page_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TYPE "public"."enum_auto_why_items_why_icon" AS ENUM('UserRound', 'Cog', 'ShieldCheck', 'ClipboardCheck', 'LayoutDashboard', 'Megaphone');
  CREATE TYPE "public"."enum_automotive_page_meta_social_twitter_card" AS ENUM('summary_large_image', 'summary');
  CREATE TYPE "public"."enum_automotive_page_meta_schema_schema_type" AS ENUM('WebPage', 'Article', 'BlogPosting', 'Service', 'FAQPage', 'MedicalOrganization', 'Physician');
  CREATE TABLE "home_page_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stat_value" varchar NOT NULL,
  	"stat_label" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_clients_client_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"client_name" varchar NOT NULL,
  	"client_logo_id" integer
  );
  
  CREATE TABLE "home_page_success_stories_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"project_title" varchar NOT NULL,
  	"project_category" varchar NOT NULL,
  	"project_image_id" integer,
  	"project_large" boolean DEFAULT false
  );
  
  CREATE TABLE "home_page_services_service_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_title" varchar NOT NULL,
  	"service_description" varchar NOT NULL,
  	"service_image_id" integer
  );
  
  CREATE TABLE "home_page_process_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_title" varchar NOT NULL,
  	"step_description" varchar NOT NULL,
  	"step_icon_id" integer
  );
  
  CREATE TABLE "home_page_testimonials_testimonial_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"testimonial_name" varchar NOT NULL,
  	"testimonial_review" varchar NOT NULL,
  	"testimonial_rating" numeric DEFAULT 5,
  	"testimonial_avatar_id" integer
  );
  
  CREATE TABLE "home_page_industries_industry_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"industry_title" varchar NOT NULL,
  	"industry_description" varchar NOT NULL,
  	"industry_icon_id" integer
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_hero_title_line1" varchar DEFAULT 'Transforming',
  	"hero_hero_title_highlight" varchar DEFAULT 'Digital Futures',
  	"hero_hero_cta_label" varchar DEFAULT 'Start Your Project',
  	"hero_hero_cta_link" varchar DEFAULT '/contact-us',
  	"hero_hero_background_image_id" integer,
  	"hero_hero_foreground_image_id" integer,
  	"about_about_heading" varchar DEFAULT 'Who We Are',
  	"about_about_highlight_text" varchar DEFAULT 'Optimal Dive is a full-cycle product development company',
  	"about_about_body_text" varchar DEFAULT 'built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact.',
  	"clients_clients_heading" varchar DEFAULT 'Clients We''ve Served',
  	"success_stories_success_heading" varchar DEFAULT 'Our Success Stories',
  	"success_stories_success_view_more_label" varchar DEFAULT 'View More',
  	"success_stories_success_cta_label" varchar DEFAULT 'Start Your Project',
  	"success_stories_success_cta_link" varchar DEFAULT '/contact-us',
  	"services_services_heading" varchar DEFAULT 'Services We Provide',
  	"process_process_heading" varchar DEFAULT 'Our Product Development Process',
  	"technologies_tech_heading" varchar DEFAULT 'Technologies We Use',
  	"technologies_tech_description" varchar DEFAULT 'Hire from our pool of 350+ specialized experts in web, mobile and software engineering, specializing in the latest technologies and frameworks ready to scale your development team effortlessly.',
  	"technologies_tech_cta_heading" varchar DEFAULT 'Ready to build something lasting?',
  	"technologies_tech_cta_label" varchar DEFAULT 'Start Your Project',
  	"technologies_tech_cta_link" varchar DEFAULT '/contact-us',
  	"testimonials_testimonials_heading1" varchar DEFAULT 'Our Clients Simply Love',
  	"testimonials_testimonials_heading2" varchar DEFAULT 'What We Do',
  	"industries_industries_heading" varchar DEFAULT 'Industries We Serve',
  	"industries_industries_description" varchar DEFAULT 'We provide tailored solutions that address the unique demands across various industries, delivering transformative experiences to drive significant impact.',
  	"latest_insights_insights_heading" varchar DEFAULT 'Latest Insights',
  	"latest_insights_insights_cta_label" varchar DEFAULT 'View All',
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
  	"meta_social_twitter_card" "enum_home_page_meta_social_twitter_card" DEFAULT 'summary_large_image',
  	"meta_schema_schema_type" "enum_home_page_meta_schema_schema_type" DEFAULT 'WebPage',
  	"meta_schema_custom_schema" jsonb,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "auto_hero_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"auto_stat_value" varchar NOT NULL,
  	"auto_stat_label" varchar NOT NULL
  );
  
  CREATE TABLE "auto_solution_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_text" varchar NOT NULL
  );
  
  CREATE TABLE "auto_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"auto_solution_number" varchar NOT NULL,
  	"auto_solution_title" varchar NOT NULL,
  	"auto_solution_description" varchar NOT NULL
  );
  
  CREATE TABLE "auto_why_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"why_title" varchar NOT NULL,
  	"why_icon" "enum_auto_why_items_why_icon" DEFAULT 'UserRound',
  	"why_description" varchar NOT NULL
  );
  
  CREATE TABLE "auto_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faq_question" varchar NOT NULL,
  	"faq_answer" varchar NOT NULL
  );
  
  CREATE TABLE "automotive_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"auto_hero_auto_hero_badge_label" varchar DEFAULT 'Brand Identity Design',
  	"auto_hero_auto_hero_title_line1" varchar DEFAULT 'Automotive Software',
  	"auto_hero_auto_hero_title_highlight" varchar DEFAULT 'Development Services',
  	"auto_hero_auto_hero_description" varchar DEFAULT 'We provide expert automotive software development services for vehicle automation, safety, connectivity, and performance optimization.',
  	"auto_hero_auto_hero_cta_label" varchar DEFAULT 'Start Your Project',
  	"auto_hero_auto_hero_cta_link" varchar DEFAULT '/contact-us',
  	"auto_hero_auto_hero_image_id" integer,
  	"auto_solutions_auto_solutions_title" varchar DEFAULT 'Software Solutions for',
  	"auto_solutions_auto_solutions_highlight" varchar DEFAULT 'Automotive Industry',
  	"auto_why_choose_us_auto_why_title" varchar DEFAULT 'Why us for Automotive business',
  	"auto_faq_auto_faq_heading" varchar DEFAULT 'Common Branding Questions',
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
  	"meta_social_twitter_card" "enum_automotive_page_meta_social_twitter_card" DEFAULT 'summary_large_image',
  	"meta_schema_schema_type" "enum_automotive_page_meta_schema_schema_type" DEFAULT 'WebPage',
  	"meta_schema_custom_schema" jsonb,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "posts" ADD COLUMN "meta_canonical_u_r_l" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_robots_no_index" boolean DEFAULT false;
  ALTER TABLE "posts" ADD COLUMN "meta_robots_no_follow" boolean DEFAULT false;
  ALTER TABLE "posts" ADD COLUMN "meta_social_og_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_social_og_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_social_og_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_social_twitter_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_social_twitter_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_social_twitter_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_social_twitter_card" "enum_posts_meta_social_twitter_card" DEFAULT 'summary_large_image';
  ALTER TABLE "posts" ADD COLUMN "meta_schema_schema_type" "enum_posts_meta_schema_schema_type" DEFAULT 'WebPage';
  ALTER TABLE "posts" ADD COLUMN "meta_schema_custom_schema" jsonb;
  ALTER TABLE "posts" ADD COLUMN "meta_keywords" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_canonical_u_r_l" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_robots_no_index" boolean DEFAULT false;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_robots_no_follow" boolean DEFAULT false;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_og_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_og_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_og_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_twitter_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_twitter_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_twitter_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_social_twitter_card" "enum__posts_v_version_meta_social_twitter_card" DEFAULT 'summary_large_image';
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_schema_schema_type" "enum__posts_v_version_meta_schema_schema_type" DEFAULT 'WebPage';
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_schema_custom_schema" jsonb;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_keywords" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_canonical_u_r_l" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_robots_no_index" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "meta_robots_no_follow" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "meta_social_og_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_social_og_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_social_og_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_social_twitter_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_social_twitter_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_social_twitter_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_social_twitter_card" "enum_pages_meta_social_twitter_card" DEFAULT 'summary_large_image';
  ALTER TABLE "pages" ADD COLUMN "meta_schema_schema_type" "enum_pages_meta_schema_schema_type" DEFAULT 'WebPage';
  ALTER TABLE "pages" ADD COLUMN "meta_schema_custom_schema" jsonb;
  ALTER TABLE "pages" ADD COLUMN "meta_keywords" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_canonical_u_r_l" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_robots_no_index" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_robots_no_follow" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_og_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_og_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_og_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_twitter_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_twitter_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_twitter_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_social_twitter_card" "enum__pages_v_version_meta_social_twitter_card" DEFAULT 'summary_large_image';
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_schema_schema_type" "enum__pages_v_version_meta_schema_schema_type" DEFAULT 'WebPage';
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_schema_custom_schema" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_keywords" varchar;
  ALTER TABLE "home_page_stats" ADD CONSTRAINT "home_page_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_clients_client_logos" ADD CONSTRAINT "home_page_clients_client_logos_client_logo_id_media_id_fk" FOREIGN KEY ("client_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_clients_client_logos" ADD CONSTRAINT "home_page_clients_client_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_success_stories_projects" ADD CONSTRAINT "home_page_success_stories_projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_success_stories_projects" ADD CONSTRAINT "home_page_success_stories_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_services_service_items" ADD CONSTRAINT "home_page_services_service_items_service_image_id_media_id_fk" FOREIGN KEY ("service_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_services_service_items" ADD CONSTRAINT "home_page_services_service_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_process_process_steps" ADD CONSTRAINT "home_page_process_process_steps_step_icon_id_media_id_fk" FOREIGN KEY ("step_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_process_process_steps" ADD CONSTRAINT "home_page_process_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_testimonials_testimonial_items" ADD CONSTRAINT "home_page_testimonials_testimonial_items_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("testimonial_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_testimonials_testimonial_items" ADD CONSTRAINT "home_page_testimonials_testimonial_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_industries_industry_items" ADD CONSTRAINT "home_page_industries_industry_items_industry_icon_id_media_id_fk" FOREIGN KEY ("industry_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_industries_industry_items" ADD CONSTRAINT "home_page_industries_industry_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_hero_foreground_image_id_media_id_fk" FOREIGN KEY ("hero_hero_foreground_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "auto_hero_stats" ADD CONSTRAINT "auto_hero_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."automotive_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "auto_solution_features" ADD CONSTRAINT "auto_solution_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."auto_solutions_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "auto_solutions_items" ADD CONSTRAINT "auto_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."automotive_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "auto_why_items" ADD CONSTRAINT "auto_why_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."automotive_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "auto_faq_items" ADD CONSTRAINT "auto_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."automotive_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "automotive_page" ADD CONSTRAINT "automotive_page_auto_hero_auto_hero_image_id_media_id_fk" FOREIGN KEY ("auto_hero_auto_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "automotive_page" ADD CONSTRAINT "automotive_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "automotive_page" ADD CONSTRAINT "automotive_page_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "automotive_page" ADD CONSTRAINT "automotive_page_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_page_stats_order_idx" ON "home_page_stats" USING btree ("_order");
  CREATE INDEX "home_page_stats_parent_id_idx" ON "home_page_stats" USING btree ("_parent_id");
  CREATE INDEX "home_page_clients_client_logos_order_idx" ON "home_page_clients_client_logos" USING btree ("_order");
  CREATE INDEX "home_page_clients_client_logos_parent_id_idx" ON "home_page_clients_client_logos" USING btree ("_parent_id");
  CREATE INDEX "home_page_clients_client_logos_client_logo_idx" ON "home_page_clients_client_logos" USING btree ("client_logo_id");
  CREATE INDEX "home_page_success_stories_projects_order_idx" ON "home_page_success_stories_projects" USING btree ("_order");
  CREATE INDEX "home_page_success_stories_projects_parent_id_idx" ON "home_page_success_stories_projects" USING btree ("_parent_id");
  CREATE INDEX "home_page_success_stories_projects_project_image_idx" ON "home_page_success_stories_projects" USING btree ("project_image_id");
  CREATE INDEX "home_page_services_service_items_order_idx" ON "home_page_services_service_items" USING btree ("_order");
  CREATE INDEX "home_page_services_service_items_parent_id_idx" ON "home_page_services_service_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_services_service_items_service_image_idx" ON "home_page_services_service_items" USING btree ("service_image_id");
  CREATE INDEX "home_page_process_process_steps_order_idx" ON "home_page_process_process_steps" USING btree ("_order");
  CREATE INDEX "home_page_process_process_steps_parent_id_idx" ON "home_page_process_process_steps" USING btree ("_parent_id");
  CREATE INDEX "home_page_process_process_steps_step_icon_idx" ON "home_page_process_process_steps" USING btree ("step_icon_id");
  CREATE INDEX "home_page_testimonials_testimonial_items_order_idx" ON "home_page_testimonials_testimonial_items" USING btree ("_order");
  CREATE INDEX "home_page_testimonials_testimonial_items_parent_id_idx" ON "home_page_testimonials_testimonial_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_testimonials_testimonial_items_testimonial_ava_idx" ON "home_page_testimonials_testimonial_items" USING btree ("testimonial_avatar_id");
  CREATE INDEX "home_page_industries_industry_items_order_idx" ON "home_page_industries_industry_items" USING btree ("_order");
  CREATE INDEX "home_page_industries_industry_items_parent_id_idx" ON "home_page_industries_industry_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_industries_industry_items_industry_icon_idx" ON "home_page_industries_industry_items" USING btree ("industry_icon_id");
  CREATE INDEX "home_page_hero_hero_hero_background_image_idx" ON "home_page" USING btree ("hero_hero_background_image_id");
  CREATE INDEX "home_page_hero_hero_hero_foreground_image_idx" ON "home_page" USING btree ("hero_hero_foreground_image_id");
  CREATE INDEX "home_page_meta_meta_image_idx" ON "home_page" USING btree ("meta_image_id");
  CREATE INDEX "home_page_meta_social_meta_social_og_image_idx" ON "home_page" USING btree ("meta_social_og_image_id");
  CREATE INDEX "home_page_meta_social_meta_social_twitter_image_idx" ON "home_page" USING btree ("meta_social_twitter_image_id");
  CREATE INDEX "auto_hero_stats_order_idx" ON "auto_hero_stats" USING btree ("_order");
  CREATE INDEX "auto_hero_stats_parent_id_idx" ON "auto_hero_stats" USING btree ("_parent_id");
  CREATE INDEX "auto_solution_features_order_idx" ON "auto_solution_features" USING btree ("_order");
  CREATE INDEX "auto_solution_features_parent_id_idx" ON "auto_solution_features" USING btree ("_parent_id");
  CREATE INDEX "auto_solutions_items_order_idx" ON "auto_solutions_items" USING btree ("_order");
  CREATE INDEX "auto_solutions_items_parent_id_idx" ON "auto_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "auto_why_items_order_idx" ON "auto_why_items" USING btree ("_order");
  CREATE INDEX "auto_why_items_parent_id_idx" ON "auto_why_items" USING btree ("_parent_id");
  CREATE INDEX "auto_faq_items_order_idx" ON "auto_faq_items" USING btree ("_order");
  CREATE INDEX "auto_faq_items_parent_id_idx" ON "auto_faq_items" USING btree ("_parent_id");
  CREATE INDEX "automotive_page_auto_hero_auto_hero_auto_hero_image_idx" ON "automotive_page" USING btree ("auto_hero_auto_hero_image_id");
  CREATE INDEX "automotive_page_meta_meta_image_idx" ON "automotive_page" USING btree ("meta_image_id");
  CREATE INDEX "automotive_page_meta_social_meta_social_og_image_idx" ON "automotive_page" USING btree ("meta_social_og_image_id");
  CREATE INDEX "automotive_page_meta_social_meta_social_twitter_image_idx" ON "automotive_page" USING btree ("meta_social_twitter_image_id");
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("version_meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_social_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_social_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_social_twitter_image_id_media_id_fk" FOREIGN KEY ("version_meta_social_twitter_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "posts_meta_social_meta_social_og_image_idx" ON "posts" USING btree ("meta_social_og_image_id");
  CREATE INDEX "posts_meta_social_meta_social_twitter_image_idx" ON "posts" USING btree ("meta_social_twitter_image_id");
  CREATE INDEX "_posts_v_version_meta_social_version_meta_social_og_imag_idx" ON "_posts_v" USING btree ("version_meta_social_og_image_id");
  CREATE INDEX "_posts_v_version_meta_social_version_meta_social_twitter_idx" ON "_posts_v" USING btree ("version_meta_social_twitter_image_id");
  CREATE INDEX "pages_meta_social_meta_social_og_image_idx" ON "pages" USING btree ("meta_social_og_image_id");
  CREATE INDEX "pages_meta_social_meta_social_twitter_image_idx" ON "pages" USING btree ("meta_social_twitter_image_id");
  CREATE INDEX "_pages_v_version_meta_social_version_meta_social_og_imag_idx" ON "_pages_v" USING btree ("version_meta_social_og_image_id");
  CREATE INDEX "_pages_v_version_meta_social_version_meta_social_twitter_idx" ON "_pages_v" USING btree ("version_meta_social_twitter_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_clients_client_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_success_stories_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_services_service_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_process_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_testimonials_testimonial_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_industries_industry_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "auto_hero_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "auto_solution_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "auto_solutions_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "auto_why_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "auto_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "automotive_page" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "home_page_stats" CASCADE;
  DROP TABLE "home_page_clients_client_logos" CASCADE;
  DROP TABLE "home_page_success_stories_projects" CASCADE;
  DROP TABLE "home_page_services_service_items" CASCADE;
  DROP TABLE "home_page_process_process_steps" CASCADE;
  DROP TABLE "home_page_testimonials_testimonial_items" CASCADE;
  DROP TABLE "home_page_industries_industry_items" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "auto_hero_stats" CASCADE;
  DROP TABLE "auto_solution_features" CASCADE;
  DROP TABLE "auto_solutions_items" CASCADE;
  DROP TABLE "auto_why_items" CASCADE;
  DROP TABLE "auto_faq_items" CASCADE;
  DROP TABLE "automotive_page" CASCADE;
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_social_og_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_social_twitter_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_social_og_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_social_twitter_image_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_social_og_image_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_social_twitter_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_social_og_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_social_twitter_image_id_media_id_fk";
  
  DROP INDEX "posts_meta_social_meta_social_og_image_idx";
  DROP INDEX "posts_meta_social_meta_social_twitter_image_idx";
  DROP INDEX "_posts_v_version_meta_social_version_meta_social_og_imag_idx";
  DROP INDEX "_posts_v_version_meta_social_version_meta_social_twitter_idx";
  DROP INDEX "pages_meta_social_meta_social_og_image_idx";
  DROP INDEX "pages_meta_social_meta_social_twitter_image_idx";
  DROP INDEX "_pages_v_version_meta_social_version_meta_social_og_imag_idx";
  DROP INDEX "_pages_v_version_meta_social_version_meta_social_twitter_idx";
  ALTER TABLE "posts" DROP COLUMN "meta_canonical_u_r_l";
  ALTER TABLE "posts" DROP COLUMN "meta_robots_no_index";
  ALTER TABLE "posts" DROP COLUMN "meta_robots_no_follow";
  ALTER TABLE "posts" DROP COLUMN "meta_social_og_title";
  ALTER TABLE "posts" DROP COLUMN "meta_social_og_description";
  ALTER TABLE "posts" DROP COLUMN "meta_social_og_image_id";
  ALTER TABLE "posts" DROP COLUMN "meta_social_twitter_title";
  ALTER TABLE "posts" DROP COLUMN "meta_social_twitter_description";
  ALTER TABLE "posts" DROP COLUMN "meta_social_twitter_image_id";
  ALTER TABLE "posts" DROP COLUMN "meta_social_twitter_card";
  ALTER TABLE "posts" DROP COLUMN "meta_schema_schema_type";
  ALTER TABLE "posts" DROP COLUMN "meta_schema_custom_schema";
  ALTER TABLE "posts" DROP COLUMN "meta_keywords";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_canonical_u_r_l";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_robots_no_index";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_robots_no_follow";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_og_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_og_description";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_og_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_twitter_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_twitter_description";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_twitter_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_social_twitter_card";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_schema_schema_type";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_schema_custom_schema";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_keywords";
  ALTER TABLE "pages" DROP COLUMN "meta_canonical_u_r_l";
  ALTER TABLE "pages" DROP COLUMN "meta_robots_no_index";
  ALTER TABLE "pages" DROP COLUMN "meta_robots_no_follow";
  ALTER TABLE "pages" DROP COLUMN "meta_social_og_title";
  ALTER TABLE "pages" DROP COLUMN "meta_social_og_description";
  ALTER TABLE "pages" DROP COLUMN "meta_social_og_image_id";
  ALTER TABLE "pages" DROP COLUMN "meta_social_twitter_title";
  ALTER TABLE "pages" DROP COLUMN "meta_social_twitter_description";
  ALTER TABLE "pages" DROP COLUMN "meta_social_twitter_image_id";
  ALTER TABLE "pages" DROP COLUMN "meta_social_twitter_card";
  ALTER TABLE "pages" DROP COLUMN "meta_schema_schema_type";
  ALTER TABLE "pages" DROP COLUMN "meta_schema_custom_schema";
  ALTER TABLE "pages" DROP COLUMN "meta_keywords";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_canonical_u_r_l";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_robots_no_index";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_robots_no_follow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_og_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_og_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_og_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_twitter_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_twitter_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_twitter_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_social_twitter_card";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_schema_schema_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_schema_custom_schema";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_keywords";
  DROP TYPE "public"."enum_posts_meta_social_twitter_card";
  DROP TYPE "public"."enum_posts_meta_schema_schema_type";
  DROP TYPE "public"."enum__posts_v_version_meta_social_twitter_card";
  DROP TYPE "public"."enum__posts_v_version_meta_schema_schema_type";
  DROP TYPE "public"."enum_pages_meta_social_twitter_card";
  DROP TYPE "public"."enum_pages_meta_schema_schema_type";
  DROP TYPE "public"."enum__pages_v_version_meta_social_twitter_card";
  DROP TYPE "public"."enum__pages_v_version_meta_schema_schema_type";
  DROP TYPE "public"."enum_home_page_meta_social_twitter_card";
  DROP TYPE "public"."enum_home_page_meta_schema_schema_type";
  DROP TYPE "public"."enum_auto_why_items_why_icon";
  DROP TYPE "public"."enum_automotive_page_meta_social_twitter_card";
  DROP TYPE "public"."enum_automotive_page_meta_schema_schema_type";`)
}
