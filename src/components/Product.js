import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";


const Info = styled.div`
	opacity: 0;
	width:100%;
	height:100%;
	position:absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0, 0.2);
	z-index : 3;
	display:flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background-color: #f5fbfd;
	position:relative;

	&:hover ${Info}{
	opacity: 1;
	width:100%;
	height:100%;
	position:absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0, 0.2);
	z-index : 3;
	display:flex;
	align-items: center;
	justify-content: center;
	}
`;
const ImageBox = styled.div`
	/* width: 100%; */
	overflow: hidden;
	/* text-align:center; */
	/* align-items:center; */
`;
const Image = styled.img`
	width: 350px;
`;
const Icon = styled.div`
	width:40px;
	height:40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items:center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease ;
	&:hover{
		background-color: #e9f5f5;
		transform: scale(1.1);
		cursor:pointer;
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<ImageBox>
				<Image src={item.img} />
			</ImageBox>
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
