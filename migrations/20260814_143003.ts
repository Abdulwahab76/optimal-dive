import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_form" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_form" boolean DEFAULT true,
  	"heading" varchar DEFAULT 'Get Your Free Consultation' NOT NULL,
  	"submit_button_label" varchar DEFAULT 'Book A Time' NOT NULL,
  	"success_message" varchar DEFAULT 'Thank you! We will contact you soon.',
  	"first_name_placeholder" varchar DEFAULT 'First Name',
  	"first_name_required_message" varchar DEFAULT 'First Name is required',
  	"last_name_placeholder" varchar DEFAULT 'Last Name',
  	"last_name_required_message" varchar DEFAULT 'Last Name is required',
  	"email_placeholder" varchar DEFAULT 'Email',
  	"email_required_message" varchar DEFAULT 'Email is required',
  	"email_invalid_message" varchar DEFAULT 'Enter a valid email',
  	"phone_placeholder" varchar DEFAULT 'Phone',
  	"phone_required_message" varchar DEFAULT 'Phone is required',
  	"phone_invalid_message" varchar DEFAULT 'Enter a valid phone number',
  	"message_placeholder" varchar DEFAULT 'How can we help?',
  	"message_required_message" varchar DEFAULT 'Message is required',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_form" CASCADE;`)
}
