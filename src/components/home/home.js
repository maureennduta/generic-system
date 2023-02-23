import React from "react";
import { Button, Content, Form, Tile } from "carbon-components-react";
import NavHeader from "../header/header";
import Footer from "../footer/footer";
import gs from "../../gs.png";

function File() {
  return (
    <div className="cds--grid cds--grid--narrow">
      <NavHeader />
      <Content>
        <div>
          <Form className="form">
            <div className="column sm-50 sm-25">
              <div className="img">
                <img class="logo" src={gs} alt="gs"></img>
              </div>

              <h2 className="h2">Generic System</h2>
            </div>

            <div className="column sm-50 lg-25">
              <Tile light={false}>
                <h3>GENERIC</h3>
                <br />
                <p>
                  <br />
                  <br />
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  <br />
                  <br />
                  If you would like to be a part of the next great independent
                  work, create an I.P. Indie account today.
                  <br />
                  <br />
                  <h4>I.P. Indie</h4>
                  Intellectual Property Offerings: Your own IPO.
                </p>
              </Tile>
              <br />
              <br />
              <Tile>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Tile>
            </div>
            <div class="column sm-50 lg-25" className="buttons">
              <Button size="field" classname="primary" href="/Investor">
                Create Investor Account
              </Button>
              <Button
                size="field"
                classname="secondary"
                kind="secondary"
                href="/Creator"
              >
                Create Creator Account
              </Button>
            </div>
          </Form>
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default File;
