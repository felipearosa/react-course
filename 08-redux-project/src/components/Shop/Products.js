import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'First product',
    price: 6,
    description: 'This is the first book'
  },
  {
    id: 'p2',
    title: 'Second product',
    price: 11,
    description: 'This is the second book'
  },
]


const Products = (props) => {
  const products = DUMMY_PRODUCTS.map(product => {
    return (
      <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
    )
  })

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products}
      </ul>
    </section>
  );
};

export default Products;
