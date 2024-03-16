import { useCallback, useEffect, useState } from 'react'
import useProcessando from './useProcessando'

export default function useNoticiasFiltradas() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [noticias, setNoticias] = useState<any[]>([])
    const [noticiaSelecionada, setNoticiaSelecionada] = useState<any>()

    const obterNoticias = useCallback(async function () {
        try {
            iniciarProcessamento()
            //Vai mudar
            const resp = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=15')
            const dados = await resp.json()
            setNoticias(dados.items)
            setNoticiaSelecionada(null)

        } finally {
            finalizarProcessamento()

        }
    }, [iniciarProcessamento, finalizarProcessamento])

    function selecionarNoticia(noticiaSelecionada: any) {
        setNoticiaSelecionada(noticiaSelecionada)
        console.log(noticiaSelecionada)
    }

    function voltar() {
        setNoticiaSelecionada(null)
    }

    useEffect(() => {
        obterNoticias()
    }, [obterNoticias])

    return {
        noticias,
        noticiaSelecionada,
        processando,
        selecionarNoticia,
        voltar
    }
}