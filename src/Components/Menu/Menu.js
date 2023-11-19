import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './Menu.css';


function Menu() {
  const linkStyle = {
    fontWeight: 'bold'
  };
  const linkStyle2 = {
    fontWeight: 'bold',
    marginLeft: '15px',
    fontSize: '20px',
  };
    return(
      <body>
      <div className="container">
      {/* Aside left */}
        <aside className="left-aside">
          <div>
            <div className="Link-name">
              <a href="#">Account</a> / <a href="#">Home</a>
            </div>
            <div className="Personal">
              <div className="avatar">BD</div>
              <p>Hi, Bui</p>
            </div>
            <div className="list">
              <ul className="list__link">
                  <li>
                      <a href="#"><i class="bi bi-archive"></i><span style={linkStyle}>Order History</span></a>
                  </li>
                  <li>
                      <a href="#"><i class="bi bi-stars"></i><span style={linkStyle}>My Points & Rewards</span></a>
                  </li>
                  <li>
                      <a href="#"><i class="bi bi-cash-stack"></i><span style={linkStyle}>My Rewards Credit Cards</span></a>
                  </li>
                  <li>
                  <a href=""><i class="bi bi-person"></i><span className="Manage-account" span style={linkStyle}>Manage Account</span></a>
                  </li>
                  <ul className="account">
                      <li><a href="">Personal Info</a></li>
                      <li><a href="">Saved cards</a></li>
                      <li><a href="">Shipping Addresses</a></li>
                      <li><a href="">Change Password</a></li>
                      <li><a href="">Communication Preferences</a></li>
                  </ul>
                  <i class="bi bi-wallet"></i><span style={linkStyle2}>Gift Cards</span>
                  <ul className="gift">
                      <li><a href="">Check Gift Card balance</a></li>
                      <li><a href="">Reload Gift Card</a></li>
                  </ul>
                  <div className="information">
                      <a href="#"><i class="bi bi-info-circle"></i><span style={linkStyle2}>Customer Service</span></a>
                  </div>
              </ul>
            </div>
          </div>
        </aside>
        {/*  Middle section */}
        <div className="middle__section">
          <div className="order__history">
            <div className="title_1">
              <h5>
                <i className="fa-solid fa-box-archive"></i> Order History
                <i className="fa-solid fa-angle-right"></i>
              </h5>
            </div>
            <div className="order__description">
              <p>You have no order</p>
            </div>
          </div>
        </div>
        {/* Aside right */}
        <aside className="right-aside">
          <div className="points__rewards">
            <div className="title_2">
              <h5>
                <i className="fa-solid fa-star"></i> MY POINTS & REWARDS
                <i className="fa-solid fa-angle-right"></i>
              </h5>
            </div>
            <div className="reward__description">
              <p>
                <span style={linkStyle}>Core <i className="fa-solid fa-star"></i> Rewards Member</span>
              </p>
              <div className="rewards__available">
                <div className="money__avatar">$0</div> 
                <p>
                  <span style={linkStyle}>in rewards available.</span>
                  <br />
                  Rewards are redeemed in checkout.
                </p>
              </div>
            </div>
          </div>
          <div className="CreditCard">
            <div className="title_3">
              <h5>
                <i className="fa-solid fa-money-bills"></i> MY REWARDS CREDIT CARDS<i className="fa-solid fa-angle-right"></i>
              </h5>
            </div>
            <div className="creditcard__description">
              <p>Apply for a <span style={linkStyle}>Gap Good Rewards Credit Card</span>
                and earn 5 points per $1 spent.
              </p>
              <a href="">
                <figure>*credit card img*</figure>
              </a>
              <p>*Pending approval</p>
            </div>
          </div>
        </aside>
      </div>
    </body>
    )
}

export default Menu;