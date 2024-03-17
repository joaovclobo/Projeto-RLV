export default function Aviso (textoAviso: any) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            gap-10
            font-medium
            text-[#8a5c36] text-[35px]
            h-screen 
        `}>
            {textoAviso.children}
        </div>
    )
}