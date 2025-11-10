function Checkbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.name}>{props.title}</label>
    </div>
  );
}

export default Checkbox;
