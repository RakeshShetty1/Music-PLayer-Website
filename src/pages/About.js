import {faHome } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About() {
  return (
    <>
      <div className="main" style={{ backgroundColor: "#f3e2f8" }}>
        <div>
          <nav
            className="navbar navbar-expand-lg sticky-top"
            style={{
              backgroundColor: "#efbbff",
              borderRadius: "5px 5px 20px 20px",
            }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KPiPXerJXj5tnVBElVXrROMAoeg8txSszQ&usqp=CAU"
                  alt
                  width={30}
                  height={30}
                />
              </a>
              <a className="navbar-brand" href="#" style={{ color: "#800080" }}>
                <b>SoundPulse</b>
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    href="http://localhost:3000/home"
                    style={{ color: "#800080", textDecoration: "none" }}
                  >
                    <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Home</Tooltip>}
                    placement="bottom"
                  >
                    <button
                      className=" btn"
                      type="button"
                      style={{
                        color: "#efbbff",
                        background: "#660066",
                        marginRight: 2,
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faHome} />
                    </button>
                  </OverlayTrigger>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col">
            <header style={{ color: "black" }}>
              <h1
                className="titles"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#660066",
                }}
              >
                Welcome to Our Website
              </h1>
            </header>
            <br />
            <h1
              className="titles"
              style={{
                color: "black",
                alignItems: "center",
                textAlign: "center",
                color: "#660066",
              }}
            >
              SoundPulse
            </h1>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Welcome to the world of the MUSIC!
              <p>
                SoundPulse is India's largest commercial music streaming service
                with over 200 monthly users. It was launched in April 2022 by
                our team and provides both Indian and international music
                content. With the Soundpulse music and podcast app, you can play
                millions of songs, albums and original podcasts for free. Stream
                music and podcasts, discover albums, playlists or even single
                songs for free on your mobile or tablet.
              </p>
            </div>

            <h1
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#660066",
              }}
              className="titles justify-content-center"
            >
              About Us
            </h1>
            <div
              className="row justify-content-center "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-sm-6 col-md-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="images/rakesh.jpeg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title" style={{ color: "#660066" }}>
                      {" "}
                      Rakesh Shetty
                    </h5>
                    <p ><i class="fa-solid fa-envelope"></i> mrshetty6969@gmail.com</p>
              
                    <p className="card-text">
                      <i class="fa-solid fa-phone"></i>+91-8291583639
                    </p>
                  </div>
                </div>
              </div>
              <div className="column col-sm-6 col-md-3 ">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="images/shubhashri.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body " style={{ textAlign: "center" }}>
                    <h5 className="card-title " style={{ color: "#660066" }}>
                      Shubhashri Patil
                    </h5>
                    <p><i class="fa-solid fa-envelope"></i> shubhashribpatil@gmail.com</p>
                   

                    <p className="card-text">
                      <i class="fa-solid fa-phone"></i>+91-9834309365
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <footer
                className="row align-items-center"
                style={{ justifyContent: "center" }}
              >
                © www.soundpulse.com. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
