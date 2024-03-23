import { FilledButton, SectionTitle } from "../../components";
import aboutImage from "../../assets/about.jpg";
import "./about.css";

const AboutSection = () => {
    return (
        <section className="about--section">
          <SectionTitle title="About Us"/>
          <div className="about--section-content">
            <div className="about--section-image">
               <img src={aboutImage} alt="about image"/>
            </div>
            <div className="about--section-description">
               <h3>Who we are?</h3>
               <div className="about-section-description-sentence">
                <p>At Talentive, we believe in the power of creativity to transform ideas into impactful experiences. Our passion for innovation drives us to push boundaries and deliver exceptional results for our clients.</p>
                <p>Our mission is to [mention your mission statement or core values, e.g., "empower businesses with compelling design solutions" or "inspire creativity and innovation through exceptional visuals"]. We strive to be a trusted partner for our clients, helping them achieve their goals and stand out in a competitive market.</p>
               </div>
               
               <FilledButton title="Read More" />
            </div>
          </div>
        </section>
    )
}

export default AboutSection;