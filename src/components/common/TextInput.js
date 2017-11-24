/**
 * Created by chungch on 6/30/2017.
 */
import React, {PropTypes} from 'react';


const TextInput = ({name, label, onChange, placeholder, value, error}) =>{
  let wrapperClass = 'form-group';
  if(error && error.length > 0 ) {
    wrapperClass += " " + 'has-error'
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger" >{error}</div> }
      </div>
    </div>
  );
};

TextInput.PropTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
