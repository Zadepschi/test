

import { useState } from "react";
import { data } from "./data/data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";

function Products() {

    const [itemsForSale,setItemsForSale] = useState(data);

    const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setItemsForSale(newClothes)
    }

    return ( <div>

        <Buttons  filteredClothes={chosenClothes} />
        <Clothes  itemsForSale={itemsForSale} />

        </div>)
}
export default Products;