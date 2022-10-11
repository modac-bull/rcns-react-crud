
/** @jsxImportSource @emotion/react */  
// 작성방법 1. 인라인 CSS 작성방법
import {useState} from 'react';

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {Link} from 'react-router-dom'


import HeaderContainer from './../components/HeaderContainer';
import FooterContainer from './../components/FooterContainer';



// 보통 Component 안에 Component를 생성하진 않는다.
function Modal(props) {
  return(
    <ModalContainer className="modal">
      <h4>{props.title[props.state]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </ModalContainer>
  )
}

export default function Main() {

  let [title, setTitle] = useState(['남자 코트 추천','가가가가제목2222', '나나나나제목3333']);
  let [likes, setLikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false); // 모달 UI의 상태 정보.
  let [state, setState] = useState(0);


  // 두번째 실습용 데이터
  let [data, setData] = useState(['가나다라1111', '나다라마2222', '다라마바33333'])
  let [input, setInput] = useState(''); // 입력값, 기본값을 무엇을 넣어야할지 모를 경우엔 ''
  return(
    <>
      <HeaderContainer />
      <AreaWrap>
        <h1 css={css`
          font-size: 50px;
          &:hover {
            color: skyblue;
          }
        `}>
        <div css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}>
          메인 화면 테스트 
        </div>
        </h1>
        <Button>버튼</Button>
        <Link to="/notice" className="p-4 border-solid border">게시판 바로가기</Link>
        <ContentWrap>
          {/* 실습 해보는 곳 */}
          <h1 className="text-xl text-gray-900 text-center">실습해보는 곳</h1>
          <ul>
            {
              title.map((txt, idx) => {
                return (
                  <li key={idx}>
                    <h1 
                      onClick={() => {
                        setModal(true);
                        setState(idx)
                      }}
                      className="font-bold text-3xl mt-10 mb-10 inline-block">
                      {title[idx]}
                    </h1>
                    <span className="ml-5 inline-block p-5 border-solid border border-blue-700" onClick={() => { 
                      let copy = [...likes];
                      copy[idx] ++;
                      setLikes( copy )
                      }}>
                      {likes[idx]
                      }</span>
                  </li>
                )
              })
            }
          </ul>
          {/* 모달 창 이곳에 */}
          {
            modal ? <Modal title={title} state={state}></Modal> : null
          }
          <div className="text-center">
            <button 
              className="px-5 py-2 mx-2 border-solid border border-sky-500 rounded-sm"
              onClick={() => {
                // 정렬 순서 바꿔보기 (가, 나, 다 순서로?)
                let copy = [...title];
                setTitle(copy.sort());
              }}>
              정렬하기
            </button>
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              onClick={() => {
                let copy = [...title];
                copy[0] = '여자코트 추천';
                console.log(copy);
                setTitle(copy);
              }}>수정하기
            </button>
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              >좋아요
            </button>
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              onClick={() => { 
                setLikes( [0, 0, 0]); 
                console.log(title)
                //setTitle([...title]); // 이런다고 초기값이 불러와지지 않는다.
                } }>초기화
            </button>
          </div>
        </ContentWrap>
        <ContentWrap>
          <h1 className="my-10 text-2xl text-center font-bold">두번째 실습</h1>
          <ul>
          {
            data.map((item, idx) => {
              return (
                <li key={idx} className="flex items-center justify-between px-5 py-5 border-solid border">
                  <h2>{item}
                    <span>👍 0</span>
                  </h2>
                  <button className="border-solid p-2" 
                  onClick={(e) => {
                    // 기존 데이터에도 삭제되어야 하니까 copy 만들지 않고 data 자체를 splice 해야지 않나 생각했으나
                    // data 자체를 처리할 경우에 setData 할 경우 제대로 업데이트 되지 않는 이슈가 있음
                    // data.splice(idx,1)
                    // console.log(data)
                    // setData(data); 

                    
                    let copy = [...data];
                    copy.splice(idx, 1);
                    setData(copy);

                  }}>삭제</button>
                </li>
              )
            })
          }
          </ul>
          <input className="border-solid border border-gray-900 mr-10"
                 onChange={(e)=>{
                   setInput(e.target.value); // 입력값 변경
                 }}
          />
          <button onClick={() => {
                    let copy = [...data];
                    copy.push(input);
                    setData(copy)
                  }}    
                  className="p-2 border-solid border border-gray-400">글발행</button>

        </ContentWrap>
      </AreaWrap>
      <FooterContainer />
    </>
  )
}


const Button = styled.button`
  padding: 20px 10px;
`

// area 공통 컴포넌트로 묶는 방식에 대해 고민 필요. 
const AreaWrap = styled.div`
  padding: 0 60px;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 200vh;
  padding-top: 120px;
`


const ContentWrap = styled.div`
  padding-top: 120px;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  border: 1px solid red;
`




const ModalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #eee;
  text-align: left;
`