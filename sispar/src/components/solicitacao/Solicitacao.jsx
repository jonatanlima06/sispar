import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar.jsx"
import Home from "../../assets/Header/home_header.png"
import Seta from "../../assets/Dashboard/Vector_seta.png"
import styles from "./Solicitacao.module.scss"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Check from "../../assets/Solicitacao/check.png"
import X from "../../assets/Solicitacao/x.png"
import Api from "../../Services/Api" //importando a api que está guardada em service


function Solicitacao() {
    const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
    const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
    const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
    const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
    const [data, setData] = useState(""); // Estado para o campo data
    //const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
    const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
    const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
    const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
    const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
    const [pep, setPep] = useState(""); // Estado para o campo pep
    const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
    const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
    const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
    const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
    const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

    const [dadosReembolso, setDadosReembolso] = useState([]);

    //FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS

    const handleSubmit = () => {
        const objetoReembolso = {
            colaborador,
            empresa,
            nPrestacao,
            descricao,
            data,
            tipoReembolso,
            ordemInterna,
            centroCusto,
            divisao,
            pep,
            moeda,
            distanciaKm,
            valorKm,
            valorFaturado,
            despesa
        };
        setDadosReembolso(dadosReembolso.concat(objetoReembolso))


    };

    //FUNÇÃO PARA LIMPAR TODOS OS CAMPOS DO FORMULÁRIO
    const limparCampos = () => {
        setColaborador(""),
          setEmpresa(""),
          setnPrestacao(""),
          setDescricao(""),
          setData(""),
          //setMotivo(""),
          setTipoReembolso(""),
          setCentroCusto(""),
          setOrdemInterna(""),
          setDivisao(""),
          setPep(""),
          setMoeda(""),
          setDistanciaKm(""),
          setValorKm(""),
          setValorFaturado(""),
          setDespesa("");
      };

    //FUNÇÃO PARA ENVIAR OS DADOS PARA A API
    const [foiEnviado, setFoiEnviado] = useState(false) //Esse estado serve para saber se o formulário foi enviado.

    const enviarParaAnalise = async () => {
        try {
            // const response = o resultado da resposta do servidor
            // await (esperar) = Faz com que o código espere a reposta da API
            // Api é a nossa
            // post = é um método que serve para enviar algo para o servidor
            // 1º argumento é o caminho da rota, o 2º argumento é o que será enviado
            const response = await Api.post("/refunds/new", dadosReembolso);
            console.log("Respostas da API", response); //mostrar o que está acontecendo na API (útil para os desenvolvedores testarem)
            alert("Reembolso solicitado com sucesso!")
            setFoiEnviado(true) //Se todo formulário for preenchido corretamente, esse estado será "true"

        } catch (error) { //Caso dê erro na hora do envio, ele mostra no console
            console.log("Erro ao enviar", error)


        };
    };

    useEffect(() => {
        if (foiEnviado) {
            setDadosReembolso([]); //Zera o formulário depois do envio
            setFoiEnviado(false) //Voltou ao estado original (false)
        }
    }, [foiEnviado]);


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
                    <form onSubmit={(e) => e.preventDefault()} className={styles.formSolicitacao}>
                        <div className={styles.grupo1}>
                            <div className={styles.inputNome}>
                                <label htmlFor="">Nome Completo</label>
                                <input type="text" name="" id="nome-completo" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                            </div>
                            <div className={styles.inputEmpresa}>
                                <label htmlFor="">Empresa</label>
                                <input type="text" name="" id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                            </div>
                            <div className={styles.inputPrestContas}>
                                <label htmlFor="">Nº Prest. Contas</label>
                                <input type="text" name="" id="prestacao-contas" value={nPrestacao} onChange={(e) => setnPrestacao(e.target.value)} />
                            </div>
                            <div className={styles.inputMotivo}>
                                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                                <input type="text" name="" id="motivo" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.barraVertical}></div>

                        <div className={styles.grupo2}>
                            <div className={styles.inputData}>
                                <label htmlFor="">Data</label>
                                <input type="date" name="" id="data" value={data} onChange={(e) => setData(e.target.value)} />
                            </div>
                            <div className={styles.selectDespesa}>
                                <label htmlFor=""> Tipo de despesa </label>
                                <select name="" id="" value={tipoReembolso} onChange={(e) => setTipoReembolso(e.target.value)}>
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
                                <select name="" id="" value={centroCusto} onChange={(e) => setCentroCusto(e.target.value)}>
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
                                <input type="number" name="" id="" value={ordemInterna} onChange={(e) => setOrdemInterna(e.target.value)} />
                            </div>
                            <div className={styles.pep}>
                                <label htmlFor=""> PEP </label>
                                <input type="number" name="" id="" value={pep} onChange={(e) => setPep(e.target.value)} />
                            </div>
                            <div className={styles.divisoes}>
                                <label htmlFor=""> Div. </label>
                                <input type="number" name="" id="" value={divisao} onChange={(e) => setDivisao(e.target.value)} />
                            </div>
                            <div className={styles.distancia}>
                                <label htmlFor=""> Dist / KM </label>
                                <input type="text" value={distanciaKm} onChange={(e) => setDistanciaKm(e.target.value)} />
                            </div>
                            <div className={styles.moeda}>
                                <label htmlFor=""> Moeda </label>
                                <select name="" id="" value={moeda} onChange={(e) => setMoeda(e.target.value)}>
                                    <option value="">Selecionar</option>
                                    <option value="">BRL</option>
                                    <option value="">ARS</option>
                                    <option value="">USD</option>
                                </select>
                            </div>
                            <div className={styles.valorKm}>
                                <label htmlFor=""> Valor / KM </label>
                                <input type="number" name="" id="" value={valorKm} onChange={(e) => setValorKm(e.target.value)} />
                            </div>
                            <div className={styles.despesa}>
                                <label htmlFor=""> Val. Taxa </label>
                                <input type="number" name="" id="" value={despesa} onChange={(e) => setDespesa(e.target.value)} />
                            </div>
                            <div className={styles.valorFaturado}>
                                <label htmlFor=""> Val. Faturado </label>
                                <input type="number" name="" id="" value={valorFaturado} onChange={(e) => setValorFaturado(e.target.value)} />
                            </div>
                            <div className={styles.botoes}>
                                <button className={styles.botaoSalvar} onClick={handleSubmit}> + Salvar </button>
                                <button className={styles.botaoDeletar} onClick={limparCampos}> <img src={Deletar} alt="Deletar" /> </button>
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
                            {dadosReembolso.map((item, index) => (
                                <tr key={index}>
                                    <td><img src={Lixeira} alt="Lixeira" /></td>
                                    <td> {item.colaborador} </td>
                                    <td> {item.empresa} </td>
                                    <td>{item.nPrestacao}</td>
                                    <td>{item.data}</td>
                                    <td><img src={Motivo} alt="Motivo" /></td>
                                    <td>{item.tipoReembolso}</td>
                                    <td>{item.centroCusto}</td>
                                    <td>{item.ordemInterna}</td>
                                    <td>{item.divisao}</td>
                                    <td>{item.pep}</td>
                                    <td>{item.moeda}</td>
                                    <td>{item.distanciaKm}</td>
                                    <td>{item.valorKm}</td>
                                    <td>{item.valorFaturado}</td>
                                    <td>{item.despesa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <section className={styles.finalSolicitacao}>
                        <div className={styles.grupo3}>
                            <div className={styles.inputFinal}>
                                <div className={styles.inputTf}>
                                    <label htmlFor="">Total Faturado</label>
                                    <input type="text" name="" id="" value={0.00} />
                                </div>
                                <div className={styles.inputTd}>
                                    <label htmlFor="">Total Despesa</label>
                                    <input type="text" name="" id="" value={0.00} />
                                </div>
                            </div>
                            <div className={styles.finalBotoes}>
                                <button onClick={enviarParaAnalise} className={styles.buttonCheck}><img src={Check} alt="Enviar Análise" /> Enviar para Análise </button>
                                <button className={styles.buttonX}><img src={X} alt="Cancelar" /> Cancelar Solicitação </button>
                            </div>
                        </div>
                    </section>


                </main>
            </div>
        </div>
    )
}

export default Solicitacao