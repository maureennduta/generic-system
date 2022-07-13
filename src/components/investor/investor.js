import React, { useState } from "react";
import {
  Content,
  Form,
  Tile,
  TextInput,
  Button,
} from "carbon-components-react";
import NavHeader from "../header/header";
import Footer from "../footer/footer";
import "./investor.scss";

const Investor = () => {
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${Username} and the email was ${Address}`);
    setUsername("");
    setAddress("");
  };

  return (
    <div className="container fill">
      <NavHeader />
      <Content>
        <div className="investor-form">
          <Form onSubmit={handleSubmit} className="row justify-center">
            <div className="column sm-50 lg-25">
              <Tile light={false} className="tile">
                <h3>ABOUT IPI</h3>
                <br />
                <p>
                  Thank you so much for joining us.
                  <br />
                  <br />
                  The iPi platform is not up just yet, BUT! You must sign up for
                  the launch below.
                  <br />
                  We are here to connect you to the newest and greatest Assets
                  in the Intellectual Property, from around the world, and with
                  no middlemen.
                  <br />
                  <br />
                  This is going to be a big deal. See you soon?
                </p>
              </Tile>
            </div>
            <div className="column sm-50 lg-25" class="input">
              <TextInput
                helperText=""
                id="name"
                invalidText="A valid name is required"
                labelText="Name:"
                placeholder="Enter Name"
                required
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                helperText=""
                id="address"
                invalidText="A valid email is required"
                labelText="Email Address:"
                placeholder="Enter Email Address"
                required
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button
                size="field"
                kind="primary"
                type="submit"
                data-testid="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <Footer />
      </Content>
    </div>
  );
};

export default Investor;
