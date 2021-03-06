const pg = require('pg');

const pool = new pg.Pool();

async function getConstant(id){
    const { rows } = await pool.query('select * from constants where id = $1',[id]);
    return rows[0];
}
async function topConstants() {
    const { rows } = await pool.query('select * from constants order by popularity desc limit 5');
    return rows;
}
module.exports = { getConstant, topConstants }
