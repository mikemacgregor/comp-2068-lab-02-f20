/* import React from 'react';
import Styles from './styles';

const Button = ({text}) => {
  return (
    <Styles.Button>
      <div>{text}</div>
    </Styles.Button>
  );
}
 
export default Button; */

// Notes: First attempt to allow the button to link to another view was to wrap <Link> around <Button> on Home.
// It worked, but creates an html button wrapped in an anchor tag, which didn't seem appropriate, so commented 
// out above and removed the Link option from react-router-dom on Home and changed Button component similar to 
// here: https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button (2nd solution)

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import Styles from './styles';

const Button = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <Styles.Button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to) // set "to" where placing the button
      }}>
      <div>{props.text}</div>
    </Styles.Button>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(Button)