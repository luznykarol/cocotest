import React, { Component } from 'react'

export default class InputField extends Component {
  render() {
    const error = !this.props.error ? (
      <span className='control__error'>{this.props.errorMessage}</span>
    ) : (
      ' '
    )
    return (
      <div className='control control-expanded'>
        <input
          onChange={this.props.onChange}
          type={this.props.type}
          name={this.props.name}
          className='input'
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
        {error}
      </div>
    )
  }
}
