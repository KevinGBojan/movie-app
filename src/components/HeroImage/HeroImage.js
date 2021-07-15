import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content className="p-5 my-0 mx-auto">
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
