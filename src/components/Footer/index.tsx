import Wind from 'svg/wind.svg';
import Instagram from 'svg/instagram.svg';
import Facebook from 'svg/facebook.svg';
import Linkedin from 'svg/linkedin.svg'

import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="px-48 bt-black">
        <div className="row">
          <div className="col-8 ml-0 flex-column-sm flex-vertical-center">
            <span className="brand brand-font">
              <img src={Wind} alt="Vento icone" />
              Brisa
            </span>
            <p className="ml-8 py-8 text-center">
              © Copyright 2025 Brisa Inc. - Creative and informative Blog
            </p>
          </div>
          <div className="col-4 mr-0 flex-end flex-center-sm">
            <ul className="pt-8">
              <li>
                <a className="color-gray" href="#">
                  <img src={Facebook} alt="Facebook icon" />
                </a>
              </li>
              <li className="ml-24">`
                <a className="color-gray" href="#">
                  <img src={Linkedin} alt="Linkedin icon" />
                </a>
              </li>
              <li className="ml-24">`
                <a className="color-gray" href="#">
                  <img src={Instagram} alt="Instagram icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;