import React from 'react'
import { Message } from 'semantic-ui-react'
import Proptypes from 'prop-types'

const MessageExampleWarning = ({text}) => (
  <Message warning>
    <Message.Header>{text}}</Message.Header>
  </Message>
);
MessageExampleWarning. Proptypes={
    text:Proptypes.string.isRequired
};
export default MessageExampleWarning