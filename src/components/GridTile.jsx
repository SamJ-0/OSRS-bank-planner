import { useState } from "react";
import "./Grid.css";
import { X } from "lucide-react";

function GridTile({ tileState }) {

  const [selectedTile, setSelectedTile] = useState();

  function handleClick() {
    console.log(tileState.id);
    setSelectedTile(tileState.id);
  }

  return (

    <div className="bankTile" onClick={handleClick} style={{height: tileState.height, width: tileState.width }} key={tileState.id}>
      {tileState.item !== null ? 
      <div className="bankSlotContainer" style={{maxHeight: tileState.height, maxWidth: tileState.width}}>
        <div className="removeItem"><X size={"15px"}/></div>
        <img className="sprite" src={tileState.item.icon_large} alt={tileState.item.description} title={tileState.item.description}/>
        <div className="itemName">{tileState.item.name}</div>
      </div>
    : 
      <div></div>
    }
    </div>
  );
}

export default GridTile;
