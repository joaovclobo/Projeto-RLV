import { useCallback, useEffect, useState } from 'react'
import useProcessando from './useProcessando'

export default function useNoticiasFiltradas() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [noticias, setNoticias] = useState<any[]>([])
    const [noticiaSelecionada, setNoticiaSelecionada] = useState<any>()
    const [filtros, setFiltros] = useState<any>({
        palavraChave: '',
        dataMinima: '',
        dataMaxima: '',
        tipo: ''
    });

    const converterData = (data: string) => {
        const partes = data.split('/');
        return `${partes[1]}-${partes[0]}-${partes[2]}`;
    };

    function converterTipo(tipo: any) {
        return tipo === "Notícias" ? "noticia" : "release";
    }

    const obterNoticias = useCallback(async function (filtros: any) {
        try {
            iniciarProcessamento()

            let url = 'https://servicodados.ibge.gov.br/api/v3/noticias/'

            if (filtros.palavraChave != '') {
                url += `?busca=${filtros.palavraChave}`
            } else if (filtros.dataMinima != '') {
                url += `?de=${converterData(filtros.dataMinima)}`
            } else if (filtros.dataMaxima != '') {
                url += `?ate=${converterData(filtros.dataMaxima)}`
            } else if (filtros.tipo != '') {
                const tipo = converterTipo(filtros.tipo);
                url += `?tipo=${tipo}`
            } else {
                url += `?qtd=9`
            }

            const resp = await fetch(url)
            const dados = await resp.json()
            setNoticias(dados.items)

        } finally {
            finalizarProcessamento()

        }
    }, [iniciarProcessamento, finalizarProcessamento, filtros])

    function selecionarNoticia(noticiaSelecionada: any) {
        setNoticiaSelecionada(noticiaSelecionada)
    }

    function defineFiltros(filtros: any) {
        setFiltros(filtros)
    }

    useEffect(() => {
        obterNoticias(filtros)
    }, [obterNoticias, filtros])

    return {
        noticias,
        noticiaSelecionada,
        processando,
        selecionarNoticia,
        defineFiltros,
    }
}
