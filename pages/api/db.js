import ThrallDeck from '../../lib/thrall.json'

import AliceDeck from '../../lib/og/alice.json'
import ArthurDeck from '../../lib/og/arthur.json'
import BigfootDeck from '../../lib/og/bigfoot.json'
import BruceDeck from '../../lib/og/brucelee.json'
import MedusaDeck from '../../lib/og/medusa.json'
import RobinDeck from '../../lib/og/robinhood.json'
import SinbadDeck from '../../lib/og/sinbad.json'



module.exports = async (req, res) => {
  console.log('req', req)
    res.status(200).json(ThrallDeck)
  }