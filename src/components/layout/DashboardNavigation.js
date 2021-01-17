import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/images/logo.png";

const Nav = styled.nav`
  height: 8rem;
  padding: 0 5%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: #3d3d3d;
`;

const LogoBox = styled(NavLink)`
  width: 3rem;
  height: 3rem;
  margin-right: 3%;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const NavList = styled.ul`
  list-style: none;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const NavListItem = styled.li`
  display: inline-block;
`;

const NavListItemLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: underline;
  }
`;

const navigationItems = [
  { title: "Home", path: "/dashboard", exact: true },
  { title: "Promotions", path: "/dashboard/promotions" },
  { title: "Bounties", path: "/dashboard/bounties" },
  { title: "Product of the week", path: "/dashboard/product-of-the-week" },
  { title: "Earnings", path: "/dashboard/earnings" },
];

const LandingPageNavigation = () => {
  return (
    <Nav>
      <LogoBox to="/">
        <Logo src={logo} />
      </LogoBox>
      <NavList>
        {navigationItems.map((nav) => (
          <NavListItem key={nav.title}>
            <NavListItemLink
              to={nav.path}
              activeClassName="active"
              exact={nav.exact}
            >
              {nav.title}
            </NavListItemLink>
          </NavListItem>
        ))}
        <NavListItem>
          <NavListItemLink to="/dashboard/settings" activeClassName="active">
            Settings
          </NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/dashboard/account" activeClassName="active">
            Account
          </NavListItemLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default LandingPageNavigation;
