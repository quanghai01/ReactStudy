import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: relative;
  max-width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 10px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: #f1f1f1;
  position: absolute;
  bottom: -50px;
  width: 90%;
  margin: auto;
  left: 0;
  right: 0;
`;
const CardFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  align-items: center;
`;
const CardFooterAbove = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  align-items: center;
`;
const CardAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
`;
const Heart = styled.div`
  display: flex;

  width: 60px;
  justify-content: space-between;
`;
const CardAboveH3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;
const CardAboveSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const Card = () => {
  return (
    <div>
      <StyledCard>
        <CardImage>
          <CardImg
            src="https://cdn.dribbble.com/users/468006/screenshots/1368209/03.jpg?compress=1&resize=800x600&vertical=top"
            alt=""
          />
        </CardImage>

        <CardFooter>
          <CardFooterTop>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardAvatar
                src="https://cdn.dribbble.com/userupload/4454165/file/original-9a178a5b396b5f4536372b0256c798ac.png?compress=1&resize=1024x768"
                alt=""
              />
              <span>@zndrson</span>
            </div>
            <Heart>
              <img src="/icon/heart.svg" alt="" />
              <span>256</span>
            </Heart>
          </CardFooterTop>
          <CardFooterAbove>
            <CardAboveH3>Cosmic Perspective</CardAboveH3>
            <CardAboveSpan>12,000 PSL</CardAboveSpan>
          </CardFooterAbove>
        </CardFooter>
      </StyledCard>
    </div>
  );
};

export default Card;
