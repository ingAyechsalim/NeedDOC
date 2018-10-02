import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import{Link} from 'react-router-dom'
export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item active={activeItem === 'browse'} onClick={this.handleItemClick}>
        <i class="home icon"></i>
        <Link to="/">aceuil</Link>        </Menu.Item>

        <Menu.Item name='Actualité' active={activeItem === 'actualité'} onClick={this.handleItemClick}>
        <i class="sun icon"></i>
        actualité
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='A propos' active={activeItem === 'signup'} onClick={this.handleItemClick}>
          <i class="phone icon"></i>
          contact
          </Menu.Item>

          <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
          <i class="help icon"></i>

            AIDE
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
