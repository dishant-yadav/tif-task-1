import logo from './../assets/logo.png';
import './../stylesheets/footer.css';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/twitter.svg';
import Facebook from '../assets/facebook.svg';

const Footer = () => {
  return (
    <div className={'wrapper'}>
      <section className={'main bg-none'}>
        <div className='flex p-50 footer'>
          <div className='logo-container'>
            <img
              src={logo}
              alt=''
              className='company-logo'
            />
          </div>
          <div className='contact-us'>
            <h3>Contact Us</h3>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
          <div className='more'>
            <h3>More</h3>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
          <div className='social-links'>
            <h3 className='social-links-text'>Social Links</h3>
            <p className='copyright'>&#169; 2022 Food Truck Example</p>
            <div className='link-container'>
              <img
                src={Instagram}
                alt=''
              />
              <img
                src={Twitter}
                alt=''
              />
              <img
                src={Facebook}
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
