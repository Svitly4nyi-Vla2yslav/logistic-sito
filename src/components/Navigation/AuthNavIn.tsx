import {
  AuthContainer,
  LogBtn,
  NavList,
  RegBtn,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';

export const AuthNavIn: React.FC = ({
}) => {
  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/psychologists">Psychologists</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <li>
            <LogBtn type="button" >
              Log in
            </LogBtn>
          </li>
          <li>
            <RegBtn type="button" >
              Registration
            </RegBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
