'use server'
import { pool } from '@/lib/mysql'


export async function obtenerProductos({query, sort, page, per_page=5}) {
    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 1000))

    const like = '%' + query + '%'
    // const limit = PER_PAGE
    const limit = per_page
    const offset = (page - 1) * per_page

    const sqlTotal = 'select count(*) as total from productos where nombre like ?';
    const sql = 'select * from productos where nombre like ? order by ' + sort + ' limit ? offset ?'
    const values = [like, limit, offset]


    const connection = await pool.getConnection();
    const [[{ total }]] = await pool.execute(sqlTotal, [like])
    const [productos] = await pool.execute(sql, values);
    connection.release();

    const totalPages = Math.ceil(total / per_page)


    return { productos, totalPages }
}
