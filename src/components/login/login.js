import React, { useState } from "react";
import {
  Button,
  Content,
  Form,
  Tile,
  TextInput,
} from "carbon-components-react";
// import NavHeader from "../header/header";
// import Footer from "../footer/footer";
// import iPi from "../../IPIndie_Logo.png";

function Login() {
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${Username} and the email was ${Address}`);
    setUsername("");
    setAddress("");
  };
  return (
    <div className="cds--grid cds--grid--narrow">
      {/* <NavHeader /> */}
      <Content>
        <div>
          <Form className="form">
            <div className="column sm-50 sm-25">
              {/* <div className="img">
                <img class="logo" src={iPi} alt="ipi"></img>
              </div> */}

              <h2 className="h2">LOGIN</h2>
            </div>
            <div className="column sm-50 lg-25">
              <Tile light={false}>
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
              </Tile>
            </div>
            <div class="column sm-50 lg-25" className="buttons">
              <Button size="field" classname="primary" href="/Landing">
                Login
              </Button>
              <Button size="field" classname="secondary" href="/Signup">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Content>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
