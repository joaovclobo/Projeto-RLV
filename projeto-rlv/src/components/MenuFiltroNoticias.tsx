import Noticia from '@/data/model/Noticia'
import { formatarData, formatarEditoriais, obterUrlImagem } from './CardNoticia';
import { useForm } from 'react-hook-form';

interface NoticiaProps {
    // noticia: Noticia
}

export default function MenuFiltroNoticias () {
    const {register, handleSubmit,} = useForm()

    function handleFiltroNoticias(data: any){
        console.log(data)
    }

    return (
        <div
            className={`
                flex flex-col items-center justify-start rounded-2xl 
                border border-[#744c2448]
                p-6 gap-5
                bg-[#8a5c36] 
                h-3/5
                w-4/5
            `}
        >
            <div className='text-4xl text-[#efcead] font-bold'>Busca de notícias</div>
            <div >
                <form onSubmit={handleSubmit(handleFiltroNoticias)} className='flex items-center text-lg gap-10 p-3'>
                    <input className=' text-[#6b533c] text-center rounded' placeholder='Tipo de conteúdo' {...register('tipo')}></input>
                    <input className=' text-[#6b533c] text-center rounded' placeholder='Data mínima de publicação' {...register('dataMinima')}></input>
                    <input className=' text-[#6b533c] text-center rounded' placeholder='Data máxima de publicação' {...register('dataMaxima')}></input>
                    <input className=' text-[#6b533c] text-center rounded' placeholder='Palavra chave' {...register('palavraChave')}></input>
                </form>
            </div>
            <button
                className="py-2 px-10 bg-[#fcebdc] text-[#6b533c] rounded-lg shadow-md hover:bg-[#efcead] focus:outline-none focus:ring-2"
                type='submit'
                >
                Filtrar
            </button>
        </div>
    )
}
