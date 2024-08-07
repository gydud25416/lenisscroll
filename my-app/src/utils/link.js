import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const OnScroll = (position) => {
    gsap.to(window, {
        scrollTo: {
            y: position,
            autoKill: false, // 다른 스크롤 이벤트 중복 방지
        },
        duration: 0.5, // 애니메이션 지속 시간 
    });
};
const link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if(targetId === "#about"){ 
                OnScroll(3200);
            }
            if(targetId === "#work"){ 
                OnScroll(4840);
            }
            if(window.innerWidth > 1550){ 
                console.log(window.innerWidth)
                if(targetId === "#skill"){ 
                    OnScroll(8640);
                }
                if(targetId === "#contact"){ 
                    OnScroll(9540);
                }
            }else{  
                if(targetId === "#skill"){ 
                    OnScroll(7890);
                }
                if(targetId === "#contact"){ 
                    OnScroll(9040);
                }
            }
            
        });
    });
};

export default link;