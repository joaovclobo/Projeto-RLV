import Link from "next/link";

export default function Menu () {
    return (
        <div className={`
            flex flex-row justify-center
            text-2xl text-[#efcead] font-bold
            p-8 gap-20 bg-[#8a5c36]`}>
                    <Link href="/">Home</Link> 
                    <Link href="buscarNoticias">Buscar noticias</Link>
        </div>
    )
}