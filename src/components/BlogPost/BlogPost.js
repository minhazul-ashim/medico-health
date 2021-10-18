import React from 'react';
import { useParams } from 'react-router';
import useFindData from '../../utilities/useFindData';
import './BlogPost.css'

const BlogPost = () => {

    const { title } = useParams();

    const post = useFindData(title);

    return (
        <div className='blogPost'>
            <h4>{title}</h4>
            <p className='my-4'>{post?.detail}</p>
            <blockquote> Courtesy and Author: {post?.author}</blockquote>
        </div>
    );
};

export default BlogPost;