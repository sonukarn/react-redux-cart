import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import HeaderContainer from './Containers/HeaderContainer';



function App() {
  // const [flag,setFlag] = useState(true);
    return (
      <div className="App">
        
       {/* <div>
        <button onClick={()=> setFlag(!flag)}>Toggle class component</button>
       </div> 
       {flag ? <CComponent/> : ""} */}
       <HeaderContainer/>
        <HomeContainer/>
      </div>
    );
  }
  
  export default App;
  























// useState practice 
// function App() {
//   const [name, setName] = useState("Prince");
//   const [flag, setFlag] = useState(false);
//   const [steps, setSteps] = useState(()=>{
//     console.log("clicked");
//     return 0;
//   });
//   const [names, setNames] = useState([]);

//   const changeName = () => {
//     // setName("Sonu karn");
//     return setFlag(!flag);
//   }
//   const increment = () => {
//     setSteps((prevstate) => prevstate + 1);
//     setSteps((prevstate) => prevstate + 1);
//   }
//   const decrement = () => {
//     setSteps(steps - 1);
//   }
//   function addNames(e) {
//     e.preventDefault();
//     setNames([...names, { id: names.length, name }]);
//     setName("");
//       // setNames(names.push({id:names.length,name}))
//     // setNames({name:name})
//   }
//   return (
//     <div className="App">
//       <div><h1>Hello, {flag ? name : ""}</h1></div>
//       <button onClick={changeName}>Change Name</button>
//       <hr />

//       <button onClick={increment}>+</button>
//       <div>{steps}</div>
//       <button onClick={decrement}>-</button>

//       <hr />
//       <form onSubmit={addNames}>
//         <input type="text" value={name} placeholder="Add name" onChange={(e) => setName(e.target.value)} />
      
//       <button>Submit</button>
//       <hr />
//       <ul>
//         {names.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       </form>
//     </div>
//   );
// }

// export default App;
