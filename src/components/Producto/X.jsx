import { Pencil, Trash } from 'lucide-react';
import Modal from '@/components/Modal';

import ProductoVer from '@/components/Producto/Ver';
import ProductoModificar from '@/components/Producto/Modificar';
import ProductoEliminar from '@/components/Producto/Eliminar';

function Producto({ producto }) {
    return (
        <div key={producto.id} className='py-1 md:px-4 xl:px-8 odd:bg-slate-100 even:bg-slate-200 flex items-center justify-between'>

            <Modal
                texto={producto.nombre}
                className={'text-slate-700 hover:font-bold hover:cursor-pointer'}>
                <ProductoVer producto={producto} />
            </Modal>

            <div className='flex gap-1'>
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

    );
}

export default Producto;