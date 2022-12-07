import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId


  return (
    <h1>{productId}</h1>
  )
}

export default ProductDetail;
