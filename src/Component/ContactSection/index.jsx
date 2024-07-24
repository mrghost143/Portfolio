import { AosWrapper, HightlightButton, SectionHeading } from "../Common/Wrapper";
import "./contact.scss"

const Contact = () => {
  return (
    <section id='contact' className="section">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>What’s Next?</SectionHeading>
        <div className="section-container">
          <h3 className="contact-headline bright-text">
            Get In Touch
          </h3>
          <p className="contact-info">
            Although I’m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <HightlightButton>
            Say Hello
          </HightlightButton>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Contact