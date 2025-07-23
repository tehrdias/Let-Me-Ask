import 'dotenv/config';
import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";
import { count } from 'console';
import { desc } from 'drizzle-orm';

async function main() {
  await reset(db,  schema );
  await seed(db, schema).refine( f => {
    return {
     rooms: {
        count: 20,
        columns: {
           name: f.companyName(),
           description: f.loremIpsum(),
        }
     }
        
    }}
  );
  await sql.end();
}
console.log('Seeding database...');
main().catch(console.error);