import "./SearchBar.css"
import { IoMdSearch } from "react-icons/io";
export default function SearchBar() {
    return (
        <div className="search-bar">
            <form action="">
                <IoMdSearch /> 
                <input type="search" placeholder="Search tasks... " />
            </form>
        </div>
    )
}