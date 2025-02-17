import styles from "./Reembolsos.module.scss"
import Home from "../../assets/Header/home_header.png"
import Seta from "../../assets/Dashboard/Vector_seta.png"
import Analise from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"
import NavBar from "../navbar/NavBar.jsx"

function Reembolsos() {
    return (
        <div className={styles.layout}>
            <NavBar />
            <div>
                <header>
                    <img src={Home} alt="Vetor de uma casinha" />
                    <img src={Seta} alt="Vetor de uma setinha" />
                    <p>Reembolsos</p>
                </header>
                <main className={styles.mainReembolsos}>
                    <section className={styles.centralizar}>
                        <h1>Sistema de Reembolsos</h1>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>

                        <section className={styles.containerCards}>
                            <article>
                                <img src={SolicitarReembolso} alt="Icone solicitação de reembolso" />
                                <h3>Solicitar Reembolso</h3>
                            </article>
                            <article>
                                <img src={Analise} alt="Icone para análises" />
                                <h3>Verificar análises</h3>
                            </article>
                            <article>
                                <img src={SolicitarHistorico} alt="Icone para solicitar histórico" />
                                <h3>Histórico</h3>
                            </article>
                        </section>
                        <section className={styles.containerStatus}>
                            <div>
                                <img className={styles.img1} src={NumeroSolicitados} alt="Indicador número solicitados" />
                                <h4>182</h4>
                                <p>Solicitados</p>
                            </div>
                            <div>
                                <img className={styles.img2} src={NumeroAnalises} alt="Indicado número análises" />
                                <h4>74</h4>
                                <p>Em análise</p>
                            </div>
                            <div>
                                <img className={styles.img3} src={NumeroAprovados} alt="Indicador número aprovados" />
                                <h4>195</h4>
                                <p>Aprovados</p>
                            </div>
                            <div>
                                <img className={styles.img4} src={NumeroRejeitados} alt="Indicador número rejeitados" />
                                <h4>41</h4>
                                <p>Rejeitados</p>
                            </div>

                        </section>

                        <section className={styles.containerSistema}>
                            <img src={Sistema} alt="Indicativo do sistema" />
                            <p>Sistema atualizado.</p>
                        </section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Reembolsos