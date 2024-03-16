import Noticia from '@/data/model/Noticia'
import Image from 'next/image'

interface NoticiaProps {
    noticia: Noticia
    selecionar: (noticia: any) => void
}

// export default function NoticiaCorpo (props: NoticiaProps) {
//     const noticia = props.noticia

//     const inicioUrlImagem = 'https://agenciadenoticias.ibge.gov.br/'
//     const imagemObjeto = JSON.parse(noticia.imagens);
//     const urlImagem = inicioUrlImagem + imagemObjeto.image_intro;

//     return (
//         <div className= {`
//             w-full h-300
//             flex flex-col rounded-2xl
//             border border-zinc-700
//             p-4
//         `}>
//             <img src={urlImagem} alt="Imagem da Noticia" loading='eager' className="rounded-md"/>
//             <div className='border flex flex-col gap-5 justify-end items-center h-full'>
//                 <div className='border text-3xl text-left'>
//                     <button>
//                         {noticia.titulo}
//                     </button>
//                 </div>
//                 <div className='border'>
//                     {noticia.data_publicacao}
//                     {noticia.editorias}
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function NoticiaCorpo (props: NoticiaProps) {
    const noticia = props.noticia

    const inicioUrlImagem = 'https://agenciadenoticias.ibge.gov.br/'
    const imagemObjeto = JSON.parse(noticia.imagens);
    const urlImagem = inicioUrlImagem + imagemObjeto.image_intro;

    return (
        <div
            className={`
                flex flex-col rounded-md
                border border-zinc-900
                p-2
            `}
        >
            <img src={urlImagem} alt="Imagem da Noticia" loading='eager' className="rounded-md"/>
            <div className="flex flex-col p-3 gap-10 ">
                <div className="flex justify-between items-center">
                    <button className="text-2xl text-left font-black">
                        {noticia.titulo}
                    </button>
                </div>
                <div className='border text-left gap-2 w-full'> {noticia.data_publicacao} {noticia.editorias}</div>
            </div>
        </div>
    )
}
