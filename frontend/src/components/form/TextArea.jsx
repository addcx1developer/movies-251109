function TextArea(props) {
  return (
    <div className="grid gap-2">
      <label htmlFor={props.name} className="font-semibold text-sm">
        {props.title}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        rows={props.rows}
        className="text-sm border border-gray-300 rounded-sm p-1"
        value={props.value}
        onChange={props.onChange}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
}

export default TextArea;