import { useEffect, useState } from 'react'
import Input from '../Form/input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'
import styles from '../Project/ProjectForm.module.css'
function ProjetctForm ({btnText}){

    const [categories,setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/categorias",{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err => console.log(err)))
    }, [])
    return (
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do Projeto"/>
           <Input 
            type="numbe" 
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"/>
           <Select 
           name="category_id" 
           text="Selecione a categoria" 
           options={categories}/>
           <SubmitButton text={btnText}/>
           
        </form>
    )
}

export default ProjetctForm