import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import {sliderItems} from "../data/sliderItems";
import { Container, Arrow, Wrapper, Slide, ImageContainer, Image, InfoContainer, Title, Desc, Button } from "../CSS/SliderCss";


const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		}
		else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={()=>handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper slideIndex = {slideIndex}>
				{
					sliderItems.map((item) => {
						return (
							<Slide bg={item.bg}>
								<ImageContainer>
									<Image src={item.img} />
								</ImageContainer>
								<InfoContainer>
										<Title>
											{item.title}
									</Title>
									<Desc>{item.desc}</Desc>
									<Button>SHOP NOW</Button>
								</InfoContainer>
							</Slide>
					)
					})
				}
				
			</Wrapper>

			<Arrow direction="right" onClick={()=>handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
