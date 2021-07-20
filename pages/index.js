import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props){
  return(
    <Box as="aside">
          <img style={{ borderRadius: '180px'}} src={`https://github.com/${props.githubUser}.png`}/>
          <hr/>

          <p>
            <a className="boxLink" href={`http://github.com/${props.githubUser}`}>
              @{props.githubUser}
            </a>
          </p>
          <hr/>
          
          <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}
function ProfileRelationsBox(props){
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {/*seguidores.map((itemAtual)=>{
          return (
            <li key={itemAtual}>
              <a href={`https://${itemAtual}`} >
                <img src={itemAtual.image}/>
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })*/}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}
 
export default function Home() {
  const githubUser = 'Bryan-R-Carvalho';
  const [comunidades, setComunidades] = React.useState([{
    id: '149765735798849849198198',
    title: 'Quer uma gelada?',
    image: 'https://img-9gag-fun.9cache.com/photo/aXj82Wz_460s.jpg'
  }]);
  
  
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  const [seguidores, setSeguidores] = React.useState([]);
  //0 - pegar o array de dados do github
    
    React.useEffect(function(){
      fetch('https://api.github.com/users/peas/followers')//Bryan-R-Carvalho
      .then(function(responstaDoServidor){
        return responstaDoServidor.json();
      })
      .then(function(respostaCompleta){
        setSeguidores(respostaCompleta);
      })
    }, [])

    console.log('seguidores antes do return', seguidores);

  return (
    <>
    <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vinde
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que quer fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),

                }
                const comunidadesAtualizadas =[...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
                
            }}>
              <div>
                <input 
                  placeholder="Qual será o nome da comunidade?"   
                  name="title"
                  aria-label="Qual será o nome da comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input 
                  placeholder="coloque uma URL para usar de capa"   
                  name="image"
                  aria-label="coloque uma URL para usar de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileReltionsArea" style={{gridArea: 'profileReltionsArea'}}>
          <ProfileRelationsBox title="Seguidores" items={seguidores}/>
          
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
                Comunidades ({comunidades.length})
              </h2>
            <ul>
              {comunidades.map((itemAtual)=>{
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} >
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Pessoas da comunidades ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.map((itemAtual)=>{
              return (
                <li  key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
      </>
  )
}
