function SearchDropdown({names, search}) {
    
    const mappedItemNames = names.map((item) => {
        return <li key={item.id}>{item.name}</li>;
    });

return (
<>
    {search === "" ? 
    null
    : 
    <div className="dropDownContainer">
    <ul className="dropDownList">
        {mappedItemNames}
    </ul>
    </div>
    }
    </>
);
}

export default SearchDropdown