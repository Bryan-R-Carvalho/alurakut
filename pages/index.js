
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu,OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
 
function ProfileSidebar(props){
  
  return(
    <Box>
          <img style={{ borderRadius: '180px'}} src={`https://github.com/${props.githubUser}.png`}/>
    </Box>
  )
}
 
export default function Home() {
  const githubUser = 'Bryan-R-Carvalho';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

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
      </div>

      <div className="profileReltionsArea" style={{gridArea: 'profileReltionsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
          Pessoas da comunidades ({pessoasFavoritas.length})
          </h2>

          <ul>
          {pessoasFavoritas.map((itemAtual)=>{
            return (
              <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
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
