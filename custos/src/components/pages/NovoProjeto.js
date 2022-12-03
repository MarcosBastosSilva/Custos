import styles from './NovoProjeto.module.css'
import ProjetctForm from '../Project/ProjectForm'

function NovoProjeto (){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <h2>Crie seu Projeto, e após isso adicione os serviços desejados!</h2>
            <ProjetctForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto