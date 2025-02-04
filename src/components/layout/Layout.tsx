import { useNavigate } from 'react-router-dom';
import {
    LayoutComponent,
    Header,
    LogoContainer,
    NavContainer,
    Main,
    Footer,
    StyledNavLink
} from './styles.ts';
import { LayoutProps } from './types.ts';

function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();

    return (
        <LayoutComponent>
            <Header>
                <LogoContainer onClick={() => navigate('/')}></LogoContainer>
                {/* <LogoContainer to='/'></LogoContainer> */}
                <NavContainer>
                    <StyledNavLink to='/'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Home</StyledNavLink>
                    <StyledNavLink to='/about'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>About</StyledNavLink>
                    <StyledNavLink to='/users'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Users</StyledNavLink>
                    <StyledNavLink to='/clients'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Clients</StyledNavLink>
                    <StyledNavLink to='/lesson14'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Lesson14</StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <LogoContainer onClick={() => navigate('/')} />
                {/* <LogoContainer to='/'></LogoContainer> */}
            </Footer>
        </LayoutComponent >
    );
}

export default Layout;