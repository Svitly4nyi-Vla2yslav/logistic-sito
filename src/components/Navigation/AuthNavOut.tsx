import {
  AuthContainer,
  LogBtn,
  NavList,
  TextItem,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';

export const AuthNavOut: React.FC = () => {
 
  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/psychologists">Psychologists</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/favorites">Favorites</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <TextItem></TextItem>
          <li>
            <LogBtn >
              Log out
            </LogBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
