import {useNavigate} from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
import api from "../../Services/Api"
import { useState } from "react";


function Login() {

const navigate = useNavigate() // Iniciando o hook useNavigate   

const irParaReembolsos = () => {
    navigate("/reembolsos") // Redirecionando para a página de reembolsos
}

// Iniciando os estados
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

const fazerLogin = async (e) =>{
    e.preventDefault()
    
    try{

        const resposta = await api.post("/colaborador/login", {
            "email": email,
            "senha": senha 
        })

        console.log(resposta.data)
        alert("Login realizado com sucesso!")
        irParaReembolsos() // Redirecionamento

    }catch(error){
        console.log("Erro ao fazer login", error)
        alert("Erro no login aqui, ó!")
    }
}

    return (
        <main className={styles.containerPrincipal}>
            <section className={styles.containerLogin}>

            </section>
            <section className={styles.containerForm}>
                <img src={Logo} alt="Logo da Wilson Sons" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder="Senha" value = {senha} onChange={(e) => setSenha(e.target.value)}/>
                    <a href="">Esqueci minha senha</a>
                    <div className={styles.buttonGroup}>
                        <button className={styles.buttonEntrar} onClick={fazerLogin}>Entrar</button>
                        <button className={styles.buttonCriar}>Criar conta</button>
                    </div>
                </form>
            </section>


        </main>
    )
}

export default Login