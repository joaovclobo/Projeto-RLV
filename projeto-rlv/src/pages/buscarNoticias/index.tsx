import useNoticiasFiltradas from '@/data/hooks/useNoticiasFiltradas'
import Menu from '@/components/layout/Menu'
import ListaDeNoticias from '@/components/ListaNoticias'
import InfosNoticia from '@/components/InfosNoticia'
import MenuFiltroNoticias from '@/components/MenuFiltroNoticias'

export default function PaginaBuscarNoticias() {
    const { processando, noticias, noticiaSelecionada, selecionarNoticia, defineFiltros } = useNoticiasFiltradas()

    return (
        <div className='flex flex-col bg-[#fcebdc]'>
            <Menu/>
            <div className="flex flex-col py-8 justify-center items-center relative">
                <MenuFiltroNoticias defineFiltros={defineFiltros}/>
            </div>
            <div className="flex flex-col gap-5 p-5 justify-center items-center relative">
                {processando ? (
                    <div>Processando...</div>
                ) : noticiaSelecionada != null ?(
                    <InfosNoticia noticia={noticiaSelecionada} />
                ) : noticias.length > 0 ? (
                    <ListaDeNoticias noticias={noticias} selecionarNoticia={selecionarNoticia} />
                ) : (
                    <div>Dados não encontrados</div>
                )}
            </div>
        </div>
    )
}
