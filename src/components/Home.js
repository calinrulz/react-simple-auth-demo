import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      tokenBox: ''
    };

    this.storeToken = this.storeToken.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  storeToken() {
    if (this.state.tokenBox === 'pYRmy2tTmGXBhhkF9sNIMKeseOwjU5L2') {
      console.log(this.state.tokenBox);
    }

    this.setState({ tokenBox: '' });
  }

  render () {
    return (
      <div className="container">
        {/*Home. Not Protected. Anyone can see this.*/}
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <p>Add here the token based auth to continue with login</p>

            <div className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  name="tokenBox"
                  className="form-control"
                  placeholder="Enter the given token"
                  value={ this.state.tokenBox }
                  onChange={ this.handleChange }
                />
              </div>

              <button value="Send" className="btn btn-primary" onClick={ this.storeToken }>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}