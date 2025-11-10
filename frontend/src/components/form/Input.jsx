function Input(props) {
  return (
    <div className="grid gap-2">
      <label htmlFor={props.name} className="font-semibold text-sm">
        {props.title}
      </label>
      <input
        ref={props.ref}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        className={props.className}
        value={props.value}
        onChange={props.onChange}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
}

export default Input;
