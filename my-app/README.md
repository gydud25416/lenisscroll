## 프로젝트 소개
가로 세로로 다양하게 스크롤 할 수 있는 프로젝트입니다.
GSAP과 Scrolltrigger를 사용하여 다양한 이벤트를 구현했습니다. 

## 프로젝트 실행
- next를 설치합니다. `npx create-next-app@latest` 
- gsap를 설치합니다. `npm install gsap`
- lenis를 설치합니다. `npm install @studio-freight/lenis` 
 

 ## 프로젝트 배포
 - 프로젝트를 빌드합니다. `npm run build`
 - 프로젝트를 테스트합니다. `npm start`
 - vercel을 설치합니다. `npm i -g vercel`
 - vercel 실행 `vercel` or 홈페이지에서 import

 ## 프로젝트 작업
  - git push를 하면 저절로 build 및 배포되어 CI/CD 자동화 

## 주의할 점
- 배포 전 꼭 local 환경에서 build, start 까지 테스트 후 배포하기 
- build 전엔 .next 폴더를 삭제해 캐시 초기화하기 

