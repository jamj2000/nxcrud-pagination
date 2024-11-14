import Filtrar from '@/components/Filtrar';
import Producto from '@/components/Producto';
import { obtenerProductos } from '@/lib/data'
import Form from 'next/form';


async function Productos({ query, sort, page }) {

    const { productos, totalPages } = await obtenerProductos(query, sort, page)


    return (
        <div className='flex flex-col mb-10'>
            <Form action="" className='flex flex-col gap-4'>
                <Filtrar totalPages={totalPages} query={query} sort={sort} page={page} />
            </Form>

            {productos.map(producto => <Producto key={producto.id} producto={producto} />)}
        </div>


    )
}

export default Productos


