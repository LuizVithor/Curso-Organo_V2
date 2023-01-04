import './botao.css'

const Botao = ({texto , onclick}) => {
    return <button className="botao" onClick={onclick}>
        {texto}
    </button>
}

export default Botao