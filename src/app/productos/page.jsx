import Link from 'next/link'

import { Suspense } from 'react'
import { Plus } from 'lucide-react'
import { redirect } from 'next/navigation'

import Modal from '@/components/Modal'
import ProductosLista from '@/components/Productos/Lista'
import ProductoInsertar from '@/components/Producto/Insertar'



async function PaginaInicio({ searchParams }) {

  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 2000))

  let { query, sort, page, per_page } = await searchParams

  // controlamos valores undefined
  query ??= ''
  sort ??= 'createdAt desc'
  page ??= 1
  per_page ??= 5

  // controlamos valor 0 o negativos en page
  if (Number(page) < 1) redirect('/productos?' + new URLSearchParams({ query, sort, page: 1}))

  return (
    <div className='container mx-auto px-4 pt-20 flex flex-col gap-4'>
      <div className='flex justify-between'>
        <Link href='/productos' className='text-4xl text-blue-400 font-bold '>PRODUCTOS </Link>

        <Modal
          icono={<Plus />}
          className={'place-self-end size-10 p-2 rounded-full border border-green-500 text-green-700 bg-green-200 hover:bg-green-500 hover:text-white hover:cursor-pointer'}>
          <ProductoInsertar />
        </Modal>
      </div>


      <Suspense fallback={
        <div className="text-2xl text-blue-200 font-bold animate-pulse">
          Obteniendo productos ...
        </div>
      }>
        <ProductosLista query={query} sort={sort} page={page} per_page={per_page} />
      </Suspense>

    </div>
  )
}

export default PaginaInicio