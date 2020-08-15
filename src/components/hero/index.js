import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'jumbotron', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="text-center text-light">
        <h1>Fortune Homes</h1>
        <p className="mb-0">Life is good living premium</p>
      </div>
    </div>
  )
}

export default Hero