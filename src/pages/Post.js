import React, { useEffect, useContext } from 'react'
import BlogContext from '../context/BlogContext';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner'

const Post = () => {
    const blogContext = useContext(BlogContext);
    const {
        getPostById,
        currentBlogPost
    } = blogContext;

    let { postId } = useParams();

    useEffect(() => {
        getPostById(postId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //console.log(postId)
    return (
        <div className='post'>
            {currentBlogPost ? (
                <>
                    <div className='post-image overlay' style={{ backgroundImage: `url('${currentBlogPost.image}')` }}></div>
                    <div className='post-content'>
                        <h2 className="title">{currentBlogPost.title}</h2>
                        <p className="text">{currentBlogPost.content}</p>
                    </div>
                </>
            ) : (
                    <Spinner />
                )}
        </div>
    )
}

export default Post;
