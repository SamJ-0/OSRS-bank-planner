function SearchDropdown({searchValue, searchResults}) {

    function handleMouseDown(event) {
        event.preventDefault();
    };

    const handleClick = (e) => {
        console.log(e.target.textContent);
    };

    const itemNames = searchResults.map((item) => {
        return <li key={item.id} onMouseDown={handleMouseDown} onClick={handleClick}>{item.name}</li>;
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