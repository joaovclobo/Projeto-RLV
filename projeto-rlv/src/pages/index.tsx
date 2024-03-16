import useNoticias from '@/data/hooks/useNoticias'
import Menu from '@/components/layout/Menu'
import ListaDeNoticias from '@/components/ListaNoticias'

export default function PaginaInicial() {
    const { processando, noticias, voltar, selecionarNoticia } = useNoticias()

    return (
        <div className='flex flex-col bg-[#e4d0bd] gap-8'>
            <Menu/>
            <div className="flex flex-col gap-5 justify-center items-center relative">
                {processando ? (
                    <div>Processando...</div>
                ) : noticias.length > 0 ? (
                    <ListaDeNoticias noticias={noticias} noticiaSelecionada={selecionarNoticia} />
                ) : (
                    <div>Dados não encontrados</div>
                )}
            </div>
        </div>
    )
}
