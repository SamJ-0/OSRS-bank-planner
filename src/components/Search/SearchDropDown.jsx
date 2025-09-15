function SearchDropdown({searchValue, searchResults}) {

        const itemNames = searchResults.map((item) => {
        return <li key={item.id}>{item.name}</li>;
    });

    const handleClick = () => {
        console.log(itemNames.textContent);
    }

return (
<>
    {searchValue != "" ? 
    <div className="dropDownContainer">
    <ul className="dropDownList" onClick={handleClick}>
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

{/* <>
    {searchResults === "" ? 
    null
    : 
    <div className="dropDownContainer">
    <ul className="dropDownList">
        {itemNames}
    </ul>
    </div>
    }
    </> */}