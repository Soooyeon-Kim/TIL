import ReactDOM from 'react-dom';

const phoneNumber = '000-감자감자-감자감자';
const price = 30000;
const intro = '대한민국 1등 친환경 인증 무농약 감자 판매합니다';
const ask = '문의주세요 ';
const deli = '택배 배송 가능';
const item = ask + deli;
const imgUrl = 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'


function handleClick() {
  alert('주문해주셔서 감사합니다 ^^')
}

ReactDOM.render(
  <div>
  <h1 id='title'>감자 농원</h1>
  <p>{intro}</p>
  <img src={imgUrl} alt='감자 사진' />
  <p>가격: 한 박스에 {price}</p>
  <button onClick={handleClick}>주문하기</button>
  <p>연락처: {phoneNumber}</p>
  <p> {item} </p>

  </div>
  , document.getElementById('root'));