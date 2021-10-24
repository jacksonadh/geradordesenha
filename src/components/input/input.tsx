import './input.css'

type inputProps = {
  label: string;
  id: string;
  text: string;
}

export default function Input(props: inputProps) {
  return (
    <div>
      <form>
        <label
          htmlFor={props.id}>
          {props.label}
        </label>
        <input
          type="text"
          placeholder={props.text}
          id={props.id}
        />

      </form>
    </div>

  );
}