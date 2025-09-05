import GridTile from "./GridTile";
import "./Grid.css"

function Grid({height, width, column, row, item}) {
        let gridColumns = Array(column).fill().map((x,i) => i+1);
        let tileCount = Array(row).fill().map((x, i) => i+1);

        const tilePosition = tileCount.map((tile, i) => {
            let x;

            if(tile % gridColumns.length) {
                let moduloResult = tile % gridColumns.length;
                x = moduloResult;
            } else if (tile % gridColumns.length === 0) {
                x = gridColumns.length;
            }

            return <GridTile height={height} width={width} x={x} y={tile} key={tile} item={item} count={tile}/>
        })

    return (
        <div className="gridContainer">
            <div className="gridRow" style={{gridTemplateColumns:`repeat(${8}, ${width})`}}>
                {tilePosition}
            </div>
        </div>
    );
}
export default Grid