function Select(props) {
  return (
    <div className="grid gap-2">
      <label htmlFor={props.name} className="font-semibold text-sm">
        {props.title}
      </label>
      <select
        id={props.name}
        name={props.name}
        className="text-sm border border-gray-300 rounded-sm p-1"
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">{props.placeHolder}</option>
        {props.options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.value}
          </option>
        ))}
      </select>
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
}

export default Select;
