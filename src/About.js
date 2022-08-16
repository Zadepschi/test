import { useState } from "react";
import {data} from "./data/aboutdata";

function About() {

   const [pictures, setPictures] = useState(data);
   const [showText, setShowText] = useState(false);


   const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
}


    return (<div>
        {pictures.map((item => {
            const {id, image, description,showMore} = item;
            return (
                <div key={id} className="about" >
                <div>
                    <img src= {image}  alt="dress"  className="aboutPicture"/>
                </div>
               
                <div>
                 <p className="description">{showMore ? description : description.substring(0, 200) + "..."}
                 <button className='showMore' onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"} </button> </p>
                 </div>
                </div>
            )
        }))}
    </div>

    )
}

export default About;