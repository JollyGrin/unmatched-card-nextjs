import React, { Component } from 'react'
import AliceDeck from '../lib/og/alice.json'
import ArthurDeck from '../lib/og/arthur.json'
import BigfootDeck from '../lib/og/bigfoot.json'
import BruceDeck from '../lib/og/brucelee.json'
import MedusaDeck from '../lib/og/medusa.json'
import RobinDeck from '../lib/og/robinhood.json'
import SinbadDeck from '../lib/og/sinbad.json'
import IngenDeck from '../lib/og/muldoon.json'
import RaptorDeck from '../lib/og/raptors.json'
import CopyToClipboard from 'copy-text-to-clipboard'
import TheHead from '../components/TheHead'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

export default class decks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      decks: [
        AliceDeck,
        ArthurDeck,
        BigfootDeck,
        BruceDeck,
        MedusaDeck,
        RobinDeck,
        SinbadDeck,
        IngenDeck,
        RaptorDeck
      ]
    }
  }

  copy = string => {
    CopyToClipboard(JSON.stringify(string))
  }

  renderDecks = () => {
    return this.state.decks.map(deck => {
      console.log('deck', deck)
      return (
        <li key={Math.random()}>
          <div className='dropdown'>
            {deck.hero.name} -{' '}
            <a
              onClick={() => {
                this.copy(deck)
                toast(
                  `You have just copied ${deck.hero.name} to your clipboard`
                )
              }}
            >
              Copy to Clipboard
            </a>
            <div className='dropdown-content'>
              <h3>
                {deck.hero.name} {deck.hero.isRanged ? '🏹' : '⚔️'} &{' '}
                {deck.sidekick.name} {deck.sidekick.isRanged ? '🏹' : '⚔️'}
              </h3>
              <br />
              <span>
                Hero ♥️: {deck.hero.hp} <br />
                Sidekick{' '}
                {deck.sidekick.quantity > 1
                  ? `🔢: ${deck.sidekick.quantity}`
                  : `♥️: ${deck.sidekick.hp}`}{' '}
                <br />
                Movement 👣: {deck.hero.move}
              </span>
              <br /> <br />
              <span>{deck.hero.specialAbility}</span>
            </div>
          </div>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <TheHead />
        <center>
          <ToastContainer />
        </center>

        <section className='section'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <h1 className='title'>Decks to Copy</h1>
              <ul>{this.renderDecks()}</ul>
              <br /> <br />
              <span>Test your clipboard here:</span>
              <textarea></textarea>
            </div>
          </div>
        </section>

        <style global jsx>{`
          li a {
            color: blue;
            text-decoration: underline;
          }

          textarea {
            height: 15rem;
            width: 30rem;
          }

          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 20rem;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            z-index: 1;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }
        `}</style>
      </div>
    )
  }
}
