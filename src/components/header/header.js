import React from "react";
import logo from "../../IPIndie_Logo.png";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  SkipToContent,
} from "carbon-components-react";

const NavHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="I.P Indie">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          <img className="image" src={logo} alt="IPI" />
        </HeaderName>
        <HeaderName href="/" prefix="Intellectual">
          [Property Investment]
        </HeaderName>
        <HeaderGlobalBar>
          <span>
            <HeaderName href="/" prefix="">
              iPi
            </HeaderName>
          </span>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default NavHeader;
