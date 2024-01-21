import { DataSource } from "typeorm"
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabasePassword = process.env.SUPABASE_PASSWORD || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const myDataSource = new DataSource({
    type: "postgres",
    host: "db.ynbzocihmrlgevphtdle.supabase.co",
    port: 5432,
    username: "postgres",
    password: supabasePassword,
    database: "postgres",
    entities: ["./src/entity/customer.entity.ts"],
    logging: true,
    synchronize: true,
})

export { supabase };