import React, { useState, useEffect } from 'react';
import { useGetCategories } from './redux/hooks'
import { useQuery, useMutation, queryCache } from 'react-query';
import { fetchCats } from './query'
import axios, { baseURL } from '../../axios'
import {
  Container,
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
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [cats, setCats] = useState([]);
  // const data = useQuery(['cats'], fetchCats)

  // const categories = data.data;
  // useEffect(() => {
  //   if (catData) {
  //     setCats(catData.data)
  //   }
  // }, [setCats, catData])

  const toggle = () => setIsOpen(!isOpen);
  const { categories, getCategories, getCategoriesPending, getCategoriesError } = useGetCategories()
  // console.log("cats", data);

  if (categories.length == 0 && !getCategoriesError) getCategories()

  return (
    <Navbar expand="md" color="light" light className="navbar navbar-primary bg-light">
      <Container>
        <Link to='/'>
          <NavbarBrand>
            <span className="bg-primary text-light rounded-left p-2  text-uppercase font-weight-bold border border-primary">Hayrli</span>
            <span className="bg-white text-primary rounded-right p-2 text-uppercase font-weight-light border border-primary">Kanal</span>
          </NavbarBrand>
        </Link>
        <NavbarToggler className=" " onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/search" className="nav-link">Kurslar</Link>
            </NavItem>
            <NavItem>
              <Link to="/videos" className="nav-link">Video darsliklar</Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">Yangiliklar</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Kategoriyalar
              </DropdownToggle>
              <DropdownMenu>
                {categories && categories.map((item, index) => {
                  return (
                    <DropdownItem>
                      <Link to={`courses/${item.id}`} className="compact d-flex nav-link">
                        <img style={{ height: '15px', width: '15px' }}
                          src={baseURL + item.thumbnail.url} />
                        <span>{item.name}</span>
                      </Link>
                    </DropdownItem>
                  )
                })}
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
