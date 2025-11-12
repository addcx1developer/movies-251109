function Checkbox(props) {
  return (
    <div className="space-x-2">
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.name} className="text-xs font-semibold">
        {props.title}
      </label>
    </div>
  );
}

export default Checkbox;
