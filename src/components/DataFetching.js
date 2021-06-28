import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DataFetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ul>{posts.map(post => <li key={post.char_id}><h2>{post.name}</h2><img className="char_image" alt="" src={post.img}></img> </li>)}</ul>

            <style>{"\
                            .char_image{\
                                width: 7%;\
                                height: 7%;\
                                }\
                        "}</style>
        </div>




    )
}

export default DataFetching
