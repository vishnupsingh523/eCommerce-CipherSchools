import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
	/* background-color: black; */
	/* color: #fff; */
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
`;
const Center = styled.div`
	flex: 1;
`;
const Right = styled.div`
	flex: 1;
`;

// Setting the Language
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							input
							icon
						</SearchContainer>
					</Left>
					<Center>Center</Center>
					<Right>Right</Right>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Navbar;
