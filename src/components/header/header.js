import React from "react";
import gs from "../../gs.png";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  SkipToContent,
  Content,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react";
import { Power } from "@carbon/icons-react";
import { Theme } from "@carbon/react";

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const NavHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Theme theme="g100"></Theme>
        <Header aria-label="Generic System">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="">
            {/* <img className="image" src={gs} alt="GS" /> */}
          </HeaderName>
          <HeaderName href="#" prefix="Generic">
            [System]
          </HeaderName>
          <HeaderGlobalBar>
            <span>
              <HeaderName href="/" prefix="">
                Current User
                <br />
                <Power />
              </HeaderName>
            </span>
          </HeaderGlobalBar>
        </Header>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="#">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
                <SideNavMenuItem href="#">Link</SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink renderIcon={Fade16} href="#">
                Link
              </SideNavLink>
              <SideNavLink renderIcon={Fade16} href="#">
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav>

      </>
    )}
  />
);

export default NavHeader;
