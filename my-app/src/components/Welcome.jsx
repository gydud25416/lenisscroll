import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

export default function Welcome(){
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);
    const divRef = useRef(null);

    useEffect(()=>{
        const welcome = gsap.timeline();
        welcome.to(text1Ref.current,{top:0 })
        .to(text2Ref.current,{top:0 })
        .to(text3Ref.current,{top:0 })
        .to('.welcome_text p',{overflowY:"visible"})
        

        return ()=>{
            welcome.kill(); 
        }
    },[])

    useEffect(()=>{ 
        const welcome2 = gsap.fromTo(text1Ref.current,
            {left:'10%'},
            {
                left:'25%', 
                duration:2,
                scrollTrigger:{
                    trigger:divRef.current,
                    start:'300px',
                    end:'+=2000',
                    scrub:true
                }
            }
        )
        const welcome3 = gsap.fromTo(text2Ref.current,
            {left:"30%"},
            {
                left:"10%",  
                duration:2,
                scrollTrigger:{
                    trigger:divRef.current,
                    start:'300px',
                    end:'+=2000',
                    scrub:true
                }
            }
        )
        const welcome4 = gsap.fromTo(text3Ref.current,
            {left:"5%"},
            {
                left:"45%",  
                duration:2,
                scrollTrigger:{
                    trigger:divRef.current,
                    start:'300px',
                    end:'+=2000',
                    scrub:true
                }
            }
        )
        
        return ()=>{ 
            welcome2.kill();
            welcome3.kill();
            welcome4.kill();
        }
    },[])

    return(
        <div className="welcome_text" ref={divRef}>
            <p><span ref={text1Ref} className="text1">WELLCOME TO</span></p>
            <p><span ref={text2Ref}  className="text2">MY</span></p>
            <p><span ref={text3Ref}  className="text3">PORTFOLIO</span></p>
        </div>
    )
}