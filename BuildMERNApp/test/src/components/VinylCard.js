import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const VinylCard = (props) => {
    const  vinyl  = props.vinyl;

    return(
        <div className="card-container">
            <img src="https://www.iconspng.com/uploads/vinyl/vinyl.png/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-vinyl/${vinyl._id}`}>
                        { vinyl.title }
                    </Link>
                </h2>
                <h3>{vinyl.artist}</h3>
                <p>{vinyl.description}</p>
            </div>
        </div>
    )
};

export default VinylCard;