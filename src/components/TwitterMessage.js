import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      count: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      count: this.props.maxChars - e.target.value.length
    })
  }

  charCounter = (e) => {
    this.setState({
      
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
