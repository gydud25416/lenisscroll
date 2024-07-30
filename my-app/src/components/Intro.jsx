import React, { useEffect, useRef } from "react";
import Header from "./Header";

export default function Intro({IntroWidth}){ 
    const introRef = useRef(null); 
    useEffect(() => {
        const introWith = () =>{
            if (introRef.current) {
                IntroWidth(introRef.current.offsetWidth)  
            }
        }

        introWith();
        window.addEventListener("resize",introWith);
        
      }, []);
    return(
        <div id="intro" ref={introRef} className="wrap_intro">
            <div className="wrap_home">
                
                <img src="/Ellipse1.png" className="ellipse1" alt="" />
                <img src="/Ellipse2.png" className="ellipse2" alt="" />
                <img src="/Polygon1.png" className="polygon1"  alt="" />
                <img src="/Polygon2.png" className="polygon2" alt="" />
                <img src="/Rectangle2.png" className="rectangle2" alt="" />
                <img src="/Rectangle3.png" className="rectangle3" alt="" />
                <img src="/home_hy.jpg" alt="증명사진" className="home_hy" />
                <p><span>새로운 도전</span>을 즐기는<br/>
                <span>프론트엔드 개발자</span>
                <br/>
                <span>장효영</span>입니다.
                </p>
            </div>
            <div className="wrap_header">
                <Header />
            </div> 
        </div>
    )
}