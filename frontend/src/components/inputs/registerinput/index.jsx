import { useMediaQuery } from "react-responsive";
import { ErrorMessage, useField } from "formik";
import "./style.css";

export default function RegisterInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({
    query: "(min-width:850px)",
  });

  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop " : "input_error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={desktopView ? "error_arrow_left" : "error_arrow_top"}
            />
          )}
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
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                desktopView ? "error_arrow_left" : "error_arrow_bottom"
              }
            />
          )}
        </div>
      )}

      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{
            top: `${!bottom && !desktopView ? "63%" : "15px"}`,
          }}
        />
      )}
    </div>
  );
}