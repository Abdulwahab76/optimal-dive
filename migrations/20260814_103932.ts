import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_navbar_service_items_sm_icon" AS ENUM('PenTool', 'Code2', 'Smartphone', 'Sparkles', 'Megaphone', 'Search', 'ShoppingCart');
  CREATE TABLE "navbar_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"nav_label" varchar NOT NULL,
  	"nav_href" varchar NOT NULL
  );
  
  CREATE TABLE "navbar_service_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sm_title" varchar NOT NULL,
  	"sm_desc" varchar NOT NULL,
  	"sm_href" varchar NOT NULL,
  	"sm_icon" "enum_navbar_service_items_sm_icon" DEFAULT 'Code2'
  );
  
  CREATE TABLE "navbar_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"im_title" varchar NOT NULL,
  	"im_desc" varchar NOT NULL,
  	"im_href" varchar NOT NULL
  );
  
  CREATE TABLE "navbar" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"contact_cta_label" varchar DEFAULT 'contact',
  	"contact_cta_link" varchar DEFAULT '/contact-us',
  	"services_menu_highlight_title" varchar DEFAULT 'Branding',
  	"services_menu_highlight_description" varchar DEFAULT 'We design iconic brand identities that work via visual design……',
  	"services_menu_highlight_link" varchar DEFAULT '/branding',
  	"services_menu_highlight_cta_label" varchar DEFAULT 'Explore Branding',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "navbar_nav_links" ADD CONSTRAINT "navbar_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar_service_items" ADD CONSTRAINT "navbar_service_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar_industries_items" ADD CONSTRAINT "navbar_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar" ADD CONSTRAINT "navbar_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "navbar_nav_links_order_idx" ON "navbar_nav_links" USING btree ("_order");
  CREATE INDEX "navbar_nav_links_parent_id_idx" ON "navbar_nav_links" USING btree ("_parent_id");
  CREATE INDEX "navbar_service_items_order_idx" ON "navbar_service_items" USING btree ("_order");
  CREATE INDEX "navbar_service_items_parent_id_idx" ON "navbar_service_items" USING btree ("_parent_id");
  CREATE INDEX "navbar_industries_items_order_idx" ON "navbar_industries_items" USING btree ("_order");
  CREATE INDEX "navbar_industries_items_parent_id_idx" ON "navbar_industries_items" USING btree ("_parent_id");
  CREATE INDEX "navbar_logo_idx" ON "navbar" USING btree ("logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "navbar_nav_links" CASCADE;
  DROP TABLE "navbar_service_items" CASCADE;
  DROP TABLE "navbar_industries_items" CASCADE;
  DROP TABLE "navbar" CASCADE;
  DROP TYPE "public"."enum_navbar_service_items_sm_icon";`)
}
