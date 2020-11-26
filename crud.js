const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.DABABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_URL,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

async function getConstant(id){
    const { rows } = await pool.query('select * from constants where id = $1',[id]);
    return rows;
}
async function topConstant(){
    const { rows } = await pool.query('select * from constants order by popularity desc limit 5');
    return rows;
}
module.exports = { getUnit };
