import React from 'react';

export default class TextField extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  changeHandler = event => {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  }

  render (){
    return (
      <div>
        <input type="text"
        name="name"
        value={this.state.name}
        onChange={this.changeHandler}
        maxLength="40" 
        />
      </div>
    )
}
}