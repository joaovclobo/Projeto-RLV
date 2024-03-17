import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface MenuFiltroNoticiasProps {
    defineFiltros: (filtros: any) => void
}

export default function MenuFiltroNoticias(props: MenuFiltroNoticiasProps) {
    const { register, handleSubmit, setValue } = useForm();

    const [selectedField, setSelectedField] = useState('');

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedField(event.target.value);
        setValue('dataMinima', '');
        setValue('dataMaxima', '');
        setValue('palavraChave', '');
        setValue('tipo', '');
    }

    function handleFiltroNoticias(filtros: any) {
        props.defineFiltros(filtros);
    }

    return (
        <div className="flex flex-col items-center justify-start rounded-2xl border border-[#744c2448] p-6 gap-5 bg-[#8a5c36] h-3/5 w-4/5">
            <div className="text-5xl text-[#efcead] font-bold">Busca de notícias</div>
            <form onSubmit={handleSubmit(handleFiltroNoticias)} className="flex flex-wrap justify-center gap-6 w-full mt-6">
                <select
                    className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                    onChange={handleSelectChange}
                >
                    <option value="">Escolha o campo de busca</option>
                    <option value="dataMinima">Data mínima de publicação</option>
                    <option value="dataMaxima">Data máxima de publicação</option>
                    <option value="palavraChave">Palavra chave</option>
                    <option value="tipo">Tipo de conteúdo</option>
                </select>
                {selectedField === 'dataMinima' && (
                    <InputMask
                        mask="99/99/9999"
                        className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                        placeholder="Data mínima de publicação"
                        {...register('dataMinima')}
                    />
                )}
                {selectedField === 'dataMaxima' && (
                    <InputMask
                        mask="99/99/9999"
                        className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                        placeholder="Data máxima de publicação"
                        {...register('dataMaxima')}
                    />
                )}
                {selectedField === 'palavraChave' && (
                    <input
                        className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                        placeholder="Palavra chave"
                        {...register('palavraChave')}
                    />
                )}
                {selectedField === 'tipo' && (
                    <select
                        className="w-full md:w-auto text-[#6b533c] text-center rounded py-2 px-4"
                        {...register('tipo')}
                    >
                        <option value="Notícias">Notícias</option>
                        <option value="Releases">Releases</option>
                    </select>
                )}
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
