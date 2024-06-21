import Colors from "./Colors";

const Modal = () => {
  return (
    <div className="modal">
      <textarea
        className="modal_content_area"
        placeholder={"enter text here"}
      ></textarea>
      <div className="modal_colors">
        <div className="modal_red"></div>
        <div className="modal_blue"></div>
        <div className="modal_green"></div>
        <div className="modal_yellow"></div>
      </div>
    </div>
  );
};
export default Modal;
