import { Pool } from 'pg';

const connectionString = 'postgres://yboaiota:Mj8-K-cSrv5sRS5C3UAHEk3ykc8CzRs6@motty.db.elephantsql.com/yboaiota';

const db = new Pool({ connectionString });

export default db;