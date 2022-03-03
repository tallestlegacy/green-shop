const Input = ({ name, title, type, value, setValue }) => {
  // handle value changes in the inputs
  const handleChange = (event) => {
    let temp = value;
    temp[name] = event.target.value;
    setValue({ ...temp });
  };

  return (
    <tr>
      <td>
        <label htmlFor={name}>{title}</label>
      </td>
      <td>
        <input
          type={type}
          name={name}
          value={value[name] ? value[name] : ""}
          onChange={handleChange}
          required
        />
      </td>
    </tr>
  );
};

export default Input;
