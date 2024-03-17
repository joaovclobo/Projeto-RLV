import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';

const esquemaFiltroNoticias = z.object({
    tipo: z.string(),
    dataMinima: z.string(),
    dataMaxima: z.string(),
    palavraChave: z.string(),
});

type EsquemaFiltroNoticias = z.infer<typeof esquemaFiltroNoticias>;

export default function MenuFiltroNoticias() {
    const { register, handleSubmit } = useForm<EsquemaFiltroNoticias>({
        resolver: zodResolver(esquemaFiltroNoticias),
    });

    function handleFiltroNoticias(data: EsquemaFiltroNoticias) {
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center justify-start rounded-2xl border border-[#744c2448] p-6 gap-5 bg-[#8a5c36] h-3/5 w-4/5">
            <div className="text-5xl text-[#efcead] font-bold">Busca de notícias</div>
            <form onSubmit={handleSubmit(handleFiltroNoticias)} className="flex flex-wrap justify-center gap-6 w-full mt-6">
                <input
                    className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                    placeholder="Palavra chave"
                    {...register('palavraChave')}
                />
                <InputMask
                    mask="99/99/9999"
                    className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                    placeholder="Data mínima de publicação"
                    {...register('dataMinima')}
                />
                <InputMask
                    mask="99/99/9999"
                    className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                    placeholder="Data máxima de publicação"
                    {...register('dataMaxima')}
                />
                <select
                    className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                    {...register('tipo')}
                >
                    <option value="Notícias">Notícias</option>
                    <option value="Releases">Releases</option>
                </select>
                <button
                    className="py-2 px-10 bg-[#fcebdc] text-[#6b533c] rounded-lg shadow-md hover:bg-[#efcead] focus:outline-none focus:ring-2"
                    type='submit'
                >
                    Filtrar
                </button>
            </form>
        </div>
    );
}
