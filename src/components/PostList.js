import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/BlogContext';
import Spinner from './Spinner'
import PostCard from './PostCard'

const PostList = () => {
    const blogContext = useContext(BlogContext);
    const { getPosts, blogPosts, loading } = blogContext;

    useEffect(() => {
        getPosts();
    }, [])

    console.log(blogPosts);

    if (loading) {
        return <Spinner />;
      } else {
            return (
                <div className="posts">
                    <div className="container">
                        <h2 className="title">Posts</h2>
                        <div className="posts-grid-container">
                            {blogPosts.map((post, i) => {
                                return (
                                    <PostCard key={i} title={post.title} image={post.image} author={post.author} date ={post.date} id={post.id} />
                                )
                            })
                            }
                        </div>
                    </div>
                    
                </div>
            )
        } 
}

export default PostList
