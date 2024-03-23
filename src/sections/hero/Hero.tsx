import "./hero.css";
import heroImage from "../../assets/hero.jpg";
import { FilledButton } from "../../components";

const HeroSection = () => {

    return (
        <section className="hero--section">
             <div className="hero--section-description">
                 <h1>Let's Grow Your <span>Bussiness</span> <br/> With <span>Talentive</span></h1>
                 <p>Talentive will help you to grow your bussiness with advertising video,Website, Photo studio production, and Arts.</p>
                 <FilledButton title="See More"/>
             </div>
             <div className="hero--section-image">
                 <img src={heroImage} alt="hero image"/>
             </div>
        </section>
    )
}

export default HeroSection;