import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import Card from '../components/Card'
import Hero from '../components/Hero'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [1, 2, 3, 4, 5]
    }
  }

  addCard = () => {
    this.setState({
      cards: [...this.state.cards, this.state.cards.length + 1]
    })
  }

  discardCard = () => {
    const { cards } = this.state
    const newCards = cards.splice(-1, 1)
    console.log(newCards)
    this.setState({
      cards: newCards
    })
    console.log(this.state.cards)
  }

  render () {
    return (
      <div>
        <TheHead />
        <Hero
          cards={this.state.cards}
          addCard={this.addCard}
          discardCard={this.discardCard}
        >
          <Card />
        </Hero>
        <span className='help'>
          https://github.com/JollyGrin/unmatched-card-nextjs
        </span>
      </div>
    )
  }
}
