import { createClient } from '@supabase/supabase-js';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabasePassword = process.env.SUPABASE_PASSWORD || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const myDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    username: "postgres.iiusrsmhivrdravaahxf",
    password: supabasePassword,
    database: "postgres",
    entities: ["./src/entity/customer.entity.ts","./src/entity/restaurant.entity.ts","./src/entity/city.entity.ts","./src/entity/items.entity.ts"],
    logging: true,
    synchronize: true,
})

export { supabase }

// require('dotenv').config()
// import { DataSource } from 'typeorm'
// import { config } from 'dotenv'
// import { createClient } from '@supabase/supabase-js'
// // import { ConnectionOptions } from 'typeorm'
// // import NextAuth from "next-auth";
// // import { TypeORMAdapter } from "@auth/typeorm-adapter";

// config()

// const supabaseUrl = process.env.SUPABASE_URL || ''
// const supabaseKey = process.env.SUPABASE_KEY || ''
// const supabasePassword = process.env.SUPABASE_PASSWORD || ''
// const supabase = createClient(supabaseUrl, supabaseKey)

// export const myDataSource = new DataSource({
//   type: 'postgres',
//   host: 'aws-0-ap-south-1.pooler.supabase.com',
//   port: 5432,
//   username: 'postgres.iiusrsmhivrdravaahxf',
//   password: supabasePassword,
//   database: 'postgres',
//   entities: ['./src/entity/customer.entity.ts'],
//   logging: true,
//   synchronize: true
// })

// export { supabase }

// export default NextAuth({
//   adapter: TypeORMAdapter(myDataSource),
//   ...
// })

// import { DataSource } from 'typeorm'
// import { config } from 'dotenv'
// import { createClient } from '@supabase/supabase-js'

// config()

// const supabaseUrl = process.env.SUPABASE_URL || ''
// // const supabaseUrl = 'https://owkjcgawnhlvenuhzikj.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY || ''
// //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93a2pjZ2F3bmhsdmVudWh6aWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NDE0NjcsImV4cCI6MjAyNDMxNzQ2N30.3fbgjeCXvgNgO9rRNysFY9JM_TOu8nwaGCNPK6lHDOI'
// const supabasePassword = process.env.SUPABASE_PASSWORD
// // 'swaadsaathi';
// const supabase = createClient(supabaseUrl, supabaseKey)

// export const myDataSource = new DataSource({
//   type: 'postgres',
//   host: 'db.ynbzocihmrlgevphtdle.supabase.co',
//   port: 5432,
//   username: 'postgres',
//   password: supabasePassword,
//   database: 'postgres',
//   entities: ['./src/entity/customer.entity.ts'],
//   logging: true,
//   synchronize: true
// })

// export { supabase }
