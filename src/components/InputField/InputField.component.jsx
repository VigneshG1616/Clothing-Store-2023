import "./InputField.styles.scss";

const InputField = ({ label, name, type, value, handleChange }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      {label && (
        <label
          htmlFor=""
          className={`${value.length && "shrink"} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputField;
