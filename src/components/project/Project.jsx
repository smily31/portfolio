import './project.scss'
import { data } from "../../data"
import { useState } from "react";

export default function Project() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (move) => {
        move === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="project" id="project">
            <h1 className="title">My Personal Projects</h1>
            <div className="slider" style={ {transform: `translateX(-${currentSlide * 100}vw)`}}>
                {
                    data.map( d => (
                        <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="info">
                                <h1>{d.title}</h1>
                                <h2>Description : </h2><p>{d.desc}</p>
                                <h2>Web Stack : </h2>
                                <ul>
                                    {d.stack.map(i => <li>{i}</li>)}
                                </ul>
                                <h2>Github Repo : </h2><span><a href={d.github}>click me</a></span>
                                <button type="button"><a href={d.project}>View Project</a></button>
                                </div>
                            </div>
                            <div className="right">
                                <div className="imageContainer">
                                    <img src={d.image} alt="project" />
                                </div>
    
                            </div>
                        </div>
                    </div>
                    ))
                }
               
            </div>
                <img src="assest/leftArrow.png" alt="left Arrow" className="arrow left" onClick={()=>handleClick("left")} />
                <img src="assest/rightArrow.png" alt="right Arrow" className="arrow right" onClick={()=>handleClick("right")} />
        </div>
    )
}
