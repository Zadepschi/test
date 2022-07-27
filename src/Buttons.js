function Buttons({ filteredClothes } ) {

    return(
        <div className="cont">
            <button className="change" >All</button>
            <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
            <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
            <button className="change" onClick={() => filteredClothes("shirt")}>Shirts</button>
            <button className="change" onClick={() => filteredClothes("pijamas")}>Pajamas</button>
            <button className="change" onClick={() => filteredClothes("tunic")}>Tunics</button>
        </div>
    )
}

export default Buttons;