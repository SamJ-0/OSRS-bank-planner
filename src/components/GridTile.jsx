import "./Grid.css";

function GridTile({ itemId, itemName, itemIcon, x, y, height, width, count }) {
  return (
    <div style={{ height, width }} className="bankTile" key={itemId}>
      <div className="sprite">
        <img src={itemIcon} alt={itemIcon} />
      </div>
      <div className="itemName">{`x:${x} y:${y}`}</div>
    </div>
  );
}

export default GridTile;
