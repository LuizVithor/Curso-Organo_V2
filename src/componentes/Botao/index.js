import './botao.css'

const Botao = ({texto , onclick, classX='botao'}) => {
    return <button className={classX} onClick={onclick}>
        {texto}
    </button>
}

export default Botao