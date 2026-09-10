import "./FilterTabs.css"
export default function FilterTabs(){
    return(
        <div className="filter-tabs">
            <ul>
                <li className="active">All</li>
                <li className="">Active</li>
                <li className="">Completed</li>
            </ul>
        </div>
    )
}