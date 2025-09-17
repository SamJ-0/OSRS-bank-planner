function SearchDropdown({searchValue, searchResults, setDropDownValue}) {

    function handleMouseDown(event) {
        event.preventDefault();
    };

    const handleClick = (item) => {
        setDropDownValue(item);
    };

    const itemNames = searchResults.map((item) => {
        return <li key={item.id} onMouseDown={handleMouseDown} onClick={() => handleClick(item)}>{item.name}</li>;
    });

return (
<>
    {searchValue != "" ? 
    <div className="dropDownContainer">
    <ul className="dropDownList">
        {itemNames}
    </ul>
    </div>
    : 
    null
    }
    </>
);
}

export default SearchDropdown