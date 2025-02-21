import NavBar from "../navbar/NavBar.jsx"
import Home from "../../assets/Header/home_header.png"
import Seta from "../../assets/Dashboard/Vector_seta.png"
import styles from "./Solicitacao.module.scss"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"


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
                                <label htmlFor=""> Tipo de despesa </label>
                                <select name="" id="">
                                    <option value=""> Selecionar </option>
                                    <option value=""> Alimentação </option>
                                    <option value=""> Combustível </option>
                                    <option value=""> Condução </option>
                                    <option value=""> Estacionamento </option>
                                    <option value=""> Viagem Admin. </option>
                                    <option value=""> Viagem Operacional </option>
                                    <option value=""> Eventos de representação </option>
                                </select>
                            </div>
                            <div className={styles.centroDeCusto}>
                                <label htmlFor=""> Centro de Custo </label>
                                <select name="" id="">
                                    <option value=""> Selecionar</option>
                                    <option value="">
                                        1100109002 - FIN CONTROLES INTERNOS MTZ
                                    </option>
                                    <option value="">
                                        1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                                    </option>
                                    <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>
                            <div className={styles.ordem}>
                                <label htmlFor=""> Ord. Int. </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.divisoes}>
                                <label htmlFor=""> Div. </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.pep}>
                                <label htmlFor=""> PEP </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.moeda}>
                                <label htmlFor=""> Moeda </label>
                                <select name="" id="">
                                    <option value="">Selecionar</option>
                                    <option value="">BRL</option>
                                    <option value="">ARS</option>
                                    <option value="">USD</option>
                                </select>
                            </div>
                            <div className={styles.distancia}>
                                <label htmlFor=""> Dist / KM </label>
                                <input type="text" />
                            </div>
                            <div className={styles.valorKm}>
                                <label htmlFor=""> Valor / KM </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.valorFaturado}>
                                <label htmlFor=""> Val. Faturado </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.despesa}>
                                <label htmlFor=""> Despesa </label>
                                <input type="number" name="" id="" />
                            </div>
                            <div className={styles.botoes}>
                                <button className={styles.botaoSalvar}> + Salvar </button>
                                <button className={styles.botaoDeletar}> Del </button>
                            </div>
                        </div>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>Nº Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. KM</th>
                                <th>Val. KM</th>
                                <th>Val. Faturado</th>
                                <th>Despesa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={Lixeira} alt="Lixeira" /></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={Motivo} alt="Motivo" /></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>



                    </table>


                </main>
            </div>
        </div>
    )
}

export default Solicitacao