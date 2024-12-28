import Form from 'next/form'
import ProductosFiltrar from '@/components/Productos/FiltrarCliente'
import Modal from '@/components/Modal'
import ProductoVer from '@/components/Producto/Ver'
import ProductoModificar from '@/components/Producto/Modificar'
import ProductoEliminar from '@/components/Producto/Eliminar'
import { obtenerProductos } from '@/lib/data'
import { Eye, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'




async function Productos({ query, sort, page, per_page }) {

    const { productos, totalPages } = await obtenerProductos({ query, sort, page, per_page })


    return (
        <div className={`flex flex-col mb-10`}>
            <Form action="" className='flex flex-col gap-4'>
                <ProductosFiltrar totalPages={totalPages} query={query} sort={sort} page={page} per_page={per_page} />
            </Form>

            {productos.map(producto => (
                <div key={producto.id} className='py-1 md:px-4 xl:px-8 odd:bg-slate-100 even:bg-slate-200 flex items-center justify-between'>

                    <Link href={`/productos/${producto.id}`} className={'text-slate-700 hover:font-bold hover:cursor-pointer'}>
                        {producto.nombre}
                    </Link>

                    <div className='flex gap-1'>
                        <Modal
                            icono={<Eye />}
                            className={'place-self-end size-10 p-2 rounded-full border border-blue-500 text-blue-700 bg-blue-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer'}>
                            <ProductoVer producto={producto} />
                        </Modal>

                        <Modal
                            icono={<Pencil />}
                            className={'place-self-end size-10 p-2 rounded-full border border-orange-500 text-orange-700 bg-orange-200 hover:bg-orange-500 hover:text-white hover:cursor-pointer'}>
                            <ProductoModificar producto={producto} />
                        </Modal>

                        <Modal
                            icono={<Trash />}
                            className={'place-self-end size-10 p-2 rounded-full border border-red-500 text-red-700 bg-red-200 hover:bg-red-500 hover:text-white hover:cursor-pointer'}>
                            <ProductoEliminar producto={producto} />
                        </Modal>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Productos


