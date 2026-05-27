//import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  // 2 method loader method

  const data = useLoaderData();

    // 1 method
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SarthakAhir')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    
    <img src={data.avatar_url} alt="Git picture" />
    </div>

  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/SarthakAhir')
  return res.json();
}