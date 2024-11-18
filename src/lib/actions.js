'use server'
import fs from 'node:fs'
import mysql, {pool} from '@/lib/mysql'
import { revalidatePath } from 'next/cache';


export async function nuevoProducto(prevState, formData) {
    // const { nombre, descripcion, precio, file } = Object.fromEntries(formData.entries())
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = +formData.get('precio')
    const file = formData.get('file')
    let imagen

    // Introducimos retardo artificial
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
        if (file.size > 0) {
            imagen = '/images/' + file.name
            const buffer = await file.arrayBuffer()
            const bytes = new Uint8Array(buffer)
            fs.writeFileSync('public' + imagen, bytes, 'binary')
        } else {
            imagen = '/images/no-image.png'
        }

        const sql = 'insert into productos (nombre, descripcion, precio, imagen) values (?, ?, ?, ?);'
        const values = [nombre, descripcion, precio, imagen];

        // const [result, fields] = await mysql.query(sql, values)
        const connection = await pool.getConnection();
        const [result, fields] = await pool.execute(sql, values)
        connection.release();

        revalidatePath('/productos')
        return { success: 'Creación exitosa' }
    } catch (error) {
        return { error: error.message }
    }
}

export async function modificarProducto(prevState, formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = +formData.get('precio')
    const file = formData.get('file')
    let imagen = formData.get('imagen')

    // Introducimos retardo artificial
    // await new Promise((resolve) => setTimeout(resolve, 1000))


    try {
        if (file.size > 0) {
            imagen = '/images/' + file.name
            const buffer = await file.arrayBuffer()
            const bytes = new Uint8Array(buffer)
            fs.writeFileSync('public' + imagen, bytes, 'binary')
        } else if (!imagen) {
            imagen = '/images/no-image.png'
        }

        const sql = 'update productos set nombre = ?, descripcion = ?, precio = ?, imagen = ? where id = ?'
        const values = [nombre, descripcion, precio, imagen, id];

        // const [result, fields] = await mysql.query(sql, values)
        const connection = await pool.getConnection();
        const [result, fields] = await pool.execute(sql, values)
        connection.release();

        revalidatePath('/productos')
        return { success: 'Actualización exitosa' }
    } catch (error) {
        return { error: error.message }
    }
}


export async function eliminarProducto(prevState, formData) {
    const id = formData.get('id')

    // Introducimos retardo artificial
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
        const sql = 'delete from productos where id = ?;'
        const values = [id]

        // const [result, fields] = await mysql.query(sql, values);
        const connection = await pool.getConnection();
        const [result, fields] = await pool.execute(sql, values)
        connection.release();

        revalidatePath('/productos')
        return { success: 'Eliminación exitosa' }
    } catch (error) {
        return { error: error.message }
    }
}


