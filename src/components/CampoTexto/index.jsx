import PropTypes from 'prop-types';
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada} />
    </div>
  );
};

CampoTexto.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default CampoTexto;