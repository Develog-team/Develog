# Develog

## 프로젝트 주요 환경
- react
- typescript
- antd 5.9.0
- recoil , react-query


## 구동 방법
- yarn install 후 yarn start


## 폴더 구조

- assets : 이미지, 아이콘 등 스태틱 파일
- components : 데이터와 연관 없는 UI 관련 컴포넌트
- containers : API 서버와 통신하며 데이터를 다루는 컴포넌트
- pages : React Route 페이지
- routes : React Route 파일
- utils : 비즈니스 로직과 독립적인 기능
- modules : api 관련 폴더 (각 module 단위로 디렉터리 생성 후 apis, models, recoils 폴더 포함)