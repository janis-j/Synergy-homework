import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
    const [posts, setposts] = useState();
    const getDocuments = () => {
            useEffect(()=>{
            axios.get("forms")
            .then(res=>{
                console.log(res.data);
                setposts(res.data);
            })
        },[])
    };
    getDocuments();
    return (
        !posts ? ("No data found"):(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Dokumenta nosaukums</th>
                        <th scope="col">Ievietošanas datums</th>
                        <th scope="col">Dokumenta lielums</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    posts.map((post, index)=>(
                        <tr>
                            <th key={index}>{index}</th>
                            <td>{post.document_name}</td>
                            <td>{post.created_at}</td>
                            <td>{post.configurations.length}</td>
                        </tr>
                    ))
                    }
                </tbody>
                </table>
        </div>
        )
    );
}

export default List;

