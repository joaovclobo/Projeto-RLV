import { useCallback, useEffect, useState } from 'react'
import useProcessando from './useProcessando'

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [noticias, setNoticias] = useState<any[]>([])
    const [noticia, setNoticia] = useState<any>([])

        const obterNoticias = useCallback(async function () {
            
        try {
            iniciarProcessamento()
            const resp = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=20')
            const dados = await resp.json()
            setNoticias(dados.items)

        } finally {
            finalizarProcessamento()

        }
    }, [iniciarProcessamento, finalizarProcessamento])

    function selecionarNoticia(noticia: any) {
        setNoticia(noticia)
        console.log(noticia)
    }

    function voltar() {
        setNoticia(null)
    }

    useEffect(() => {
        obterNoticias()
    }, [obterNoticias])

    return {
        noticias,
        processando,
        selecionarNoticia,
        voltar
    }
}
