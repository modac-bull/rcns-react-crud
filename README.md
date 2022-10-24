# 리액트 CRUD 게시판 실습 프로젝트
## 실습 내용
- 리액트 기본 강의 및 실습
  - 코딩애플 강의 실습 내용
  - 메인페이지, 블로그 글 발행 실습, 상품 목록/상세 페이지, 장바구니
- 게시판 CRUD 실습
  - HACKERS NEWS API 활용하여 게시판 (페이지네이션)
  - HACKERS NEWS API 활용하여 게시판 (무한 스크롤)
  - 민터스 공지사항 게시판


## 게시판 화면 설계
- 게시물 리스트 : localhost:3000/notice
  - 게시물 있을 때 / 없을 때 구분
- 게시물 상세 : localhost:3000/details/1
- 게시물 추가/수정 : localhost:3000/write/1
- 게시물 삭제

## 필요한 기능
1. 게시물 리스트
  - 일반글/공지글 구분
  - 작성일, 제목 노출
  - 페이지네이션
2. 게시물 상세
  - 작성일, 제목, 내용 노출
  - 목록으로 돌아가는 버튼

## 컴포넌트 설계 (민터스 게시판 예시)
1. 게시물 목록 - Board/Common/CommonList.jsx
2. 게시물 상세 - Board/Common/CommonDetails.jsx


## 개발환경설정

1. React 최신 버전 : 18
2. Node 버전 : v16.15.0 이상
3. **패키지관리모듈** : npm
4. **빌드&개발환경** : CRA (create-react-app)
5. **스타일링** : emotion CSS (styled-components로 사용)
6. **라우팅** : react-router-dom (v6) ([참고사이트](https://velog.io/@tjdgus0528/React-Router-v6-%EC%A0%95%EB%A6%AC))

## 사용해볼 기술

1. props
2. state
3. useState
4. useEffect
5. .map( )
6. .filter( )

## 폴더구조

src

ㄴassets

ㄴfont

ㄴimgs

ㄴcomponents

ㄴpages

ㄴshared

ㄴutils.js

## 참고

- 예시페이지 : [https://xd.adobe.com/view/0dbe1e53-c2eb-4939-af89-db6ea2fd9c46-58ed/screen/1c0f0503-e24b-46fa-9cae-ec24749e620e](https://xd.adobe.com/view/0dbe1e53-c2eb-4939-af89-db6ea2fd9c46-58ed/screen/1c0f0503-e24b-46fa-9cae-ec24749e620e) (민터스 사용자 게시판)