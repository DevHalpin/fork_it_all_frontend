import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/User_Dashboard.scss";

function User_Dashboard() {
  return (
    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <span class="glyphicon glyphicon-thumbs-up"></span>
                  Dashboard aka The Pantry!
                </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-grey btn-lg" role="button">
                      <span class="glyphicon glyphicon-cog glyphsize red"></span>{" "}
                      Example Button{" "}
                      <span class="glyphicon glyphicon-cog black"></span>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Add <span class="glyphicon glyphicon-plus green"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      edit <span class="glyphicon glyphicon-edit yellow"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Delete <span class="glyphicon glyphicon-minus red"></span>
                      Customer
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Marketing{" "}
                      <span class="glyphicon glyphicon-envelope"></span>
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Reporting{" "}
                      <span class="glyphicon glyphicon-signal"></span>
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Database{" "}
                      <span class="glyphicon glyphicon-book"></span>
                    </a>
                    <a href="#www.example.com" class="btn btn-dblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Customer Export - CSV{" "}
                      <span class="glyphicon glyphicon-export"></span>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-dred btn-lg" role="button">
                      <span class="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Add <span class="glyphicon glyphicon-plus green"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" class="btn btn-dred btn-lg" role="button">
                      <span class="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Edit <span class="glyphicon glyphicon-edit yellow"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" class="btn btn-dred btn-lg" role="button">
                      <span class="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Delete <span class="glyphicon glyphicon-minus red"></span>
                      Appointment
                    </a>
                    <a href="#www.example.com" class="btn btn-dred btn-lg" role="button">
                      <span class="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      View <span class="glyphicon glyphicon-eye-open"></span>
                      Diary
                    </a>
                    <a href="#www.example.com" class="btn btn-dred btn-lg" role="button">
                      <span class="glyphicon glyphicon-calendar glyphsize"></span>{" "}
                      Manage Diary
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-dgreen btn-lg" role="button">
                      <span class="glyphicon glyphicon-signal glyphsize green"></span>{" "}
                      Business Reports{" "}
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-mred btn-lg" role="button">
                      <span class="glyphicon glyphicon-envelope glyphsize"></span>{" "}
                      Postage Manager
                    </a>
                    <a href="#www.example.com" class="btn btn-mred btn-lg" role="button">
                      <span class="glyphicon glyphicon-home glyphsize"></span>{" "}
                      Postcode Setup
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-orange btn-lg" role="button">
                      <span class="glyphicon glyphicon-bullhorn glyphsize"></span>{" "}
                      Announcement Manager
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-lblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-list glyphsize blue"></span>{" "}
                      <span class="blue">Category Manager</span>
                    </a>
                    <a href="#www.example.com" class="btn btn-lblue btn-lg" role="button">
                      <span class="glyphicon glyphicon-list-alt glyphsize blue"></span>{" "}
                      <span class="blue">SubCategory Manager</span>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-burnt btn-lg" role="button">
                      <span class="glyphicon glyphicon-tint glyphsize yellow"></span>{" "}
                      Colour Manager
                    </a>
                    <a href="#www.example.com" class="btn btn-burnt btn-lg" role="button">
                      <span class="glyphicon glyphicon-cog glyphsize yellow"></span>{" "}
                      Swatch Setup
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-green btn-lg" role="button">
                      <span class="glyphicon glyphicon-dashboard glyphsize dgreen"></span>{" "}
                      Dashboard
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-lime btn-lg" role="button">
                      <span class="glyphicon glyphicon-globe glyphsize dgreen"></span>{" "}
                      <span class="dgreen">Website Manager</span>
                    </a>
                    <a href="#www.example.com" class="btn btn-lime btn-lg" role="button">
                      <span class="glyphicon glyphicon-cog glyphsize dgreen"></span>{" "}
                      <span class="dgreen">SEO Setup</span>
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-mokka btn-lg" role="button">
                      <span class="glyphicon glyphicon-triangle-right glyphsize green"></span>
                      <span class="glyphicon glyphicon-home glyphsize choc"></span>{" "}
                      Delivery Setup
                    </a>
                    <a href="#www.example.com" class="btn btn-mokka btn-lg" role="button">
                      <span class="glyphicon glyphicon-tasks glyphsize choc"></span>{" "}
                      Departments Setup
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-gbp glyphsize lilac"></span>{" "}
                      Payments Manager
                    </a>
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-piggy-bank glyphsize mblue"></span>{" "}
                      Paypal System
                    </a>
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize"></span>{" "}
                      Insurance Claims
                    </a>
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-check glyphsize green"></span>{" "}
                      Invoices Paid
                    </a>
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-remove glyphsize red"></span>{" "}
                      Invoices Canceled
                    </a>
                    <a href="#www.example.com" class="btn btn-dpurple btn-lg" role="button">
                      <span class="glyphicon glyphicon-saved glyphsize lilac"></span>{" "}
                      Invoices Archived
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-purple btn-lg" role="button">
                      <span class="glyphicon glyphicon-shopping-cart glyphsize black"></span>{" "}
                      Shopping Cart
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-lilac btn-lg" role="button">
                      <span class="glyphicon glyphicon-file glyphsize purple"></span>{" "}
                      Product Manager
                    </a>
                    <a href="#www.example.com" class="btn btn-lilac btn-lg" role="button">
                      <span class="glyphicon glyphicon-text-width glyphsize"></span>{" "}
                      Product Sizes
                    </a>
                    <a href="#www.example.com" class="btn btn-lilac btn-lg" role="button">
                      <span class="glyphicon glyphicon-text-width glyphsize purple"></span>{" "}
                      Sizes Manager
                    </a>
                    <a href="#www.example.com" class="btn btn-lilac btn-lg" role="button">
                      <span class="glyphicon glyphicon-th-large glyphsize"></span>{" "}
                      Stock Manager
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <a href="#www.example.com" class="btn btn-yellow btn-lg" role="button">
                      <span class="glyphicon glyphicon-user glyphsize orange"></span>{" "}
                      <span class="orange">User Setup</span>
                    </a>
                    <a href="#www.example.com" class="btn btn-yellow btn-lg" role="button">
                      <span class="glyphicon glyphicon-question-sign glyphsize orange"></span>{" "}
                      <span class="orange">Vaccination Manager</span>
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
