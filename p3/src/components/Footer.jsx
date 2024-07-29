import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const FooterWrapper = styled.footer`
  background-color: #681799;
  color: white;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-right: 10px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);

  p {
    color: white;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
`;

const SocialIcons = styled.div`
  a {
    color: white;
    margin: 1px 10px;
    font-size: 24px;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }
`;

const ContactInfo = styled.div`
  text-align: left;

  p {
    margin: 10px 0;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #61dafb;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 Goslingfurni. All rights reserved.</p>
      <FooterContent>
        <SocialIcons>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </SocialIcons>
        <ContactInfo>
          <p>
            <PhoneIcon /> Contact: +1 123 456 7890
          </p>
          <p>
            <EmailIcon /> Email: Infocacino@gmail.com
          </p>
          <p>
            <LockIcon /> <a href="/privacy-policy">Privacy Policy</a>
          </p>
        </ContactInfo>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
