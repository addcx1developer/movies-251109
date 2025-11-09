function Alert(props) {
  return (
    <div className={`rounded-md px-4 py-3 ${props.className}`} role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
