import {useNavigate} from 'react-router-dom'
import styles from './NovoProjeto.module.css'
import ProjectForm from '../Project/ProjectForm'

function NovoProjeto (){

    const history = useNavigate()
    function createPost(projetos){
      projetos.cost = 0
      projetos.services = []

      fetch("http://localhost:8080/projetos",{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(projetos),
      })
      .then((resp => resp.json())
      .then((data) => {history('/projects', { message: 'Projeto criado com sucesso!' })
      })
      ).catch(err => console.log(err))
        
    } 
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <h2>Crie seu Projeto, e após isso adicione os serviços desejados!</h2>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NovoProjeto