import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";


const Container = styled.div`
	height: 60px;
	margin-bottom:10px;
	/* align-items: center; */
	/* background-color: black; */
	/* color: #fff; */
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;

// Setting the Language
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;
// SEARCH _ CONTAINER
const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display:flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`
const Input = styled.input`
	border: none;
`
//  ******* CENTER **********
const Center = styled.div`
	flex: 1;	
	text-align: center;
`;
const Logo = styled.h2`
	font-weight: bold;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`


const Navbar = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							<Input />
							<Search />
						</SearchContainer>
					</Left>
					<Center>
						<Logo>MART</Logo>
					</Center>
					<Right>
						<MenuItem>Register</MenuItem>
						<MenuItem>Sign In</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Navbar;
