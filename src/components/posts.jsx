import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import '../styles/posts.css'
import { getUserByEmail } from '../utils';
import { Post } from './post'


export const Posts = () => {
    const [posts, setPosts] = useState([])
    const {user, setUser} = useContext(UserContext);
    const [userId, setUserId] = useState(null)
    
    // useGetUserByEmail(user);//null or userId
    console.log('userid = ', userId)
    useEffect(() => {
        const id = getUserByEmail(user);
        console.log('id ', id);
        setUserId(id);
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            if (userId)
                setPosts(data.filter(u => u.userId === userId));
        })()
    }, [setPosts, userId, setUserId, user])
    return (
        <div className="posts">
            <div className="title">Posts</div>
            <div className="all-posts">
                {
                    posts.map((p, i) => (
                        <Post key={i} title={p.title} body={p.body}/>
                    ))
                }
            </div>
        </div>
    )
}