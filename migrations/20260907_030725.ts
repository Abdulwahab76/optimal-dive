import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_company_links_links" RENAME TO "footer_company_links";
  ALTER TABLE "footer_company_links" DROP CONSTRAINT "footer_company_links_links_parent_id_fk";
  
  DROP INDEX "footer_company_links_links_order_idx";
  DROP INDEX "footer_company_links_links_parent_id_idx";

  ALTER TABLE "home_page"
  ALTER COLUMN "about_about_body_text" TYPE jsonb
  USING jsonb_build_object(
    'root', jsonb_build_object(
      'type', 'root',
      'direction', 'ltr',
      'format', '',
      'indent', 0,
      'version', 1,
      'children', jsonb_build_array(
        jsonb_build_object(
          'type', 'paragraph',
          'direction', 'ltr',
          'format', '',
          'indent', 0,
          'version', 1,
          'children', jsonb_build_array(
            jsonb_build_object(
              'type', 'text',
              'version', 1,
              'text', "about_about_body_text"
            )
          )
        )
      )
    )
  );

  ALTER TABLE "home_page" ALTER COLUMN "about_about_body_text" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact."}]}]}}'::jsonb;

  ALTER TABLE "footer_company_links" ADD CONSTRAINT "footer_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_company_links_order_idx" ON "footer_company_links" USING btree ("_order");
  CREATE INDEX "footer_company_links_parent_id_idx" ON "footer_company_links" USING btree ("_parent_id");
  ALTER TABLE "footer" DROP COLUMN "company_links_heading";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_company_links" RENAME TO "footer_company_links_links";
  ALTER TABLE "footer_company_links_links" DROP CONSTRAINT "footer_company_links_parent_id_fk";
  
  DROP INDEX "footer_company_links_order_idx";
  DROP INDEX "footer_company_links_parent_id_idx";

  ALTER TABLE "home_page"
  ALTER COLUMN "about_about_body_text" TYPE varchar
  USING "about_about_body_text"->'root'->'children'->0->'children'->0->>'text';

  ALTER TABLE "home_page" ALTER COLUMN "about_about_body_text" SET DEFAULT 'built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact.';
  ALTER TABLE "footer" ADD COLUMN "company_links_heading" varchar DEFAULT 'Company' NOT NULL;
  ALTER TABLE "footer_company_links_links" ADD CONSTRAINT "footer_company_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_company_links_links_order_idx" ON "footer_company_links_links" USING btree ("_order");
  CREATE INDEX "footer_company_links_links_parent_id_idx" ON "footer_company_links_links" USING btree ("_parent_id");`)
}