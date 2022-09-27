import "./style.css";
import { useField } from "formik";
export default function LoginInput({ placeholder, ...props }) {
  const [field] = useField(props);
  return (
    <div className="input_wrap">
      <input
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  );
}
