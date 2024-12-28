import Link from "next/link"
import Image from "next/image"

function NotFound() {
    return (
        <section className="min-h-screen max-w-[1024px] mx-auto flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl text-blue-200 font-bold">
                Página no encontrada
            </h1>
            <Link href="/">
                <Image
                    src="/not-found.webp"
                    alt=""
                    width={400}
                    height={400}
                />
            </Link>

        </section>
    )
}

export default NotFound