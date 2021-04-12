import React from 'react';
import caudi from '../../../images/Ellipse 1.png';
import BlogInfo from '../BlogInfo/BlogInfo';

const blogData = [
    {
        id: 1,
        name: 'Rahed Kabir',
        date: '22 Aug 2019',
        teeps: 'Check at least a doctor in a year for your teeth',
        background: 'img',
        img: '',
        size: 'size'
    },
    {
        id: 2,
        name: 'Dr. Caudi',
        date: '25 April 2020',
        teeps: '2 times of brush in a day can keep your healthy',
        background: 'color',
        img: caudi,
    },
    {
        id: 3,
        name: 'Dr. John Mitchel',
        date: '21 Jun 2019',
        teeps: 'The tooth cancer is talking a challenge',
        background: 'color',
        img: caudi,
    }
]

const Blog = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="w-75">
                <div className="text-center">
                    <h5 className="h5-color">OUR BLOG</h5>
                    <h2 className="heading-color">From Our Blog News</h2>
                </div>
                <div className="row mb-4">
                    {
                        blogData.map(blog => <BlogInfo key={blog.id} blog={blog}></BlogInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;