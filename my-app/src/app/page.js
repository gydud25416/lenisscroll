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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import About from "@/components/About";
import Welcome from "@/components/Welcome";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
  const firstWorkRef = useRef(null); // 첫 번째 Work 컴포넌트를 참조하는 ref
  const secondWorkRef = useRef(null); // 두 번째 Work 컴포넌트를 참조하는 ref
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
      const pin0 = gsap.fromTo(
        triggerRef.current,
        { display: "block" },
        {
          display: "none", // to 부분의 최종 상태를 "block"으로 설정
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=300",
            onLeave: () => gsap.set(triggerRef.current, { display: "none" }),
            onEnterBack: () => gsap.set(triggerRef.current, { display: "block" }),
            markers: false,
          },
        }
      );
 

      ScrollTrigger.matchMedia({
        "(min-width:1550px)":function(){
          gsap.fromTo(contactRef.current,
            {position:"fixed", left:"100%", top:0 },
            {
              translateX: -2700, // to 부분, 최종 상태
            ease: "none", // 쓸데없는 애니메이션 없애는 부분
            scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
              trigger: secondWorkRef.current, // 스크롤이 발생되는 요소 위치
              start: "bottom bottom", // "요소위치 시작위치"
              end: ()=> `+=2700`, // "요소위치 끝위치"
              scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
              pin: secondWorkRef.current, // 가로스크롤시 페이지를 고정할 수 있는 기능
              markers:false
            } 
            }
          )
        },
        "(max-width:1550px)":function(){
          gsap.fromTo(contactRef.current,
            {position:"fixed", left:"100%", top:0 },
            {
              translateX: -2500, // to 부분, 최종 상태
            ease: "none", // 쓸데없는 애니메이션 없애는 부분
            scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
              trigger: secondWorkRef.current, // 스크롤이 발생되는 요소 위치
              start: "bottom bottom", // "요소위치 시작위치"
              end: ()=> `+=2500`, // "요소위치 끝위치"
              scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
              pin: secondWorkRef.current, // 가로스크롤시 페이지를 고정할 수 있는 기능
              markers:false
            } 
            }
          )
        }
      })
      window.addEventListener("resize", ScrollTrigger.update);
      
     
      return () => {
        pin.kill(); // 모든 애니메이션 중단
        pin0.kill(); // 모든 애니메이션 중단 
         
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
                  <div  id="work" ref={firstWorkRef}>
                    <Work />
                  </div> 
              </main> 
            </div>
          </section> 
      </div>
          <section  className="second_scroll" ref={secondRef} >
            <div ref={secondWorkRef}>
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
