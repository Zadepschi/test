import { useState } from "react";
import { data } from "./data/slides";
import './App.css';
import left from './left.png';
import next from './next.png';


function Home() {

    const [firstPage, setFirstPage] = useState(0);
    const {id, image, name} = data[firstPage]

    const previousButton = () => {
        setFirstPage(firstPage => {
            firstPage--;
            if(firstPage < 0) {
               return data.length-1
            }
            return firstPage;
        })
    }

    const nextButton = () => {
        setFirstPage(firstPage => {
            firstPage++;
            if(firstPage > data.length -1) {
                firstPage = 0;
            }
            return firstPage;
        })
    }

    return ( <div key={id}>
   
        <div className="main">
            <div className="center">
                <h1> {name} </h1>
            </div>
        </div>
        <div>
            <img className="slidePicture" src={image}  alt="clothes"/>
        </div>
        <div className="buttons">
            <div className="buttonContainer">
              <button className="prevButton" onClick={previousButton}> {<img src={left} width="100px" alt="ok" />} </button>
              <button className="nextButton" onClick={nextButton}> {<img src={next} width="100px" alt="ok" />} </button>
            </div>
        </div>
    </div>
    
    )
}

export default Home;