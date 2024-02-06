import React from "react";
import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={0.5}
          delay={0.3}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <h3 className="contact__content__header-text">Let's Talk</h3>
              <div>
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="desc"
                  className="inputDesc"
                  type="text"
                  rows={5}
                />
                <label htmlFor="desc" className="descLabel">
                  Messagge
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
        <Animate
          play
          duration={0.5}
          delay={0.3}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__contactInfo">
            <div>
              <h3 className="contact__content__header-text">Adress</h3>
              <p> 46049 Oberhausen </p>
            </div>
            <div>
              <h3 className="contact__content__header-text">Email</h3>

              <p>
                <a href="mailto:drcetmi@gmail.com">drcetmi@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className="contact__content__header-text">Phone</h3>
              <p>+49 152 321 54582</p>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
