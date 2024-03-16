import useNoticias from '@/data/hooks/useNoticias'
import Noticias from '@/components/Noticias'
import ListaDeNoticias from '@/components/ListaNoticias'

export default function PaginaStarWars() {
    const { processando, noticias, voltar, selecionarNoticia } = useNoticias()

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
            {processando ? (
                <div>Processando...</div>
            ) : noticias.length > 0 ? (
                <ListaDeNoticias noticias={noticias} noticiaSelecionada={selecionarNoticia} />
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}
