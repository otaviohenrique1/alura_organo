import PropTypes from 'prop-types';
import "./Colaborador.css";

const Colaborador = ({ imagem, nome, cargo }) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho'>
        <img src={imagem} alt={nome} />
        {/* <img src="https://github.com/otaviohenrique1.png" alt="Otavio Henrique" /> */}
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  imagem: PropTypes.string,
  nome: PropTypes.string,
  cargo: PropTypes.string,
}

export default Colaborador;