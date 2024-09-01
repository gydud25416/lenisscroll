import React from "react";
import Title from "./Title"; 

const project=[
    {
        id:1,
        img:"./work2.jpg",
        title:"다크모드 노트 앱📒",
        github:"https://github.com/gydud25416/noteapp",
        view:"https://noteapp-hyjang.web.app/",
        text: `스마트기기 사용이 많아진 요즘,<br/>다크모드의 유무는 디테일이라고 생각합니다.🤓<br/>이에 다크모드 구현과 REST-API 호출을 익히기 위해 styled-components와 axios 라이브러리를 사용했습니다.<br/>노트는 추가, 수정, 삭제가 가능합니다. 다크모드는 Localstorage에 저장되어 새로고침하거나 다시 접속했을 때 모드가 유지되도록 하여 사용자 경험을 향상시켰습니다.<br/>데이터는 가상의 JSON-SERVER에 저장되며, 접속시 1분 이내의 로딩이 필요합니다.`
    },
    {
        id:2,
        img:"./work1.jpg",
        title:"가계부 앱💸",
        github:"https://github.com/gydud25416/Study_ReactJS/tree/master/acount_book",
        view:"https://accountbook-hy.web.app/",
        text:`총 자산을 알 수 있는 저만의 가계부 앱을 제작하였습니다.☺️<br/>REST-API 호출 구현을 위해 Fetch 메서드를  사용했습니다.<br/>내역을 한눈에 볼 수 있도록 수입·지출 그래프와 총 자산이 실시간으로  변동함으로써 사용자 경험을 향상시켰습니다.<br/>입출금 내역은 년도별, 실시간 검색, 입·출금 카테고리로 다양하게 필터링 할 수 있어 원하는 정보를 얻을 수 있게 하였습니다.<br/>데이터는 가상의 JSON-SERVER에 저장되며, 접속시 1분 이내의 로딩이 필요합니다.`
    },
    {
        id:3,
        img:"./work3.jpg",
        title:"영화 예매 페이지 🍿",
        github:"https://github.com/gydud25416/Movie",
        view:"http://gydud25416.woobi.co.kr/movie/index.html",
        text:`영화와 좌석을 선택할 수 있는 영화 예매 페이지를 구현했습니다.🎬<br/>jQuery를 주로 사용하다가 Javascript에 관심이 생기면서 제작하기 시작했습니다.<br/>  선택한 영화, 연령, 인원수에 따라 총 결제 금액을 계산하여 하단 박스에서 한눈에 확인할 수 있습니다. 좌석은 map 메서드와 forEach 메서드를 사용하여 나열하고, 그 중 선택한 정보는 Localstorage에 저장하여 새로고침 하거나 다시 접속해도 확인할 수 있도록 했습니다.`
    }
]

export default function Work(){

    return(
        <>
        
        <div className="wrap_work">
        <Title title={'Work'} />
        {project.map((item, idx)=>(
            <section key={idx}>
                <div className="img_section">
                    <p>0{item.id}</p>
                    <img src={item.img} alt="" />
                </div>
                
                    <div className="text_section" key={item.id}>
                    <h1>{item.title}</h1>
                    <ul>
                        <li><a target="_blank" title="새창열림" href={item.github}>GitHub</a></li>
                        <li><a target="_blank" title="새창열림"  href={item.view}>View</a></li>
                    </ul>
                    <p>{item.text?.split("<br/>").map((it, idx)=>(
                        <span key={idx}>
                            {it}
                            <br/>
                        </span>
                    ))}</p>
                </div>
           
                
                
            </section>
        ))}
             
        </div>
        </>
    )
}