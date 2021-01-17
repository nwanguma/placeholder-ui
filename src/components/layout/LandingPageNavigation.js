import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 9rem;
  padding: 0 10%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

const Logo = styled(NavLink)`
  font-size: 2.4rem;
  font-weight: 600;
  text-decoration: none;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const NavListItemLink = styled(NavLink)`
  text-decoration: none;
`;

const NavAction = styled.div`
  display: flex;
  flex: 0 0 15%;
  justify-content: space-between;
  align-items: center;
`;

const NavActionItem = styled.a`
  text-decoration: none;
`;

const navigationItems = [
  { title: "Pricing", path: "/pricing" },
  { title: "Product", path: "/product" },
  { title: "Promotions", path: "/promotions" },
  { title: "About", path: "/about" },
];

const LandingPageNavigation = () => {
  return (
    <Nav>
      <Logo to="/">realUsers</Logo>
      <NavList>
        {navigationItems.map((nav) => (
          <NavListItem key={nav.title}>
            <NavListItemLink to={nav.path} activeClassName="active">
              {nav.title}
            </NavListItemLink>
          </NavListItem>
        ))}
      </NavList>
      <NavAction>
        <NavActionItem href="/some-login">Login</NavActionItem>
        <NavActionItem href="/some-register">Register</NavActionItem>
      </NavAction>
    </Nav>
  );
};

export default LandingPageNavigation;
