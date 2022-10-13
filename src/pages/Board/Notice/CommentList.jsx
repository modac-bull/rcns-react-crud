import styled from '@emotion/styled'


export default function CommentList(props) {
  return( 
    <CommentListWrap>
      <h4>
        {(
          props.comment.content && 
          <div dangerouslySetInnerHTML={{__html: props.comment.content}}>
          </div>
        )}
      </h4>
      {
        console.log(props.comment)

      }
      {/* <CommentList data={props.comment.comments} /> */}
      {
        props.comment.comments.length ? 
        props.comment.comments.map((v, i) => {
          {/* 재귀 컴포넌트 렌더링  */ }
          return <CommentList className="111" key={v.id} comment={v} />
        }) :
        null
      }
    </CommentListWrap>
  )
}

const CommentListWrap = styled.li`
  padding: 10px 20px 10px 30px;
  border: 1px solid black;
  margin-bottom: 4px;
`