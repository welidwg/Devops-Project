import Logo from "../../assets/4.png";

export default function Footer(params) {
  return (
    <>
      <footer className="footer set-bg bg-dark">
        <div className="container">
          <div className="footer__contact">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="footer__contact__title">
                  <h2>Contact Us Now!</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer__contact__option">
                  <div className="option__item">
                    <i className="fa fa-phone"></i>
                    (+12) 345 678 910
                  </div>
                  <div className="option__item email">
                    <i className="fa fa-envelope-o"></i>
                    Colorlib@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img src={Logo} className="w-75" alt="logo" />
                  </a>
                </div>
                <p className="text-white fw-bold">
                  Any questions? Let us know in store at 625 Gloria Union,
                  California, United Stated or call us on (+1) 96 123 8888
                </p>
                <div className="footer__social">
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="google">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="skype">
                    <i className="fab fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3">
              <div className="footer__widget">
                <h5>Infomation</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Purchase
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Payemnt
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Return
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="footer__widget">
                <h5>Infomation</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Hatchback
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Sedan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      SUV
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Crossover
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer__brand">
                <h5>Top Brand</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right"></i>
                      Abarth
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Acura
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                      Audi
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right"></i>
                      BMW
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right"></i>
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right"></i>
                      Ferrari
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right"></i>
                      Honda
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
