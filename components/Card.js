import React, { Component, Fragment } from 'react'
import UnmatchedCardIcon from './UnmatchedCardIcon'

export default class Card extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Fragment>
        <div className='unmatched-card'>
          <div className='main-wrapper'>
            <div className='inner-top backgroundImage'></div>
            <div className='upper-left'>
              {/* svg goes here */}

              <svg width='100%' height='100%' viewBox='0 0 10.8 47'>
                <polygon
                  points='0,0 10.8,0 10.8,35.33033707865169 5,38.630337078651685 0,35.83033707865169'
                  fill='#f7eadb'
                  className='border'
                ></polygon>
                <polygon
                  points='0,14.2 10,14.2 10,34.93033707865168 5,37.83033707865169 0,34.93033707865168'
                  className='name-panel'
                ></polygon>
                <polygon
                  points='0,0 10,0 10,14.2 5,17.1 0,14.2'
                  fill='#dc3034'
                  className='canton'
                ></polygon>
              </svg>
            </div>
            <div className='upper-left icon'>
              <div className='icon-wrapper'>
                <UnmatchedCardIcon className='unmatched-icon' />
              </div>
              <div className='value'>{/* card value goes here */}1</div>
            </div>
            <div className='upper-left character'>
              <div className='character-name'>testing</div>
            </div>
            <div className='inner-bottom'>
              <div className='boost-circle inner-border'>
                <div className='boost-value'>{/* boost value goes here */}</div>
              </div>
              <div className='card-title'></div>
              <div className='card-text'></div>
            </div>
            <div className='bottom-right'>
              <span className='deck-name'></span>
              <span className='card-quantity'></span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .backgroundImage {
            background-image: url('https://i.imgur.com/Y8g02UO.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </Fragment>
    )
  }
}
