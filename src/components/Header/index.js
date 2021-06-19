import React from "react";
import { Logo, HeaderContainer } from "./styles";

const Header = () => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Mixclouder" />
    </a>
    <h1>Mixes</h1>
  </HeaderContainer>
);

export default Header;
