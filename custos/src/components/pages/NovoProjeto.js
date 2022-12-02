import styles from './NovoProjeto.module.css'
import ProjetctForm from '../Project/ProjectForm'

function NovoProjeto (){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto, e após isso adicione os serviços desejados!</p>
            <ProjetctForm/>
        </div>
    )
}

export default NovoProjeto