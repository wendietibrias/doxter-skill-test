import { SectionTitle } from "../../components";
import serviceConstant from "../../constants/service.constant";
import "./service.css";

const ServiceSection = () => {
    return (
        <section className="service--section">
            <SectionTitle title="Our Services"/>
            <div className="service--section-items">
                {serviceConstant.map((item: any,idx:number)=> (
                    <div className="service--section--item" key={idx}>
                        <i className={item.icon}/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection;