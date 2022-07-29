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
import "./creator.scss";

function Creator() {
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
        <div className="creator-form">
          <Form onSubmit={handleSubmit} className="row justify-center">
            <div className="column sm-50 lg-25">
              <Tile light={false} className="tile">
                <h3>ABOUT I.P. Indie</h3>
                <br />
                <p>
                  Thank you so much for joining us.
                  <br />
                  <br />
                  Our platform is not up yet!
                  <br />
                  <br />
                  BUT! You must sign up for our launch below.
                  <br />
                  <br />
                  We are here to connect you and your Brand to the widest
                  selection of Private Investors that history has ever seen,
                  from around the world, with no middlemen.
                  <br />
                  This is going to be a big deal. A very big deal.
                  <br />
                  <br />
                  We would love nothing more than to empower you.
                  <br />
                  <br />
                  To receive our launch timeline, Please sign up below.
                  <br />
                  <br />
                  Thank you.
                  <br />
                  <em>~ The Team at I.P. Indie</em>
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
      </Content>
      <Footer />
    </div>
  );
}

export default Creator;
