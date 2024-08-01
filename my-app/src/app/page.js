"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header"; 
import Intro from "@/components/Intro";
import Skill from "@/components/Skill"; 
import Work from "@/components/Work";
import Contact from "@/components/Contact"; 
import lenis from "@/utils/lenis";
import link from "@/utils/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";  
import About from "@/components/About";
import Welcome from "@/components/Welcome";

export default function Home() { 
  const [introWidth, setIntroWidth] = useState(0); 
    useEffect(()=>{
      if(introWidth){
        setIntroWidth(introWidth); 
      }
    },[introWidth])

    function IntroWidth(e){
      if(e){
      setIntroWidth(e); 
      }
    }
  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger시 필수
  const sectionRef = useRef(null); // useRef로 참조할 요소
  const triggerRef = useRef(null);
  const welcomeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const secondRef = useRef(null);
 
    useEffect(() => {
        lenis();
        link();
    }, []); 
    const headerRef = useRef(null); 
   
    useEffect(() => {
      if(introWidth > 0){
      const pin4 = gsap.fromTo(headerRef.current,
        { left: '-70px' },
        {
          left: '0px',
          duration: 2,
          scrollTrigger: {
            trigger: welcomeRef.current,
            start: introWidth  + 'px', // 애니메이션 시작 위치
            end: '+=200', // 애니메이션 종료 위치
            scrub: true // 스크롤과 함께 애니메이션 동기화
          }
        }
      );
      return ()=>{
        pin4.kill();
      }
    }
    }, [introWidth]);
 
     // horizontal 스크롤 애니메이션
    useEffect(()=>{
      const pin = gsap.fromTo( // from, to, fromTo가 있다.
        sectionRef.current, // Gsap 애니메이션이 시작되는 요소 위치
        { translateX: 0 }, // from 부분(초기 시작)
        {
          translateX: -4840, // to 부분, 최종 상태
          ease: "none", // 쓸데없는 애니메이션 없애는 부분
          scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
            trigger: triggerRef.current, // 스크롤이 발생되는 요소 위치
            start: "top top", // "요소위치 시작위치"
            end: "+=4840", // "요소위치 끝위치"
            scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
            pin: "#port", // 가로스크롤시 페이지를 고정할 수 있는 기능
          },
        } 
      );

      const pin2 = gsap.fromTo(contactRef.current,
        {position:"fixed", left:"100%", top:0 },
        {
          translateX: -contactRef.current.offsetWidth, // to 부분, 최종 상태
        ease: "none", // 쓸데없는 애니메이션 없애는 부분
        scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
          trigger: workRef.current, // 스크롤이 발생되는 요소 위치
          start: "bottom bottom", // "요소위치 시작위치"
          end: ()=> `bottom+=${contactRef.current.offsetWidth}px bottom`, // "요소위치 끝위치"
          scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
          pin: workRef.current, // 가로스크롤시 페이지를 고정할 수 있는 기능
          markers:false
        } 
        }
      )
 
      return () => {
        pin.kill(); // 모든 애니메이션 중단
        pin2.kill(); // 모든 애니메이션 중단
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    },[]);
    

  return (
    <>
    <header id="header" role="banner"   ref={headerRef} >
      <Header />
    </header>
    <div id="port" ref={triggerRef}  >
        <section ref={sectionRef} >
          <div className="scroll_wrap" > 
              <Intro IntroWidth={IntroWidth} />  
              <main id="main" role="main"  > 
              <div className="wrap_welcome"   ref={welcomeRef}  > 
                    <Welcome/>
              </div> 
                  <About/>
                  
                  <Work />
                  
              </main> 
            </div>
          </section>
          
      </div>
          <section  className="second_scroll" ref={secondRef} >
            <div ref={workRef}>
              <Work />
            </div>
            <div className="contact_box" ref={contactRef}>
              <Skill /> 
              <Contact />
            </div>
            
          </section>
          
      </>
  );

} 
