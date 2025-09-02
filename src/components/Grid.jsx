import "./Grid.css"

function Grid({height, width, columns, numOfTiles}) {

        let tileCount = numOfTiles;
        let mainGrid = [];

    for(let i = 0; i < tileCount; i++) {
        mainGrid.push(<div style={{height, width}} className="bankTile" key={i}></div>);
    }
    
    return (
        <div className="gridContainer">
            <div style={{gridTemplateColumns:`repeat(${columns}, ${width})`}} className="gridRow">{mainGrid}</div>
        </div>
    );
}

export default Grid