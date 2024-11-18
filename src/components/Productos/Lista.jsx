import Form from 'next/form';
import ProductosFiltrar from '@/components/Productos/FiltrarCliente';
import ProductoX from '@/components/Producto/X';
import { obtenerProductos } from '@/lib/data'



async function Productos({ query, sort, page, per_page }) {

    const { productos, totalPages } = await obtenerProductos({query, sort, page, per_page})


    return (
        <div className={`flex flex-col mb-10`}>
            <Form action="" className='flex flex-col gap-4'>
                <ProductosFiltrar totalPages={totalPages} query={query} sort={sort} page={page} per_page={per_page} />
            </Form>

            {productos.map(producto => <ProductoX key={producto.id} producto={producto} />)}
        </div>
    )
}

export default Productos


