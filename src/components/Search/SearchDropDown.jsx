function SearchDropdown({names}) {
    
    const mappedItemNames = names.map((item) => {
        return <li>{item.name}</li>;
    });
return (
<>
<ul>
    {mappedItemNames}
</ul>
</>
);
}

export default SearchDropdown