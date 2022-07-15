import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: coral;
	position: relative;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
`;

const Wrapper = styled.div`
	height: 100%;
`;
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
const Image = styled.img`
	height: 80%;
`;
const ImageContainer = styled.div`
	flex: 1;
`;
const InfoContainer = styled.div`
	flex: 1;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper>
				<Slide>
					<ImageContainer>
						<Image src="https://i.pinimg.com/originals/fb/64/03/fb6403e657ab53c877678c297e3b42e0.jpg" />
					</ImageContainer>
					<InfoContainer></InfoContainer>
				</Slide>
			</Wrapper>

			<Arrow direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
