import { data } from "./data/data";

function Buttons(props ) {

    return(
        <div className="cont">
            <button className="change" onClick={() => props.anyword(data)}>All</button>
            <button className="change" onClick={() => props.filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => props.filteredClothes("skirt")}>Skirts</button>
            <button className="change" onClick={() => props.filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => props.filteredClothes("shoes")}>Shoes</button>
            <button className="change" onClick={() => props.filteredClothes("shirt")}>Shirts</button>
            <button className="change" onClick={() => props.filteredClothes("pijamas")}>Pajamas</button>
            <button className="change" onClick={() => props.filteredClothes("tunic")}>Tunics</button>
        </div>
    )
}

export default Buttons;