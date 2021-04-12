import React from 'react';
import { Link } from 'react-router-dom';

const FooterInfo = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="h5-color">{props.title ? props.title : " "}</h5>
            <ul className="mt-4">
                {
                    props.items.map((item, index) => <li key={index}><Link 
                    style={{textDecoration: 'none'}} className="text-secondary list-style" to={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterInfo;
