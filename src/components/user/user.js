import React from 'react'
import useFetch from '../../effects/use-fetch.effect'
import Card from '../card/card';

const User=(id)=>{
    const user=useFetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);

    return(
        <Card>
            {user?(
                <div>
   <h2>{user.username}</h2>
   <h2>{user.name}</h2>
    </div>

            ):
            ( <p>User not found</p>)
            
            
            }
        </Card>
    )
}
export default User;

