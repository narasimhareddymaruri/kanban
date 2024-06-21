import newfunc from "./newfunc";
import { useEffect } from "react";
import Modal from "./Modal";
const Board = () => {
  useEffect(() => {
    newfunc();
  }, []);
  return (
    <div className="board">
      <Modal />
    </div>
  );
};
export default Board;
