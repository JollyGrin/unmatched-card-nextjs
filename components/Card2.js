import React, { Component, Fragment } from 'react'

export default class Card2 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Fragment>
        <span className='help'>{this.props.data}</span>
        <div className='card'>
          <p>test</p>
          <span className='test'>fdsff</span>
        </div>
        {/* <a className='button is-primary'>Play</a> */}

        <style jsx>{`
          .card {
            display: inline-block;
            height: 13em;
            width: 8em;
            background-color: red;
            border-radius: 1em;
          }

          .test {
            position: absolute;
            bottom: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}
