import Form from 'next/form';
import ProductosFiltrar from '@/components/Productos/Filtrar';
import ProductoX from '@/components/Producto/X';
import { obtenerProductos } from '@/lib/data'


async function Productos({ query, sort, page }) {

    const { productos, totalPages } = await obtenerProductos(query, sort, page)


    return (
        <div className='flex flex-col mb-10'>
            <Form action="" className='flex flex-col gap-4'>
                <ProductosFiltrar totalPages={totalPages} query={query} sort={sort} page={page} />
            </Form>

            {productos.map(producto => <ProductoX key={producto.id} producto={producto} />)}
        </div>


    )
}

export default Productos


