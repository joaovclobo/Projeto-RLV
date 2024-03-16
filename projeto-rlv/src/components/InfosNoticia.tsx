import Noticia from '@/data/model/Noticia'
import { parse, format } from 'date-fns';
import { formatarData, formatarEditoriais, obterUrlImagem } from './CardNoticia';

interface NoticiaProps {
    noticia: Noticia
}

export default function InfosNoticia (props: NoticiaProps) {
    const noticia = props.noticia
    const urlImagem = obterUrlImagem(noticia.imagens);
    const editoriaisFormatados = formatarEditoriais(noticia.editorias);
    const dataFormatada = formatarData(noticia.data_publicacao);

    return (
        <div
            className={`
                flex flex-col items-center justify-start rounded-2xl 
                border border-[#744c2448]
                p-6 g-2
                bg-[#9e613078] 
                h-3/5
                w-3/4
            `}
        >
            <img src={urlImagem} alt="Imagem da Noticia" loading='eager' className="rounded-xl h-[50vh] w-auto object-cover mb-6"/>
            <div className=' w-7/12'>
                <div className="flex flex-col gap-7 text-left flex-1 ">
                    <div className="w-full text-4xl font-black">{noticia.titulo}</div>
                    <div className='w-full text-md text-justify'> {noticia.introducao}</div>
                    <div className='flex flex-row items-center'>
                        <div className='text-sm w-full'> {editoriaisFormatados} - {dataFormatada} </div>
                        <div className="flex justify-center w-full">
                            <button 
                                className="py-2 px-10 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                                onClick={() => window.open(noticia.link, '_blank')}
                            >
                                Ver mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
