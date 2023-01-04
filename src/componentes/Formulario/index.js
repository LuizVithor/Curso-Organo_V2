import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
    const [id , setId] = useState('')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [oculto , setOculto] = useState(false)

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id:uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
    }



    function ocultar(){
        if (oculto === false){
            setOculto(true)
            return false
        } else {
            setOculto(false)
            return true
        }
    }

    return (
        <div>
            <div className="alinhar">
            {oculto === true ? <Botao onclick={ocultar} classX="botaoP" texto='Mostrar Formularios'></Botao> : <Botao onclick={ocultar} texto='Ocultar Formularios'></Botao>}
            </div>
            {oculto === false ?<section className="formulario-container">
                <form className="formulario" onSubmit={aoSubmeter}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <Campo
                        obrigatorio={true}
                        label='Nome'
                        placeholder='Digite seu nome '
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}/>
                    <Campo
                        obrigatorio={true}
                        label='Cargo' 
                        placeholder='Digite seu cargo '
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}/>
                    <Campo 
                        label='Imagem' 
                        placeholder='Informe o endereço da imagem '
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}/>
                    <ListaSuspensa 
                        obrigatorio={true}
                        label='Times'
                        items={times} 
                        valor={time}
                        aoAlterado={valor => setTime(valor)}/>
                    <Botao texto='Criar card' />
                </form>
                <form className="formulario" onSubmit={(evento) => {
                    evento.preventDefault()
                    aoCriarTime({ nome: nomeTime, cor: corTime })
                    setCorTime('')
                    setNomeTime('')
                }}>
                    <h2>Preencha os dados para criar um novo time.</h2>
                    <Campo
                        obrigatorio={true}
                        label='Nome'
                        placeholder='Digite o nome do time'
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}/>
                    <Campo
                        obrigatorio={true}
                        label='Cor'
                        type='color'
                        placeholder='Digite sua cor'
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}/>
                    <Botao texto='Criar Time' />
                </form>
            </section> : <section></section>}
        </div>
    )
}

export default Formulario