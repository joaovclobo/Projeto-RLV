import useNoticias from '@/data/hooks/useNoticias'
import Menu from '@/components/layout/Menu'
import ListaDeNoticias from '@/components/ListaNoticias'

export default function PaginaInicial() {

    return (
        <div className='flex flex-col bg-[#e4d0bd] gap-8'>
            <Menu/>
            <div>
                Hello Wold
            </div>
        </div>
    )
}
