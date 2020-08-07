import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ image, id, title, author, date}) => {

    return (
        <div className='card'>
            <div className='card-image' style={{ width: '100%', height: '200px', backgroundImage: `url('${image}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}></div>
            <div className='card-info'>
                <div className='card-title'>
                    <Link to={`/${id}`}>
                        <p className="purple">{title}</p>
                    </Link>
                </div>
                <div className='card-author-section'>
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
