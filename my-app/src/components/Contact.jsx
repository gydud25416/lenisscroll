import React from "react";
import Title from "./Title";

export default function Contact(){

    return(
        <div id="contact" className="wrap_contact">
            <Title title={'Contact'} />
            <div className="contact_flex">
                <div className="info">
                    <p><span>나의 발전이 곧 회사의 발전</span>이라는 생각으로<br/>
                    계속해서 <span>새로운 도전</span>을 이어갈 것입니다. </p>
                    <ul className="contactMe">
                        <li>CONTACT ME</li>
                        <li><img src="/phone.png" alt="전화번호" /> 010-6683-2541</li>
                        <li><img src="/email.png" alt="이메일" /> <a href="mailto:gydud25416@gmail.com">gydud25416@gmail.com</a></li>
                        <li><img src="/insta.png" alt="인스타그램" /> <a href="https://www.instagram.com/hyo_yom2/" target="_blank" title="새창열림">@hyo_yom2</a></li>
                    </ul>
                    <ul>
                        <li>My Website</li>
                        <li><img src="/github.png" alt="깃허브" /> <a href="https://github.com/gydud25416" target="_blank" title="새창열림">https://github.com/gydud25416</a></li>
                        <li><img src="/tistory.png" alt="티스토리" /><a href="https://hyjang.tistory.com/" target="_blank" title="새창열림"> https://hyjang.tistory.com/</a></li>
                        <li><img src="/notion.png" alt="노션" /> <a href="https://hyjanghy.notion.site/wiki-15bd847e0f284de89ad4ab04c5ee6438?pvs=74" target="_blank" title="새창열림">https://hyjanghy.notion.site/</a></li>
                    </ul>
                </div>
                <div className="hy_img">
                    <img src="/contact_hy.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}