import React from "react";
import * as Custom from "./typeFooter";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Custom.Footer>
      <Custom.Container>
        <Custom.Row>
          <Custom.Col3>
            <h4 className="title">
              Categories
					    </h4>
            <ul>
              <li>
                <Link to="#">
                  Women
							  </Link>
              </li>

              <li>
                <Link to="#">
                  Men
							</Link>
              </li>

              <li>
                <Link to="#">
                  Shoes
							</Link>
              </li>

              <li>
                <Link to="#">
                  Watches
							</Link>
              </li>
            </ul>
          </Custom.Col3>
          <Custom.Col3 >
            <h4 className="title">
              Help
					    </h4>
            <ul>
              <li>
                <Link to="#">
                  Track Order
							</Link>
              </li>
              <li>
                <Link to="#">
                  Returns
							</Link>
              </li>
              <li>
                <Link to="#">
                  Shipping
							</Link>
              </li>
              <li>
                <Link to="#">
                  FAQs
							</Link>
              </li>
            </ul>
          </Custom.Col3>
          <Custom.Col3>
            <h4 className="title">
              GET IN TOUCH
			  		  </h4>
            <p className="question">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
			  	  	</p>
            <div>
              <Link to="#">
                <i className="fa fa-facebook"></i>
              </Link>

              <Link to="#">
                <i className="fa fa-instagram"></i>
              </Link>

              <Link to="#">
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>
          </Custom.Col3>
          <Custom.Col3 style={{ padding: '0 30px' }} >
            <h4 className="title">
              Newsletter
			  		</h4>
            <form>
              <div>
                <Custom.InputEmail type="text" name="email" placeholder="email@example.com" />
                <Custom.FocusInput></Custom.FocusInput>
              </div>
              <Custom.Subcribe>
                <Custom.BtnSubcribe>
                  Subscribe
							    </Custom.BtnSubcribe>
              </Custom.Subcribe>
            </form>
          </Custom.Col3>
        </Custom.Row>
        <Custom.CopyRight>
          <div>
            <Link to="#">
              <img src={`${process.env.REACT_APP_PORT}/images/icons/icon-pay-01.png`} alt="ICON-PAY" />
            </Link>
            <Link to="#">
              <img src={`${process.env.REACT_APP_PORT}/images/icons/icon-pay-02.png`} alt="ICON-PAY" />
            </Link>
            <Link to="#">
              <img src={`${process.env.REACT_APP_PORT}/images/icons/icon-pay-03.png`} alt="ICON-PAY" />
            </Link>
            <Link to="#">
              <img src={`${process.env.REACT_APP_PORT}/images/icons/icon-pay-04.png`} alt="ICON-PAY" />
            </Link>
            <Link to="#">
              <img src={`${process.env.REACT_APP_PORT}/images/icons/icon-pay-05.png`} alt="ICON-PAY" />
            </Link>
          </div>
          <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" rel="noopener noreferrer">Colorlib</Link>
          </p>
        </Custom.CopyRight>
      </Custom.Container>
    </Custom.Footer>
  )
}