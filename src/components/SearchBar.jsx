import { Search } from "lucide-react";

function SearchBar() {
    return (
        <>
        <div className="searchContainer">
            <div className="searchWrapper">
            <input type="text" className="searchBar" placeholder="Search items..."/>
            <button className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></button>
            </div>
        </div>
        </>
    );
}

export default SearchBar