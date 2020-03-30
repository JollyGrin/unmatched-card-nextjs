import React, { Component, Fragment } from 'react'
import slideout from '../node_modules/slideout'

export default class Layout extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <nav id='menu'>
          <header>
            <h2>Menu</h2>
          </header>
        </nav>

        <main id='panel'>
          <header>
            <h2>Panel</h2>
          </header>
        </main>
        {this.props.children}
      </div>
    )
  }
}
