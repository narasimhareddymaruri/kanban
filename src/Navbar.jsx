import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import Colors from "./Colors";

const Navbar = () => {
  return (
    <div className="navbar">
      <Colors />

      <div className="actions">
        <div className="add_card">
          <AddIcon />
        </div>
        <div className="delete_card">
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
