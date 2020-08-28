import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleClick  = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleClick(event){
        event.preventDefault();
        this.props.handleClick(this.state.value);
    }
    

    render(){
        return(
            <div>
                <form>
                    <input type='text' placeholder='Enter Your Restaurant' value={this.state.value} onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>Search</button>
                </form>
            </div>
        );
    }
}
export default Search;