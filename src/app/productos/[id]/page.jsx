import ProductoVer from "@/components/Producto/Ver";
import { Suspense } from "react";

import Modal from "@/components/Modal";
import ProductoModificar from "@/components/Producto/Modificar";
import ProductoEliminar from "@/components/Producto/Eliminar";
import { Pencil, Trash } from "lucide-react";


async function page({ params }) {
    const { id } = await params

    return <Suspense fallback={
        <div className="text-2xl text-blue-200 font-bold animate-pulse">
            Obteniendo datos ...
        </div>
    }>
        <h1 className="text-2xl text-blue-500">Producto #{id}</h1>

        <ProductoVer id={+id} />
    </Suspense>
}


export default page;