import React from 'react';
import './BlogNav.css'
import BlogTitle from './BlogTitle/BlogTitle';

const BlogNav = (props) => {

    const blogs = props.data;

    return (
        <div className='blog-titles'>
            {
                blogs.map(blog => {
                    return <BlogTitle key={blog.title} title={blog.title} author={blog.author}></BlogTitle>
                })
            }
        </div>
    );
};

export default BlogNav;