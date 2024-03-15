import Noticia from "@/data/model/Noticia"

interface NoticiaProps {
    noticias: Noticia[]
    selecionar: (noticia: any) => void
}

// export default function Noticia (props: NoticiaProps) {
//     return (
//         <div className= {`
//             flex flex-col rounded-md
//             border border-zinc-600
//             p-1
//         `}>
//             <div className="flex flex-col p-3 gap-3">
//                 <div className="flex justify-between items-center">
//                     <div className="text-2xl font-black">{noticia.id}</div>
//                     <div className="text-2xl font-black">{noticia.titulo}</div>
//                     <div className="text-2xl font-black">{noticia.introducao}</div>
//                     <div className="text-2xl font-black">{noticia.data_publicacao}</div>
//                     <div className="text-2xl font-black">{noticia.editorias}</div>
//                     <div className="text-2xl font-black">{noticia.link}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Noticia (props: NoticiaProps) {
    return (
        <table className="w-3/5 text-xl opacity-70 rounded-lg overflow-hidden">
        <thead>
            <tr className="bg-zinc-900">
                <th className="p-2 font-black">Nome</th>
                <th className="p-2 font-black">Altura</th>
                <th className="p-2 font-black">Peso</th>
                <th className="p-2 font-black">Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.noticias.map((n: Noticia, indice: number) => (
                <tr
                    key={n.id}
                    className={`
                        text-center
                        ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                    `}
                >
                    <td className="p-2">{n.titulo}</td>
                    <td className="p-2">{n.data_publicacao}</td>
                    <td className="p-2">{n.link}</td>
                    <td className="p-2">
                        <button className="botao" onClick={() => props.selecionar(n)}>
                            Selcionar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}
