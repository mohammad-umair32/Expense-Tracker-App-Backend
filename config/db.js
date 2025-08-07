import {neon} from '@neondatabase/serverless'

import "dotenv/config";

//Creates sql connection using our DB URL
export const sql = neon(process.env.DATABASE_URL) 