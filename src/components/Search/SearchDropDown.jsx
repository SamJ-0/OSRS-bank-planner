function SearchDropdown({searchValue, searchResults, setDropDownValue}) {

    function handleMouseDown(event) {
        event.preventDefault();
    };

    const handleClick = (item) => {
        setDropDownValue(item);
    };
    
return (
<>
    {searchValue != "" ? 
    <div className="dropDownContainer">
    <ul className="dropDownList">
        {searchResults.map((item) => {
        return <li key={item.id} onMouseDown={handleMouseDown} onClick={() => handleClick(item)}>{item.name}</li>;
    })}
    </ul>
    </div>
    : 
    null
    }
    </>
);
}

export default SearchDropdown