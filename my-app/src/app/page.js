"use client"
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header"; 
import Intro from "@/components/Intro";
import Skill from "@/components/Skill"; 
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip"; 
import lenis from "@/utils/lenis";
import link from "@/utils/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

export default function Home() { 
  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger시 필수
  const sectionRef = useRef(null); // useRef로 참조할 요소
  const triggerRef = useRef(null);

  // horizontal 스크롤 애니메이션
  useEffect(() => {
    const pin = gsap.fromTo( // from, to, fromTo가 있다.
      sectionRef.current, // Gsap 애니메이션이 시작되는 요소 위치
      { translateX: 0 }, // from 부분(초기 시작)
      {
        translateX: -4000, // to 부분
        ease: "none", // 쓸데없는 애니메이션 없애는 부분
        scrollTrigger: { // 스크롤 애니메이션 발생하는 부분
          trigger: triggerRef.current, // 스크롤이 발생되는 요소 위치
          start: "top top", // "요소위치 시작위치"
          end: "+=4000", // "요소위치 끝위치"
          scrub: 0.7, // 되감기 기능, 또한 스크롤을 부드러운 애니메이션 추가.
          pin: "#port", // 가로스크롤시 페이지를 고정할 수 있는 기능
        },
      }
    );
    return () => {
      pin.kill(); // 모든 애니메이션 중단
    };
  }, []);
    useEffect(() => {
        lenis();
        link();
    }, []); 

  return (
      <div id="port" ref={triggerRef}>
          {/* <Skip /> */}
          <section ref={sectionRef}>
            <header id="header" role="banner" >
                <Header />
              </header>
            <div className="scroll_wrap" > 
              <Intro />
              
              <main id="main" role="main" > 
                  <Skill /> 
                  <Work />
                  <Contact />
              </main> 
            </div>
          </section>
      </div>
  );
} 
