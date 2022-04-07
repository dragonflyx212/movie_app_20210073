//여기서 여러개의 컴포넌트 만들기
/*
function Food(props) {
  console.log(props);
  return <h1>I like {props.fav}</h1>; //fav라는 프롭스 .는 속성 접근 연산자 / 객체명.속성명
}
*/
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
   </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.probiotics-help.com%2Fimages%2Fbowl-of-kimchi.jpg&f=1&nofb=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.listchallenges.com%2Ff%2Fitems%2F330e59ff-69bb-4a67-8a44-54c45cd94891.jpg&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhowtofeedaloon.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fbibimbap-feature-150x150.jpg&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhwangon.com%2Fmedia%2Findurstry_image%2F1616390193164image.png&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fen.azizen.com%2Fwp-content%2Fuploads%2F2012%2F03%2Fkimbap-150x150.jpg&f=1&nofb=1',
    rating: 5
  }
]; //const 상수 변수

function App() { //App 컴포넌트 정의 (function or class)
  return ( //여러개 리턴 시 소괄호
  <div>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App; //import 하려면 export 컴포넌트 이름과 동일하게