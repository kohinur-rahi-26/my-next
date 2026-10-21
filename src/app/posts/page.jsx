import React from 'react';
import Post from '../componets/Post';

const PostPage = async() => {
    
    const rec = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await rec.json()



    return (
        <div>
            <h2>POST PAGE : {posts.length}</h2>
            <div className='grid grid-cols-4 '> 
                {posts.map(post =>  <Post key= {post.id} post={post}></Post>)} 
            </div>
        </div>
    );
};

export default PostPage;