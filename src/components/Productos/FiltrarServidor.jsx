import Link from "next/link";
import {
    ArrowDownAZ,
    ArrowDownZA,
    ArrowRight,
    CircleChevronLeft,
    CircleChevronRight,
    ClockArrowDown,
    ClockArrowUp,
    Search
} from "lucide-react";
import SubmitButton from "@/components/SubmitButton";


export default function FiltrarServidor({ totalPages, query, sort, page, per_page }) {

    return (
        <>
            <input type="hidden" name="sort" value={sort} />
            <input type="hidden" name="page" value={page} />

            <div className="flex justify-end items-center gap-1 mb-10">

                {/* ---------- Ordenar ---------- */}
                {sort != 'nombre asc'
                    ? <Link href={`/productos?query=${query}&sort=${'nombre+asc'}&page=${page}&per_page=${per_page}`} >
                        <ArrowDownAZ className="size-10 p-2 rounded-full text-white bg-blue-300 hover:bg-blue-500" />
                    </Link>
                    : <ArrowDownAZ className="size-10 p-2 rounded-full text-white bg-blue-500" />
                }

                {sort != 'nombre desc'
                    ? <Link href={`/productos?query=${query}&sort=${'nombre+desc'}&page=${page}&per_page=${per_page}`}>
                        <ArrowDownZA className="size-10 p-2 rounded-full text-white bg-blue-300 hover:bg-blue-500" />
                    </Link>
                    : <ArrowDownZA className="size-10 p-2 rounded-full text-white bg-blue-500" />
                }

                {sort != 'createdAt asc'
                    ? <Link href={`/productos?query=${query}&sort=${'createdAt+asc'}&page=${page}&per_page=${per_page}`}>
                        <ClockArrowDown className="size-10 p-2 rounded-full text-white bg-blue-300 hover:bg-blue-500" />
                    </Link>
                    : <ClockArrowDown className="size-10 p-2 rounded-full text-white bg-blue-500" />
                }

                {sort != 'createdAt desc'
                    ?

                    <Link href={`/productos?query=${query}&sort=${'createdAt+desc'}&page=${page}&per_page=${per_page}`}>
                        <ClockArrowUp className="size-10 p-2 rounded-full text-white bg-blue-300 hover:bg-blue-500" />
                    </Link>

                    : <ClockArrowUp className="size-10 p-2 rounded-full text-white bg-blue-500" />
                }

                {/* ---------- Buscar ---------- */}

                <label title="BUSCAR..." className='relative flex items-center'>
                    <input
                        type='search' name="query"
                        placeholder="Buscar ..."
                        defaultValue={query}
                        className='peer text-black p-2 pl-10 rounded-full  border-2 border-blue-400 focus:outline-blue-500'
                    />
                    <Search className="absolute left-3 text-blue-700 size-4" />
                </label>

            </div >


            {/* ---------- Paginar ---------- */}

            <div className="flex gap-4 justify-end items-center">
                <select name="per_page" defaultValue={5}
                    className="py-2 px-4 bg-blue-100 w-fit text-right rounded-md focus:outline-none">
                    <option value={5}> 5 items por página </option>
                    <option value={10}> 10 items por página </option>
                    <option value={15}> 15 items por página </option>
                </select>

                <button>
                    <ArrowRight className={`size-10 p-2 rounded-full text-white bg-blue-500 hover:bg-blue-700`} />
                </button>
            </div>

            < div >
                <div className="flex justify-between items-center rounded-full border border-slate-200 bg-blue-400">
                    {page > 1
                        ? <Link href={`/productos?query=${query}&sort=${sort}&page=${+page - 1}&per_page=${per_page}`}  >
                            <CircleChevronLeft className="size-10 rounded-full text-white bg-blue-500 hover:bg-blue-700" />
                        </Link>
                        : <CircleChevronLeft className="size-10 rounded-full text-white bg-slate-300" />
                    }

                    {/* <SubmitButton animate='animate-ping'> */}
                        <div className='w-14 font-bold text-center text-white rounded-md bg-inherit disabled:bg-slate-300 focus:outline-none'>
                            {page}
                        </div>
                    {/* </SubmitButton> */}

                    {page < totalPages
                        ? <Link href={`/productos?query=${query}&sort=${sort}&page=${+page + 1}&per_page=${per_page}`}  >
                            <CircleChevronRight className="size-10 rounded-full text-white bg-blue-500 hover:bg-blue-700" />
                        </Link>
                        : <CircleChevronRight className="size-10 rounded-full text-white bg-slate-300" />
                    }
                </div>

                {/* ---------- Lista de páginas ---------- */}

                <div className="flex flex-nowrap mb-1 overflow-x-auto mx-10">
                    {
                        [...Array(totalPages).keys()].map(i =>
                            <Link href={`/productos?query=${query}&sort=${sort.replace(' ', '+')}&page=${i + 1}&per_page=${per_page}`}
                                key={i}
                                className={`${page == i + 1 && 'bg-blue-400 font-bold text-white'} shrink-0 w-16 h-8 text-center border bg-blue-100 border-slate-100 hover:bg-blue-300`}
                            >
                                {i + 1}
                            </Link>
                        )
                    }

                </div>
            </div >
        </>
    );
}

