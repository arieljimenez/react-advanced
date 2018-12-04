const React = require('react');
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import theme from './styles/theme';

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next'
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${theme.black};
`;

const Inner = styled.div`
  max-width: ${theme.maxwidth || '1000px'};
  background: ${theme.background || 'white'};
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
