import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get the Disney Bundle</SignUp>
        <Description>
          Stream now.<span>Terms Apply</span>
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

///////////////////////////////////////////////////////////////////////////
//////  STYLED COMPONENTS

const Container = styled.div`
  /* position: relative; */
  height: calc(100vh - 70px);
  background: url("/images/login-background.jpg") center center / cover
    no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  /* &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: -1;
    background-image: url("/images/login-background.jpg");
  } */
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 12px;
  font-size: 20px;
  padding: 23px 0;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;

  span {
    text-decoration: underline;
  }
`;

const CTALogoTwo = styled.img`
  margin-top: 15px;
`;

