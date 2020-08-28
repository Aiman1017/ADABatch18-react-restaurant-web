import React from 'react';
import Search from './Search';
import Restaurant from './Restaurant';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {restaurant: []}
        this.getSearch = this.getSearch.bind(this);
    }

    render(){
        return(
        <main>
            <h2>This is main part</h2>
            <Search handleClick={this.getSearch}/>
            <Restaurant restaurant = {this.state.restaurant}/>
        </main>
        );
    }

    getSearch(searchTerm){
        const url = 'http://restaurant-api-module-2.herokuapp.com/api/restaurant'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl + url).then(response => response.json()).then(data => {
            this.setState({
                restaurant: data['data']
            });
        }).catch(err => {
            console.log("Can't access" + url);
        });
        console.log(this.state.restaurant);
    }
}
export default Main;