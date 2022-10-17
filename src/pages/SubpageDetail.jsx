import {useState, useEffect} from 'react';

import styled from '@emotion/styled';

import {Link, useParams} from 'react-router-dom';

import { useDispatch, useSelector} from 'react-redux'
import { addCart } from 'redux/cartSlice';


export default function SubpageDetail(props) {
  let {id} = useParams();
  let product = useSelector((state) => {return state.product});
  console.log(product)
  // Redux 활용
  let matchIndex = product.find(function(x) {
    return x.id == id;
  })
  let dispatch = useDispatch();

  // let matchIndex = props.product.find(function(x) {
  //   return x.id == id;
  // })
  let [box, setBox] = useState(true);


  // Lifecycle과 useEffect 실습
  useEffect(() => {
    console.log('안녕'); 
    /* 
    useEffect 바깥에 console.log 찍어도 Update, Mount 시 실행됨.
    언제 쓰는가?
     - html 렌더링 이후에 동작
     - 굉장이 오래걸리는 쓸데 없는 코드 일 경우에 일단 html 렌더 된 후에 동작되도록 할 수 있다.
     - 컴포넌트의 핵심 기능은 html 렌더링. 이 외 기능들은 useEffect에 적어라 (대충 이런뜻)
    */
   let a = setTimeout(() => { setBox(false) }, 2000);
   return () => { clearTimeout(a) }
  }, [])
  let [count, setCount] = useState(0);

  return(
    <div className="container px-10 mx-auto">
      <div className="flex-row">
        <div className="border-solid border mt-10">
          <img src={matchIndex.imgs} alt={matchIndex.title} width="100%" />
        </div>
        <div className="text-center">
          <h4 className="pt-5 font-bold text-3xl">{matchIndex.title}</h4>
          <p className="pt-5 font-light text-sm">{matchIndex.content}</p>
          <p className="pt-5 font-light text-sm">{matchIndex.price}</p>
          <Link to="/subpage" className="inline-block mt-5 p-5 border border-solid">목록으로</Link> 
          <CustomBtn 
            onClick={() => {
              console.log(matchIndex)
              dispatch(addCart({id: id, title : matchIndex.title, count: 1}))
            }}
            bg="orange">주문하기</CustomBtn> 
          <CustomBtn bg="orange"
            onClick = {() => {
              return setCount(count+1)
            }}
          >버튼</CustomBtn> 
        </div>
        {( 
          box ? 
            <Box></Box>
           :
           ''
        )}
      </div>
    </div>
  )
};

const CustomBtn = styled.button`
  padding: 1.25em;
  margin-top: 5px;
  border: 1px solid black;
  background-color: ${ props => props.bg}
`

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: yellow;
  margin: 50px auto;
  
`