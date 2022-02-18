import React, { useEffect } from 'react';
import request_tmdb from './requests_tmdb';  //importando o arquivo das requisições

export default () => {

    useEffect(()=>{   //useEffect executa a função qunado a página carregar
        const carregaTudo = async () => {
            let list = await request_tmdb.getHomeList(); //pega a lista total
            console.log(list);
        }

        carregaTudo();
    }, []);
    
    return (
        <div>
            Olá Mundo!
        </div>
    );
}