import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton'

function Home (){
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Custos</span></h1>
            <p>Comece a gerenciar os seus próprios projetos agora mesmo.</p>
            <LinkButton to="/NovoProjeto" text="Criar Projeto"/>
            <img src={savings} alt="Custos"/>
        </section>
    )
}

export default Home 