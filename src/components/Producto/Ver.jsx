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

                <p className="text-6xl place-self-center">{producto.nombre}</p>
                <p className="text-2xl place-self-center text-slate-400">{producto.descripcion}</p>

                <Image src={producto.imagen || '/images/no-image.png'} alt="" width={400} height={400} className='w-[400px] h-[300px] object-cover' />

                <p className="text-7xl place-self-center text-blue-400 *:font-bold">{producto.precio} €</p>
            </div>
        </section>
    );
}

export default ProductoVer;