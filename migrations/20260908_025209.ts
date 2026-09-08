import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page_services_service_items" ALTER COLUMN "service_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter service description..."}]}]}}'::jsonb;
  ALTER TABLE "home_page_services_service_items" ALTER COLUMN "service_description" SET NOT NULL;
  ALTER TABLE "home_page_testimonials_testimonial_items" ALTER COLUMN "testimonial_review" SET DATA TYPE jsonb;
  ALTER TABLE "home_page_testimonials_testimonial_items" ALTER COLUMN "testimonial_review" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter testimonial review..."}]}]}}'::jsonb;
  ALTER TABLE "home_page_industries_industry_items" ALTER COLUMN "industry_description" SET DATA TYPE jsonb;
  ALTER TABLE "home_page_industries_industry_items" ALTER COLUMN "industry_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Enter industry description..."}]}]}}'::jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "about_about_body_text" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact."}]}]}}'::jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "technologies_tech_description" SET DATA TYPE jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "technologies_tech_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"Hire from our pool of 350+ specialized experts in web, mobile and software engineering, specializing in the latest technologies and frameworks ready to scale your development team effortlessly."}]}]}}'::jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "industries_industries_description" SET DATA TYPE jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "industries_industries_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"We provide tailored solutions that address the unique demands across various industries, delivering transformative experiences to drive significant impact."}]}]}}'::jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page_services_service_items" ALTER COLUMN "service_description" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"..."}]}]}}'::jsonb;
  ALTER TABLE "home_page_services_service_items" ALTER COLUMN "service_description" DROP NOT NULL;
  ALTER TABLE "home_page_testimonials_testimonial_items" ALTER COLUMN "testimonial_review" SET DATA TYPE varchar;
  ALTER TABLE "home_page_testimonials_testimonial_items" ALTER COLUMN "testimonial_review" DROP DEFAULT;
  ALTER TABLE "home_page_industries_industry_items" ALTER COLUMN "industry_description" SET DATA TYPE varchar;
  ALTER TABLE "home_page_industries_industry_items" ALTER COLUMN "industry_description" DROP DEFAULT;
  ALTER TABLE "home_page" ALTER COLUMN "about_about_body_text" SET DEFAULT '{"root":{"type":"root","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"paragraph","direction":"ltr","format":"","indent":0,"version":1,"children":[{"type":"text","version":1,"text":"built on one simple belief: great software should solve real problems and drive lasting business growth..."}]}]}}'::jsonb;
  ALTER TABLE "home_page" ALTER COLUMN "technologies_tech_description" SET DATA TYPE varchar;
  ALTER TABLE "home_page" ALTER COLUMN "technologies_tech_description" SET DEFAULT 'Hire from our pool of 350+ specialized experts in web, mobile and software engineering, specializing in the latest technologies and frameworks ready to scale your development team effortlessly.';
  ALTER TABLE "home_page" ALTER COLUMN "industries_industries_description" SET DATA TYPE varchar;
  ALTER TABLE "home_page" ALTER COLUMN "industries_industries_description" SET DEFAULT 'We provide tailored solutions that address the unique demands across various industries, delivering transformative experiences to drive significant impact.';`)
}
