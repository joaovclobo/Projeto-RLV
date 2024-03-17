import useNoticias from '@/data/hooks/useNoticias'
import Menu from '@/components/layout/Menu'
import ListaDeNoticias from '@/components/ListaNoticias'
import InfosNoticia from '@/components/InfosNoticia'
import Aviso from '@/components/layout/Aviso'

export default function PaginaInicial() {
    const { processando, noticias, noticiaSelecionada, selecionarNoticia } = useNoticias()

    return (
        <div className='flex flex-col bg-[#fcebdc]'>
            <Menu/>
            <div className="flex flex-col gap-5 p-8 justify-center items-center relative">
                {processando ? (
                    <Aviso>Buscando notícias...</Aviso>
                    ) : noticiaSelecionada != null ?(
                    <InfosNoticia noticia={noticiaSelecionada} />
                ) : noticias.length > 0 ? (
                    <ListaDeNoticias noticias={noticias} selecionarNoticia={selecionarNoticia} />
                ) : (
                    <Aviso><div>Notícias não encontradas...</div> <div>Tente novamente!</div></Aviso>
                )}
            </div>
        </div>
    )
}
