import React ,{useState, useEffect} from 'react'
import Card from '../card/card'

const UseEffectExample=()=>{
   const[user, setUser]=useState(null);
   const[query, setQuery]=useState('Nesto');



   useEffect(() => {
      if(query.length>0){

        const fetchFunc = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?username=${query}`
              );
          const resJson = await response.json();
          setUser(resJson[0])
        };
    
        fetchFunc();
      }
   
  }, [query]);



return (
    <Card>
    <input
      type='search'
      value={query}
      onChange={event => setQuery(event.target.value)}
    />
    {user ? (
      <div>
        <h3>{user.name}</h3>
        <h3> {user.username} </h3>
        <h3> {user.email} </h3>
      </div>
    ) : (
      <p>No user found</p>
    )}
  </Card>
)
}
export default UseEffectExample;