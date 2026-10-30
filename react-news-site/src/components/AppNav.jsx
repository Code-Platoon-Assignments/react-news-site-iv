import {Link} from 'react-router'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Search from './Search'

import sections from '../data/sections.json' //data

function AppNav (props){

    const[navItems, setNavItems] = useState(sections)  
    
    return(
        <Navbar> 
            <Navbar.Brand>
                <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
                CP News
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/'>
                    HOME
                </Nav.Link>
                {
                    navItems.map(((navItem, index) => {
                        return(
                            <Nav.Link key={index} as={Link} to={`/sections/${navItem.label}`} onClick={() => console.log(navItem.label)}> 
                                {navItem.label}
                            </Nav.Link>
                        )
                    }))
                }
            </Nav>
        </Navbar>
    )
}
export default AppNav;