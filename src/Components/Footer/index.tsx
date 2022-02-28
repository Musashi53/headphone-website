import {
  FooterContainer,
  FooterContent,
  FooterCopy,
  FooterCopyLink,
  FooterForm,
  FooterInput,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSocial,
  FooterSocialLink,
  FooterTitle,
} from './styles';

import footerLogo from '../../Assets/img/logo.png';
import { Button } from '../Button/styles';

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterLogo>
          <img src={footerLogo}/>
        </FooterLogo>

        <FooterContent>
          <FooterTitle>Products</FooterTitle>
          <FooterLinks>
            <li>
              <FooterLink href="#">Headphones</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Earphones</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Earbuds</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Accessories</FooterLink>
            </li>
          </FooterLinks>
        </FooterContent>

        <FooterContent>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks>
            <li>
              <FooterLink href="#">Product help</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Register</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Updates</FooterLink>
            </li>

            <li>
              <FooterLink href="#">Provides</FooterLink>
            </li>
            </FooterLinks>
          </FooterContent>

          <FooterContent>
            <FooterForm>
              <FooterInput type="email" placeholder="Email"/>
              <Button>
                <i className="ri-send-plane-line"/>
              </Button>
            </FooterForm>

            <FooterSocial>
              <FooterSocialLink href="#">
                <i className="ri-facebook-line"/>
              </FooterSocialLink>

              <FooterSocialLink href="#">
                <i className="ri-instagram-line"/>
              </FooterSocialLink>

              <FooterSocialLink href="#">
                <i className="ri-twitter-line"/>
              </FooterSocialLink>
            </FooterSocial>
          </FooterContent>
      </FooterContainer>

      <FooterCopy>
        <FooterCopyLink>
        &#169; YuriMendess. All right reserved
        </FooterCopyLink>
      </FooterCopy>
    </footer>
  );
};

export default Footer;