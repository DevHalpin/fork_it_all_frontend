import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/User_Dashboard.scss";

function User_Dashboard() {
  return (
    <div className="container">
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <span className="glyphicon glyphicon-thumbs-up"></span>
                  Dashboard aka The Pantry!
                </h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-grey btn-lg" role="button">
                      <span className="glyphicon glyphicon-cog glyphsize red"></span>{" "}
                      Example Button{" "}
                      <span className="glyphicon glyphicon-cog black"></span>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Add <span className="glyphicon glyphicon-plus green"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      edit <span className="glyphicon glyphicon-edit yellow"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Delete <span className="glyphicon glyphicon-minus red"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Marketing{" "}
                      <span className="glyphicon glyphicon-envelope"></span>
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Reporting{" "}
                      <span className="glyphicon glyphicon-signal"></span>
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Database{" "}
                      <span className="glyphicon glyphicon-book"></span>
                    </a>
                    <a href="#www.example.com" className="btn btn-dblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Export - CSV{" "}
                      <span className="glyphicon glyphicon-export"></span>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-dred btn-lg" role="button">
                      <span className="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Add <span className="glyphicon glyphicon-plus green"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" className="btn btn-dred btn-lg" role="button">
                      <span className="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Edit <span className="glyphicon glyphicon-edit yellow"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" className="btn btn-dred btn-lg" role="button">
                      <span className="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Delete <span className="glyphicon glyphicon-minus red"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" className="btn btn-dred btn-lg" role="button">
                      <span className="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      View <span className="glyphicon glyphicon-eye-open"></span>
                      Diary
                    </a>
                    <a href="#www.example.com" className="btn btn-dred btn-lg" role="button">
                      <span className="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Manage Diary
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-dgreen btn-lg" role="button">
                      <span className="glyphicon glyphicon-signal glyphsize green"></span>{" "}
                      Business Reports{" "}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-mred btn-lg" role="button">
                      <span className="glyphicon glyphicon-envelope glyphsize"></span>{" "}
                      Postage Manager
                    </a>
                    <a href="#www.example.com" className="btn btn-mred btn-lg" role="button">
                      <span className="glyphicon glyphicon-home glyphsize"></span>{" "}
                      Postcode Setup
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-orange btn-lg" role="button">
                      <span className="glyphicon glyphicon-bullhorn glyphsize"></span>{" "}
                      Announcement Manager
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-lblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-list glyphsize blue"></span>{" "}
                      <span className="blue">Category Manager</span>
                    </a>
                    <a href="#www.example.com" className="btn btn-lblue btn-lg" role="button">
                      <span className="glyphicon glyphicon-list-alt glyphsize blue"></span>{" "}
                      <span className="blue">SubCategory Manager</span>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-burnt btn-lg" role="button">
                      <span className="glyphicon glyphicon-tint glyphsize yellow"></span>{" "}
                      Colour Manager
                    </a>
                    <a href="#www.example.com" className="btn btn-burnt btn-lg" role="button">
                      <span className="glyphicon glyphicon-cog glyphsize yellow"></span>{" "}
                      Swatch Setup
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-green btn-lg" role="button">
                      <span className="glyphicon glyphicon-dashboard glyphsize dgreen"></span>{" "}
                      Dashboard
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-lime btn-lg" role="button">
                      <span className="glyphicon glyphicon-globe glyphsize dgreen"></span>{" "}
                      <span className="dgreen">Website Manager</span>
                    </a>
                    <a href="#www.example.com" className="btn btn-lime btn-lg" role="button">
                      <span className="glyphicon glyphicon-cog glyphsize dgreen"></span>{" "}
                      <span className="dgreen">SEO Setup</span>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-mokka btn-lg" role="button">
                      <span className="glyphicon glyphicon-triangle-right glyphsize green"></span>
                      <span className="glyphicon glyphicon-home glyphsize choc"></span>{" "}
                      Delivery Setup
                    </a>
                    <a href="#www.example.com" className="btn btn-mokka btn-lg" role="button">
                      <span className="glyphicon glyphicon-tasks glyphsize choc"></span>{" "}
                      Departments Setup
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-gbp glyphsize lilac"></span>{" "}
                      Payments Manager
                    </a>
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-piggy-bank glyphsize mblue"></span>{" "}
                      Paypal System
                    </a>
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Insurance Claims
                    </a>
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-check glyphsize green"></span>{" "}
                      Invoices Paid
                    </a>
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-remove glyphsize red"></span>{" "}
                      Invoices Canceled
                    </a>
                    <a href="#www.example.com" className="btn btn-dpurple btn-lg" role="button">
                      <span className="glyphicon glyphicon-saved glyphsize lilac"></span>{" "}
                      Invoices Archived
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-purple btn-lg" role="button">
                      <span className="glyphicon glyphicon-shopping-cart glyphsize black"></span>{" "}
                      Shopping Cart
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-lilac btn-lg" role="button">
                      <span className="glyphicon glyphicon-file glyphsize purple"></span>{" "}
                      Product Manager
                    </a>
                    <a href="#www.example.com" className="btn btn-lilac btn-lg" role="button">
                      <span className="glyphicon glyphicon-text-width glyphsize"></span>{" "}
                      Product Sizes
                    </a>
                    <a href="#www.example.com" className="btn btn-lilac btn-lg" role="button">
                      <span className="glyphicon glyphicon-text-width glyphsize purple"></span>{" "}
                      Sizes Manager
                    </a>
                    <a href="#www.example.com" className="btn btn-lilac btn-lg" role="button">
                      <span className="glyphicon glyphicon-th-large glyphsize"></span>{" "}
                      Stock Manager
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="#www.example.com" className="btn btn-yellow btn-lg" role="button">
                      <span className="glyphicon glyphicon-user glyphsize orange"></span>{" "}
                      <span className="orange">User Setup</span>
                    </a>
                    <a href="#www.example.com" className="btn btn-yellow btn-lg" role="button">
                      <span className="glyphicon glyphicon-question-sign glyphsize orange"></span>{" "}
                      <span className="orange">Vaccination Manager</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default User_Dashboard;
