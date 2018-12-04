const React = require('react');
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import theme from './styles/theme';

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxwidth || '1000px'};
  background: ${props => props.theme.background || 'white'};
  margin: 0 auto;
  padding: 2rem;
`;

export default class Page extends React.Component {

  render(){
    return(
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            { this.props.children }
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
