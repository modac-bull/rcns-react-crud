import {useState} from 'react';

import styled from '@emotion/styled'

import HeaderContainer from "../../../components/HeaderContainer";
import FooterContainer from '../../../components/FooterContainer';

export default function NoticeDetails() {
  let [title, setTitle] = useState(['남자 코트 추천','제목2222', '제목3333']);
  let [likes, setLikes] = useState(0)


  return(
    <>
      <HeaderContainer />
        <ContentWrap>
          <h1 className="font-bold text-3xl text-center mt-10 mb-10">
          {title[0]}
          <span className="ml-5">{likes}</span>
          </h1>
          {/* 게시판 목록 페이지 */}
          <p className="text-sm text-gray-900">게시판 상세</p>
          <div className="text-center">
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              onClick={() => {
                // console.log(title[0]); 
                // setTitle(title = ['여자코트 추천하기', '제목2222', '제목3333'])
                let copy = [...title];
                copy[0] = '여자코트 추천';
                console.log(copy);
                setTitle(copy);
              }}>수정하기
            </button>
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              onClick={() => { setLikes( likes + 1 )} }>좋아요
            </button>
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-sky-500 rounded-sm"
              onClick={() => { 
                setLikes( 0 ); 
                console.log(title)
                setTitle([...title]); // 이런다고 초기값이 불러와지지 않는다.
                } }>초기화
            </button>
          </div>
        </ContentWrap>
      <FooterContainer />
    </>
  )
}

const ContentWrap = styled.div`
  padding-top: 120px;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  border: 1px solid red;
`