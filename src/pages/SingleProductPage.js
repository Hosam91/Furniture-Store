import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useProductsContext()

  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return (
      <>
        <Error />
        <div className="text-center">
          <Link to="/" className="btn text-center">
            {' '}
            go back Home
          </Link>
        </div>
      </>
    )
  }

  const {name,  stock, price, description, stars, reviews, company, images ,id: sku} = product;


  return <Wrapper>
    <PageHero title={name} product /> 
    <div className="section section-center page">
      <Link className='btn' to='/products'>back to products</Link>
      <div className="product-center">
        <ProductImages images={ images} />
        <section className="content">
          <h2>{name}</h2>
          <Stars stars={ stars} reviews={reviews} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'> {description }</p>
          <p className='info'>
            <span>Avilable : </span>
            {stock > 0 ?'In stock' : 'out of stock'}
          </p>
          <p className='info'>
            <span>SKU : </span>
            {sku}
          </p>
          <p className='info'>
            <span>Brand : </span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={ product} />}
        </section>
      </div>
    </div>
  
  
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 3rem;
    margin-top: 1.5rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 1.5;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1rem;
    }
  }
  @media (max-width: 450px) {
    .product-center {
     display:flex
      align-items: center;
      width:100%;
      flex-wrap:wrap;

    }
    .product-center >div{
      // width:50%;
    }
    .content{
      width:100%

    }
    .price {
      font-size: 1.25rem;
    }
    .info{
      max-width:60%;
      padding: 0;
      gap:.5rem
    }
    .info span {
      margin-right:0;
    }
  }
`


export default SingleProductPage
