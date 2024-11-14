import { Pencil, Trash } from "lucide-react";
import Image from "next/image";

import Modal from "@/components/Modal";
import ProductoModificar from "@/components/Producto/Modificar";
import ProductoEliminar from "@/components/Producto/Eliminar";

function ProductoVer({ producto }) {
    return (
        <section className="flex flex-col">
            <h1 className='text-2xl text-blue-500 text-center'>
                Producto {producto.id}
            </h1>
            <div className="flex flex-col gap-6 items-center bg-blue-100 rounded-xl p-4">

                <div className="flex gap-2 self-end">
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

                <p className="text-6xl place-self-center">{producto.nombre}</p>
                <p className="text-2xl place-self-center text-slate-400">{producto.descripcion}</p>

                <Image src={producto.imagen || '/images/no-image.png'} alt="" width={400} height={400} className='w-[400px] h-[300px] object-cover' />

                <p className="text-7xl place-self-center text-blue-400 *:font-bold">{producto.precio} €</p>
            </div>
        </section>
    );
}

export default ProductoVer;