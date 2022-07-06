import { Pool } from 'pg';

const connectionString = 'postgres://XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const db = new Pool({ connectionString });

export default db;