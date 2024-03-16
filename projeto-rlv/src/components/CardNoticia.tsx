import Noticia from '@/data/model/Noticia'
import { parse, format } from 'date-fns';

interface NoticiaProps {
    noticia: Noticia
    selecionar: (noticia: any) => void
}

export function formatarData(dataPublicacao: string): string {
    const data = parse(dataPublicacao, 'dd/MM/yyyy HH:mm:ss', new Date());
    return format(data, 'dd/MM/yyyy');
}

export function formatarEditoriais(editorias: string): string {
    const editoriais = editorias.split(";");
    return editoriais.map(valor => valor.toUpperCase()).join(", ");
}

export function obterUrlImagem(imagens: string): string {
    const inicioUrlImagem = 'https://agenciadenoticias.ibge.gov.br/';
    const imagemObjeto = JSON.parse(imagens);
    return inicioUrlImagem + imagemObjeto.image_intro;
}

export default function CardNoticia (props: NoticiaProps) {
    const noticia = props.noticia
    const urlImagem = obterUrlImagem(noticia.imagens);
    const editoriaisFormatados = formatarEditoriais(noticia.editorias);
    const dataFormatada = formatarData(noticia.data_publicacao);

    return (
        <div
            className={`
                flex flex-col rounded-2xl
                border border-[#744c2448]
                p-3
                bg-[#9e613078]
            `}
        >
            <button onClick={() => props.selecionar(noticia)}> <img src={urlImagem} alt="Imagem da Noticia" loading='eager' className="rounded-xl"/></button>
            <div className="flex flex-col p-3 gap-4 ">
                <div className="flex justify-between items-center">
                    <button className="text-2xl text-left font-black hover:text-[#8a5c36]" onClick={() => props.selecionar(noticia)}>
                        {noticia.titulo}
                    </button>
                </div>
                <div className='text-sm text-left gap-2 w-full'> {editoriaisFormatados} - {dataFormatada} </div>
            </div>
        </div>
    )
}
