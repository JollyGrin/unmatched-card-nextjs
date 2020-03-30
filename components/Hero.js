import React, { Component, Fragment } from 'react'
import Card from './Card'

export default class Hero extends Component {
  render () {
    return (
      <Fragment>
        <section className='hero is-fullheight'>
          <div className='hero-header'>
            <div className='container footer-section'>
              <a
                className='button is-primary is-large'
                onClick={this.props.addCard}
              >
                DRAW 1 CARD
              </a>
              <a
                className='button is-primary is-large'
                onClick={this.props.discardCard}
              >
                DISCARD LAST CARD
              </a>
            </div>
          </div>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns is-multiline is-variable is-0 is-mobile testscale'>
                {this.props.cards.map((card, index) => (
                  <div key={card + index} className='column'>
                    <Card data={card} />
                  </div>
                ))}
                {/* <div className='column'>{this.props.children}</div> */}
              </div>
            </div>
          </div>
          {/* <div className='hero-foot'>
            <div className='container footer-section'>
              <a
                className='button is-primary is-large'
                onClick={this.props.addCard}
              >
                DRAW 1 CARD
              </a>
              <a
                className='button is-primary is-large'
                onClick={this.props.discardCard}
              >
                DISCARD LAST CARD
              </a>
            </div>
          </div> */}
        </section>
        <style jsx>{`
          // .testscale {
          //   transform: scale(0.5);
          // }

          .footer-section {
            font-family: BebasNeueRegular;
            padding-left: 1.5em;
            padding-top: 2rem;
          }

          .footer-section a {
            margin-right: 1em;
          }
        `}</style>
      </Fragment>
    )
  }
}
