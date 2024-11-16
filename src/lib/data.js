'use server'
import { pool } from '@/lib/mysql'

const PER_PAGE = 5



export async function obtenerProductos(query, sort, page) {
    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    const like = '%' + query + '%'
    const limit = PER_PAGE
    const offset = (page - 1) * PER_PAGE

    const sqlTotal = 'select count(*) as total from productos where nombre like ?';
    const sql = 'select * from productos where nombre like ? order by ' + sort + ' limit ? offset ?'
    const values = [like, limit, offset]


    const connection = await pool.getConnection();
    const [[{ total }]] = await pool.execute(sqlTotal, [like])
    const [productos] = await pool.execute(sql, values);
    connection.release();

    const totalPages = Math.ceil(total / PER_PAGE)


    return { productos, totalPages }
}
