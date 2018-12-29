import React ,{Component}from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

 class MainNav extends  Component{
        constructor(props) {
            super(props);
        
            this.toggle = this.toggle.bind(this);
            this.state = {
            isOpen: false
            };
        }
        toggle() {
            this.setState({
            isOpen: !this.state.isOpen
            });
        }

    render() {
      return (
    <Navbar color="primary" light expand="md" fixed="fixed">
          <NavbarBrand href="/"><img src="https://ws2.sinaimg.cn/large/006tNbRwgy1fydfma0phej307f08cdft.jpg" style={{height:40,width:40,borderRadius:20}}alt={'brand'} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-right" navbar>
                    <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
             </Collapse>
    </Navbar>
      )
    }

 }
 
export  {MainNav} ;