import { useState } from "react";
import "./TaskBox.css";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";

export default function TaskBox({ list , handleDel}) {
  const [data, setData] = useState(list);

let del=(idx)=>{
    handleDel(idx);
}

  return (
    <div>
      {list.map((ele, idx) => (
        <h1 key={idx}>
          {ele}
          <ClearTwoToneIcon
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => del(idx)} 
          />
        </h1>
      ))}
    </div>
  );
}
