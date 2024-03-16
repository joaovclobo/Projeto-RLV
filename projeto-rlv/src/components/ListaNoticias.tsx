import Noticia from '@/data/model/Noticia'
import CardNoticia from '@/components/CardNoticia'
import Grid from './layout/Grid'


interface ListaDeNoticiasProps {
    noticias: Noticia[]
    noticiaSelecionada: (noticia: Noticia) => void
}

export default function ListaDeNoticias(props: ListaDeNoticiasProps) {
    return (
        <div className="w-[90%] lg:w-4/5">
            <Grid sm={1} md={2} lg={3}>
                {props.noticias.map((n: Noticia, indice: number) => {
                    return <CardNoticia key={n.id} noticia={n} selecionar={props.noticiaSelecionada} />
                })}
            </Grid>
        </div>
    )
}
