import React from 'react';
import { Link } from 'react-router-dom';
import './BlogTitle.css';
import { FaArrowRight } from 'react-icons/fa'

const BlogTitle = (props) => {

    const title = props.title;
    const author = props.author;

    const url = `/blogpost/${title}`

    return (
        <div className='blog-title'>
            <p>{title}</p>
            <blockquote><small> - {author}</small></blockquote>
            <Link to={url} className='read-link'><small className='text-danger'>Read More <FaArrowRight /></small></Link>
        </div>
    );
};

export default BlogTitle;