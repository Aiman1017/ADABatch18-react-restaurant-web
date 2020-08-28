import React from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {restaurant: null}
    }

    componentDidMount(){
        let infoUrl = 'http://restaurant-api-module-2.herokuapp.com/api/restaurant'
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + infoUrl).then(response => response.json()).then(data => {
            this.setState({
                restaurant: data['data']
            });
        });
    }

    render(){
        return(
            <main>
                <div>

                    {
                        this.state.restaurant ?
                        <div>
                            <h3>{this.state.restaurant.name}</h3>
                            <p>{this.state.restaurant.address}</p>
                            <p>{this.state.restaurant.opening_time}</p>
                            <p>{this.state.restaurant.email}</p>
                            <p>{this.state.restaurant.phone}</p>

                            <div>
                                <h5>{this.state.restaurant.star}</h5>
                                <p>{this.state.restaurant.name}</p>
                                <p>{this.state.restaurant.review}</p>
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