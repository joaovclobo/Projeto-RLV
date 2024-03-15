import useNoticias from '@/data/hooks/useNoticias'
import Noticia from '@/components/Noticia'

export default function PaginaStarWars() {
    const { processando, noticias, voltar, selecionarNoticia } = useNoticias()

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
            {processando ? (
                <div>Processando...</div>
            ) : noticias.length > 0 ? (
                <Noticia noticias={noticias} selecionar={selecionarNoticia} />
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}
