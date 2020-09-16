import React from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {restaurant: null}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        let id = this.props.match.params._id;
        let infoUrl = `http://restaurant-api-module-2.herokuapp.com/api/restaurants/${id}`
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + infoUrl).then(response => response.json()).then(data => {
            this.setState({
                restaurant: data['data']
            });
        });
    }

    handleClick(){
        this.props.history.goBack();
    }

    render(){
        return(
            <main>

                <button onClick={this.handleClick}>Go Back</button>

                <div>

                    {
                        this.state.restaurant ?
                        <div>
                            <h3>{this.state.restaurant.name}</h3>
                            <p>{this.state.restaurant.address}</p>
                            <p>{this.state.restaurant.opening_time}</p>

                            <ul>
                                <li>{this.state.restaurant.types[0]}</li>
                                <li>{this.state.restaurant.types[1]}</li>
                                <li>{this.state.restaurant.types[2]}</li>
                                <li>{this.state.restaurant.types[3]}</li>
                            </ul>

                            <p>{this.state.restaurant.email}</p>
                            <p>{this.state.restaurant.phone}</p>

                            <div>
                                <p>{this.restaurant.menu[1]}</p>
                                <p>{this.restaurant.menu[2]}</p>
                            </div>

                            <div>
                                <h5>{this.state.restaurant.review.star}</h5>
                                <p>{this.state.restaurant.review.name}</p>
                                <p>{this.state.restaurant.review.review}</p>
                            </div> 
                        </div>
                        :
                        <div>
                            <p>Loading.....</p>
                        </div>
                    }

                </div>
            </main>
        )
    }
}
export default withRouter(Detail);