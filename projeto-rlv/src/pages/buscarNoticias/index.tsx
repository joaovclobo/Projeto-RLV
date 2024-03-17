import useNoticiasFiltradas from '@/data/hooks/useNoticiasFiltradas'
import Menu from '@/components/layout/Menu'
import ListaDeNoticias from '@/components/ListaNoticias'
import InfosNoticia from '@/components/InfosNoticia'
import MenuFiltroNoticias from '@/components/MenuFiltroNoticias'
import Aviso from '@/components/layout/Aviso'

export default function PaginaBuscarNoticias() {
    const { processando, noticias, noticiaSelecionada, selecionarNoticia, defineFiltros } = useNoticiasFiltradas()

    return (
        <div className='flex flex-col bg-[#fcebdc]'>
            <Menu/>
            <div className="flex flex-col gap-5 p-5 justify-center items-center relative">
                {processando ? (
                    <Aviso>Buscando notícias...</Aviso>
                ) : noticiaSelecionada != null ?(
                    <div className='flex flex-col gap-5 p-5 justify-center items-center relative"'>
                        <InfosNoticia noticia={noticiaSelecionada} />
                    </div>
                ) : noticias.length > 0 ? (
                    <div className='flex flex-col gap-5 p-5 justify-center items-center relative"'>
                        <MenuFiltroNoticias defineFiltros={defineFiltros}/>
                        <ListaDeNoticias noticias={noticias} selecionarNoticia={selecionarNoticia} />
                    </div>
                ) : (
                    <Aviso><div>Notícias não encontradas...</div> <div>Tente novamente!</div></Aviso>
                )}
            </div>
        </div>
    )
}
