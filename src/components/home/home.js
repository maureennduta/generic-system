import React from "react";
import { Button, Content, Form, Tile } from "carbon-components-react";
import NavHeader from "../header/header";
import Footer from "../footer/footer";
import iPi from "../../IPIndie_Logo.png";

function File() {
  return (
    <div className="cds--grid cds--grid--narrow">
      <NavHeader />
      <Content>
        <div>
          <Form className="form">
            <div className="column sm-50 sm-25">
              <div className="img">
                <img classname="logo" src={iPi} alt="ipi"></img>
              </div>

              <h2 className="h2">Intellectual Property Investment</h2>
            </div>

            <div className="column sm-50 lg-25">
              <Tile light={false}>
                <h3>ABOUT IP. Indie</h3>
                <br />
                I.P. Indie Your own IPO.
                <br />
                I.P Indie is a platform that connects Independent creators with
                Independent investors, from anywhere in the world, with no
                middlemen involved. Pulp Fiction, the film, IsThis Is It, the
                music album, Legally Blonde, the book: These are stellar
                examples of what independent creators can produce with a little
                bit of support and a little bit of backing.
                <br />
                If you would like to be a part of the next great independent
                work, create an I.P. Indie account today. I.P. Indie
                Intellectual Property Offerings: Your own IPO.
              </Tile>
              <br />
              <br />
              <Tile>
                <h4>HOW IT WORKS</h4>
                <br />
                IPI is a platform that allows users to buy or sell the rights to
                any piece of intellectual property, online, from anywhere in the
                world.
              </Tile>
            </div>
            <div class="column sm-50 lg-25" className="buttons">
              <Button classname="primary" href="/Investor">
                Create Investor Account
              </Button>
              <Button classname="secondary" kind="secondary" href="/Creator">
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
