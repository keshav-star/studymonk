import React from 'react'
import { Button } from "./components/Button/Button";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.png";
import Footer from './components/Footer';
import search from "./assets/search.svg"
export default function Welcome() {
  return (
    <div className="desktop">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <img
              className="group"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/group-4@2x.png"
            />
            <div className="flex-container">
              <div className="text">
                <span className="span">
                  Our AI powered Technology helps <br />
                </span>
              </div>
              <div className="text">
                <span className="span">you to find the best shortlisted</span>
              </div>
            </div>
          </div>
          <div className="frame-3">
            <img
              className="vector"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/vector-4.svg"
            />
            <div className="flex-container-2">
              <div className="span-wrapper">
                <span className="span">
                  Realtime Chat helps to connect <br />
                </span>
              </div>
              <div className="span-wrapper">
                <span className="span">the people across the community</span>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <img
              className="img"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/group@2x.png"
            />
            <div className="flex-container-3">
              <div className="text-2">
                <span className="span">
                  Pay As You Go policy
                  <br />
                </span>
              </div>
              <div className="text-2">
                <span className="span">only pay for successful hires</span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="frame-5">
            <div className="frame-6">
              <img
                className="vector-2"
                alt="Vector"
                src={logo}
              />
            </div>
            <div className="navbar">
              <div className="text-wrapper-2"><a href=""> Home </a></div>
              <div className="text-wrapper-2"><a href=""> Services </a></div>
              <div className="text-wrapper-2"><a href=""> Contact</a></div>
              <div className="text-wrapper-2"><a href=""> About</a></div>
              <button className="frame-7">
                  <Link to="/signin">Sign In</Link>
              </button>
             <div className="search">
             <input type="text" name="Search" id="search" placeholder='Searched ' />
              <Link to="/search"><button><img src={search} alt="" width="12px"/></button></Link>
             </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="flex-container-4">
                  <div className="text-3">
                    <span className="text-wrapper-3">
                      Tools
                      for&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hiring{" "}
                      <br />
                    </span>
                  </div>
                  <div className="text-4">
                    <span className="text-wrapper-3"> that makes hustle easier</span>
                  </div>
                </div>
                <img
                  className="working-remotely-bro"
                  alt="Working remotely bro"
                  src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/working-remotely-bro@2x.png"
                />
              </div>
            </div>
            <p className="cutting-edge">
              Cutting-edge technologies for recruiters seeking <br />
              unconventional approaches
            </p>
            <div className="overlap">
              <div className="your-email-wrapper">
                <div className="your-email">Your&nbsp;&nbsp;email</div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-8">
                  <div className="text-wrapper-4">Join community</div>
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/vector-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-2">
                <div className="frame-9" />
                <div className="frame-10" />
                <div className="image-wrapper">
                  <img
                    className="image"
                    alt="Image"
                    src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/image-3@2x.png"
                  />
                </div>
              </div>
              <p className="element-already-joined">
                <span className="text-wrapper-5">+42k </span>
                <span className="text-wrapper-6">already joined the community</span>
              </p>
            </div>
            <img
              className="interview-pana"
              alt="Interview pana"
              src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/interview-pana@2x.png"
            />
            <img
              className="recommendation"
              alt="Recommendation"
              src="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/recommendation-letter-bro@2x.png"
            />
          </div>
        </div>
        <div className="testimonials-left">
          <div className="overlap-3">
            <div className="rectangle" />
            <Testimonial
              amazingWorkWellClassName="testimonial-2"
              className="testimonial-instance"
              developerSonyClassName="design-component-instance-node-2"
              janeCooperClassName="testimonial-3"
              platform="desktop"
              testimonialContentClassName="design-component-instance-node"
              text="This is a great platform. It helped me a lot. Thank you :)"
              text1="Tech. HR, Sony"
            />
            <Testimonial
              amazingWorkWellClassName="testimonial-6"
              className="testimonial-4"
              developerSonyClassName="testimonial-7"
              ellipse="https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/ellipse-1@2x.png"
              janeCooperClassName="design-component-instance-node-2"
              platform="desktop"
              testimonialContentClassName="testimonial-5"
              text="Amazing Work! Well done!"
              text1="HR assisst., Facebook"
              text2="Jacob Jones"
            />
          </div>
          <div className="testimonials-right">
            <div className="heading">
              <div className="flex-container-5">
                <div className="text-5">
                  <span className="text-wrapper-7">
                    What our user <br />
                  </span>
                </div>
                <div className="text-5">
                  <span className="text-wrapper-7">Says about us</span>
                </div>
              </div>
            </div>
            <p className="all-recruiters-get">
              All recruiters get access to all the services and also the performance score of candidate by AI.
              <br />
              You will also gain entry to an exclusive Discord community dedicated to addressing your queries and
              fostering discussions.
            </p>
            <Button
              buttonTextClassName="design-component-instance-node-2"
              className="button-instance"
              dark={false}
              icon={false}
              platform="desktop"
              text="Learn More"
            />
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}
