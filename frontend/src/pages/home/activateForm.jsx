import ClipLoader from "react-spinners/ClipLoader";

const ActivateForm = ({ type, header, text, loading }) => {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <ClipLoader
          color="#1876f2"
          loading={loading}
          size={35}
          aria-label="Loading Spinner"
        />
      </div>
    </div>
  );
};

export default ActivateForm;
