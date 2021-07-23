import { SiteClient } from 'datocms-client';

export default async function recebedoRequest(request, response){
    if(request.method === 'POST'){
        const TOKEN = '14728abd7c3985d5cbff665e35fc6d';
        const client = new SiteClient(TOKEN);

        //validador dos dados
        const registroCriado = await client.items.create({
            itemType: "976146",
            ...request.body,
            //title:"Comunidade teste",
            //imageUrl: "https://github.com/Bryan-R-Carvalho.png",
        })

        console.log(registroCriado);
        response.json({
            dados:'algum dado',
            registroCriado: registroCriado,
        }) 
    }

    response.status(404).json({
        message: 'Ainda nao temos nada no get, mas  no post tem!',
    })
} 