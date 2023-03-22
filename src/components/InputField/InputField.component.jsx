import {Group,FormInput,FormInputLabel }from "./InputField.styles.jsx";

const InputField = ({ label, name, type, value, handleChange }) => {
  return (
    <Group>
      <FormInput
        
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      {label && (
        <FormInputLabel
          htmlFor=""
          shrink={value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default InputField;
