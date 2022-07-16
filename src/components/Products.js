import styled from "styled-components";
import { productItems } from "../data/products";
import Product from "./Product";

const Container = styled.div`
	padding:20px;
	display:flex;
	/* flex:1; */
	flex-wrap: wrap;
	justify-content:space-between;
`

const Products = () => {
  return (
	<Container>
		  {
			  productItems.map((product) => {
				  return <Product key={product.id} item={product} />
			  })
		}
	</Container>
  )
}

export default Products
