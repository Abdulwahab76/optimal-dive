import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "tech_icons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tech_name" varchar NOT NULL,
  	"tech_logo_id" integer,
  	"tech_x" numeric DEFAULT 0,
  	"tech_y" numeric DEFAULT 0,
  	"tech_size" numeric DEFAULT 60
  );
  
  ALTER TABLE "tech_icons" ADD CONSTRAINT "tech_icons_tech_logo_id_media_id_fk" FOREIGN KEY ("tech_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tech_icons" ADD CONSTRAINT "tech_icons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "tech_icons_order_idx" ON "tech_icons" USING btree ("_order");
  CREATE INDEX "tech_icons_parent_id_idx" ON "tech_icons" USING btree ("_parent_id");
  CREATE INDEX "tech_icons_tech_logo_idx" ON "tech_icons" USING btree ("tech_logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "tech_icons" CASCADE;`)
}
