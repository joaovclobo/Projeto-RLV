import { useCallback, useEffect, useState } from 'react'
import useProcessando from './useProcessando'

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [noticias, setNoticias] = useState<any[]>([])
    const [noticia, setNoticia] = useState<any>([])

            // const [filmes, setFilmes] = useState<any>([])

            // const obterFilmes = useCallback(async function (personagem: any) {
            //     if(!personagem?.films?.length) return
            //     try {
            //         iniciarProcessamento()
            //         const reqs = personagem.films.map(async (film: string) => {
            //             const resp = await fetch(film)
            //             return resp.json()
            //         })
            //         const filmes = await Promise.all(reqs)
            //         setFilmes(filmes)
            //     } finally {
            //         finalizarProcessamento()
            //     }
            // }, [iniciarProcessamento, finalizarProcessamento])

        const obterNoticias = useCallback(async function () {
        try {
            iniciarProcessamento()
            const resp = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/')
            const dados = await resp.json()
            console.log(dados.items)
            setNoticias(dados.items)
        } finally {
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    function selecionarNoticia(noticia: any) {
        setNoticia(noticia)
    }

    function voltar() {
        setNoticia(null)
        // setFilmes([])
    }

    useEffect(() => {
        obterNoticias()
    }, [obterNoticias])

    // useEffect(() => {
        // obterFilmes(personagem)
    // }, [personagem, obterFilmes])

    return {
        noticias,
        // filmes,
        processando,
        selecionarNoticia,
        voltar
    }
}
