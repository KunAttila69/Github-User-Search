import axios from "axios";
import { useState } from "react";
import User from "./User";

function App() {
  const [data, setData] = useState([])
  const [user, setUser] = useState()

  const fetchData = async () =>{
    await axios.get(`https://api.github.com/search/users?q=${user}`)
      .then(res=>{
        console.log(res.data.items)
        setData(res.data.items)
      })
  }
  
  return (
    <div className="App">
      <div className="search-container">
        <h1>Github User Search</h1>
        <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={()=>fetchData()}>Search</button>
      </div>
      <div className="users-container">
        { data && 
          data.map((user)=>{
            return(<User key={user.id} name={user.login} avatar={user.avatar_url} link={user.html_url}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;