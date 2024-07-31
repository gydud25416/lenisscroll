import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
 
import { Navigation } from 'swiper/modules'; 
import Title from "./Title";

export default function About(){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return(
        <>
        
        <div className="wrap_about">
        <Title title={'About'} />
            <section className="contents">
            <div className='swiper_about'>
                    <Swiper spaceBetween={0} loop={true}  modules={[Navigation]}  navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                        // 초기화 전에 네비게이션 버튼을 swiper에 할당합니다.
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        }} speed={700} className="mySwiper">
                        <SwiperSlide><img src="/about1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/about2.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/about3.jpg" alt="" /></SwiperSlide> 
                        
                    </Swiper>
                    <div className="swiper-navigation">
                            <button className='swiper_prev' ref={prevRef}>&lt;&lt;~</button>
                            <button className='swiper_next' ref={nextRef}>~&gt;&gt;</button>
                    </div>
                    
                </div>
                <div className="text_box">
                    <h1>ABOUT ME</h1>
                    <div>
                        <ul className="about">
                            <li>Jang Hyo Young</li>
                            <li>1997. 10. 17</li>
                            <li>Seoul Korea</li>
                            <li>Frontend Developer</li>
                            <li>Watch Movie, Travel ..</li>
                        </ul>
                        <ul className="me">
                            <li>React.js</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>HTML</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <img src="/about_logo.png" alt="" />
                </div>
            </section>
            <p>퍼블리셔로서 협업을 하면서 백엔드 개발 업무의 난이도가 상당히 높다는 것을 느꼈습니다.<br/>
어떻게 하면 <span>제 역할에 서 더 많은 처리를 할 수 있을지 고민</span>하다가, <br/>
서버에서 가져온 데이터를 화면에 보기 좋게 구현하는 <span>프론트엔드 개발에 관심</span>을 갖기 시작했습니다.<br/>
React를 공부하면서 <span>라이브러리를 이용한 다양한 구축</span>과 <span>컴포넌트를 활용 한 손쉬운 재사용성에 큰 흥미</span>를 느꼈습니다.<br/>
앞으로는 <span>프론트엔드 개발팀의 일원</span>으로서 다양한 경험을 쌓고 싶습니다.</p>
        </div>
        </>
    )
}