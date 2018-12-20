const React = require('react');
const PropTypes = require('prop-types');
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    # name of the query
    getItems {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;


export default class Items extends React.Component {

  render(){
    return(
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {({data, error, loading}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            return <ItemsList>
                {data.getItems.map(item => <p>{item.title}</p>)}
              </ItemsList>
          }}
        </Query>
      </Center>
    )
  }
}


