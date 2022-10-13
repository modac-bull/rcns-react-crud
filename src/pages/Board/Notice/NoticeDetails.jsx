import {useState, useEffect} from 'react';

import styled from '@emotion/styled'

import { useNavigate , useParams} from 'react-router-dom'

import HeaderContainer from "components/HeaderContainer";
import FooterContainer from 'components/FooterContainer';
import CommentList from './CommentList';

import { timeToDate } from 'utils'

export default function NoticeDetails(props) {
  let {id} = useParams();
  const [content, setContent] = useState([]);
  const [comment, setComment] = useState([]);

  console.log(id)
  let navigate = useNavigate();

  useEffect(() => {
    console.log('NoticeDetails mount 시 1회');
    console.log(props)
    fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then(result => result.json())
    .then(data => { 
      // console.log(data)
      setContent(data);
      let copy = [...data.comments]
      setComment(copy);
      // console.log(copy)
    })
  }, [])

  return(
    <>
      <HeaderContainer />
        <ContentWrap>
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-10">
              {content.title}
              <span className="text-sm ml-5">total comments : ({content.comments_count})</span>
            </h1>
            <p>작성자 : {content.user}</p>
            <p>작성날짜 : {timeToDate(content.time)}</p>
          </div>
          {/* 게시판 목록 페이지 */}
          {
            content.content !== '' ? 
            <p className="text-sm text-gray-900 min-h-screen border-solid border">
              {content.content}
            </p>
            :
            null
          }
          <CommentWrap>
            {
              comment.map((v, i) => {
                return <CommentList key={v.id} comment={v} />
              })
            }
          </CommentWrap>
          <div className="text-center py-16">
            <button 
              className="px-5 py-2 mx-2 border-solid border-1 border-gray-500 rounded-sm"
              onClick={() => { navigate('/notice') }}>
                목록으로
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
`

const CommentWrap = styled.ul`
  /* border: 1px solid red; */
`
