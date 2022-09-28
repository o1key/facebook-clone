import { ErrorMessage, useField } from "formik";
import "./style.css";

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div className="input_error">
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <div className="error_arrow_top" />}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div className="input_error">
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <div className="error_arrow_bottom" />}
        </div>
      )}

      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{
            top: `${!bottom && "63%"}`,
          }}
        />
      )}
    </div>
  );
}
