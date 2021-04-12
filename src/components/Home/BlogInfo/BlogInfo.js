import React from 'react';
import './BlogInfo.css';

const BlogInfo = ({ blog }) => {
    const { name, date, teeps, img, background, size } = blog;
    return (
        <div className="col-md-4 mt-5 blog-info-container">
            <div className={`bg-${size}`}>
                <div className={`background-${background}`}>
                    <div className="d-flex align-items-center">
                        <div>
                            <img className="w-75" src={img} alt="" />
                        </div>
                        <div>
                            <h6>{name}</h6>
                            <small>{date}</small>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>{teeps}</h5>
                        <p className="text-secondary mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae facilis odit quia eum at error velit voluptatem cupiditate iure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;