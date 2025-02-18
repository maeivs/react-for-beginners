// https://v5.reactrouter.com/web/guides/quick-start
import {
  // HashRouter as Router, 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;


// 영화....초기
// import { useState, useEffect } from "react";
// import Movie from "./components/Movie";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState(true);
//   const getMovies = async() => {
//     const json = await ( 
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   }
//   useEffect(() => {
//     getMovies();
//   },[])

//   // useEffect(() => {
//     // fetch(
//     // `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
//     // .then((response) => response.json())
//     // .then((json) => {
//     //   setMovies(json.data.movies);
//     //   setLoading(false);
//     // });
//   // },[])

//   console.log(movies);

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//       <div>
//         {movies.map((movie) => 
//           <Movie 
//             key={movie.id}
//             medium_cover_image={movie.medium_cover_image}
//             title={movie.title}
//             summary={movie.summary}
//             genres={movie.genres}
//           />

//           // (
//           // <div key ={movie.id}>
//           //   <img src={movie.medium_cover_image}/>
//           //   <h2>{movie.title}</h2>
//           //   <p>{movie.summary}</p>
//           //   <ul>
//           //     {movie.genres.map((g) => (<li key={g}>{g}</li>))}
//           //   </ul>
//           // </div>))}
//           //)
//         )}
//       </div>)}
//     </div>
//   );
// }
// export default App;


// 코인
// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [money,setMoney] = useState("");
//   const [selectedCoin, setSelectedCoin] = useState(null);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, []);

//   const handleMoneyChange = (event) => {
//     setMoney(event.target.value);
//   };

//   const handleCoinChange = (event) => {
//     const coin = coins.find((c) => c.id === event.target.value);
//     setSelectedCoin(coin);
//   };

//   return (
//     <div>
//       <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
//       <div>
//         <input
//           value={money}
//           onChange={handleMoneyChange}
//           type="number"
//           placeholder="Enter your money (USD)"
//         />USD
//       </div>
//       <div>
//         <select onChange={handleCoinChange}>
//           <option value="">Select a coin</option>
//           {coins.map((coin) => (
//             <option key={coin.id} value={coin.id}>
//               {coin.name} ({coin.symbol})
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedCoin && money && (
//         <p>
//           You can buy {money / selectedCoin.quotes.USD.price} {selectedCoin.symbol}
//         </p>
//       )}
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <ul>
//           {coins.map((coin) => (
//             <li key={coin.id}>
//               {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default App;

// ToDo 리스트
// import { useState, useEffect } from "react";

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(toDo === "") {
//       return;
//     }
//     setToDos(currentArray => [...currentArray, toDo]);
//     setToDo("");
//   }
//   // console.log(toDos);
//   // console.log(toDos.map((item, index) => (
//   //   <li key={index}>{item}</li>
//   //   )));
//   return(
//   <div>
//     <h1>My To Dos({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//       <input 
//         onChange ={onChange} 
//         value={toDo} 
//         type="text" 
//         placeholder="Write your to do..." 
//       />
//       <button>Add To Do</button>
//     </form>
//     <hr />
//     {toDos.map((item, index) => (
//       <li key={index}>{item}</li>
//       ))}
//   </div>
//   );

// }

// export default App;

// 버튼클릭들
// import Button from "./Button";
// import styled from "./App.module.css"
// import { useState, useEffect } from "react";

// function Hello() {
//   function destroyedFn() {
//     console.log("bye");
//   }
//   function effectFn() {
//     console.log("created");
//     return destroyedFn;
//   }
//   useEffect(()=> {
//     console.log("hi");
//     return () => console.log("bye");
//   },[]);
//   // useEffect(function(){
//   // console.log("hi");
//   //  return   function (){
//   //    console.log("bye");
//   //  }
//   // },[]);
//   // useEffect(effectFn,[]);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword,setKeyword] = useState("");
//   const onClick = () => setCounter((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("i run all the time");
//   const iRunOnlyOnce = () => {
//     console.log("i run only once");
//   }
//   const [showing,setShowing] = useState(false);
//   const onClick2 = () => setShowing((prev) => !prev);
//   useEffect(iRunOnlyOnce, []);
//   useEffect(() => {
//     if(keyword !== "" && keyword.length > 5){
//       console.log("SEARCH FOR", keyword);
//     };
//   }, [keyword]);

//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
//       <h1 className={styled.title}>Punch back!</h1>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>응애</button>
//       <div>
//         {showing ? <Hello /> : null}
//         <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
//       </div>
//       {/* <Button text={"응애"} onClick={onClick}/> */}
//     </div>
//   );
// }

// export default App;
