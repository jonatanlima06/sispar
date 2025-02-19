import NavBar from "../navbar/NavBar.jsx"
import Home from "../../assets/Header/home_header.png"
import Seta from "../../assets/Dashboard/Vector_seta.png"
import styles from "./Solicitacao.module.scss"


function Solicitacao() {
    return (
        <div className={styles.layoutSolicitacao}>

            <NavBar />

            <div className={styles.containerPrincipalSolicitacao}>
                <header className={styles.headerSolicitacao}>
                    <img src={Home} alt="Vetor de uma casinha" />
                    <img src={Seta} alt="Vetor de uma setinha" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="Vetor de uma setinha" />
                    <p>Solicitação de reembolsos</p>
                </header>
                <main className={styles.mainSolicitacao}>
                    <form action="" className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" name="" id="nome-completo" />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="" id="empresa" />
                            </div>
                            <div className={styles.inputPrestContas}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input type="text" name="" id="prestacao-contas" />
                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <input type="text" name="" id="motivo" />
                            </div>
                        </div>
                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="" id="data" />
                            </div>
                            <div className={styles.selectDespesa}>
                                <select name="" id="">
                                    <option value=""> Selecionar </option>
                                    <option value=""> Alimentação </option>
                                    <option value=""> Combustível </option>
                                    <option value="">  </option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                        </div>

                    </form>

                </main>

            </div>


        </div>
    )
}

export default Solicitacao