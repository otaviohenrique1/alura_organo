import PropTypes from 'prop-types';
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          );
        })}
      </select>
    </div>
  );
};

ListaSuspensa.propTypes = {
  label: PropTypes.string,
  itens: PropTypes.array
}

export default ListaSuspensa;