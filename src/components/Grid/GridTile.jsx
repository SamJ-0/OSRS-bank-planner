import "./Grid.css";
import { X } from "lucide-react";

function GridTile({ slot }) {

  return (

    <div className="bankTile" style={{height: slot.height, width: slot.width }} key={slot.id}>
      {slot.item !== null ? 
      <div className="bankSlotContainer">
        <div className="removeItem"><X size={"15px"}/></div>
        <img className="sprite" src={slot.item.icon_large} alt={slot.item.description} title={slot.item.description}/>
        <div className="itemName">{slot.item.name}</div>
      </div>
    : 
      <div></div>
    }
    </div>
  );
}

export default GridTile;
