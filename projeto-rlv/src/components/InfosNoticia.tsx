import Noticia from '@/data/model/Noticia';
import { formatarData, formatarEditoriais, obterUrlImagem } from './CardNoticia';

interface NoticiaProps {
    noticia: Noticia;
}

export default function InfosNoticia(props: NoticiaProps) {
    const noticia = props.noticia;
    const urlImagem = obterUrlImagem(noticia.imagens);
    const editoriaisFormatados = formatarEditoriais(noticia.editorias);
    const dataFormatada = formatarData(noticia.data_publicacao);

    return (
        <div className="flex flex-col items-center justify-start rounded-2xl border border-[#744c2448] p-6 bg-[#9e613078] w-full max-w-screen-md">
            <img src={urlImagem} alt="Imagem da Noticia" loading="eager" className="rounded-xl w-full object-cover mb-6" style={{ maxHeight: '50vh' }} />
            <div className="w-full">
                <div className="text-4xl font-black mb-4">{noticia.titulo}</div>
                <div className="text-md text-justify mb-4">{noticia.introducao}</div>
                <div className="flex items-center justify-between text-sm">
                    <div>{editoriaisFormatados} - {dataFormatada}</div>
                    <button className="py-2 px-6 bg-[#8a5c36] text-white rounded-lg shadow-md hover:bg-[#6b533c] focus:outline-none focus:ring-2" onClick={() => window.open(noticia.link, '_blank')}>
                        Ver mais
                    </button>
                </div>
            </div>
        </div>
    );
}
