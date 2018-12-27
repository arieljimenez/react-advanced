const React = require('react');
const PropTypes = require('prop-types');
import Link from 'next/link';

import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default class Item extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render(){
    const item = this.props.item;

    return(
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Link href={{
          pathname: '/item',
          query: { id: item.id}
        }}>
          <Title>
            <a>{item.title}</a>
          </Title>
        </Link>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link href={{
            pathname: 'update',
            query: { id: item.id}
          }}>
            <a>Edit ✏️</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    )
  }
}

