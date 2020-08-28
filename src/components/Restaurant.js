import React from 'react';
import {Link} from 'react-router-dom'

function Restaurant(props){
    return(
        <div>
            <ul>
                {
                    props.restaurant.map(val => {
                        return <Link to={`/detail/${val._id}`} key={val._id}>
                                <div>
                                    <h3>{val.name}</h3>
                                    <p>{val.address}</p>
                                    <p>{val.opening_times}</p>
                                </div>
                            </Link>
                    })
                }
            </ul>
        </div>
    );
}
export default Restaurant;