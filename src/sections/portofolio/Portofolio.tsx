import { SectionTitle } from "../../components";
import imageConstant from "../../constants/image.constant";
import "./portofolio.css";

const menus = [
    "Website",
    "Arts",
    "Videos",
    "Photos"
];

const PortofolioSection = () =>{ 
    return (
        <section className="portofolio--section">
            <SectionTitle title="Our Portofolio"/>

            <div className="portofolio--section-content">
                <div className="portofolio--section-menus">
                   {menus.map((item:string,idx:number) =>(
                      <button className={`${idx==0 ? "active":"btn-menus"}`} key={idx}>{item}</button>
                   ))}

                </div>
                <div className="portofolio--section-items">
                    {imageConstant.map((item:any,idx:number)=>(
                        <div className="portofolio--section-item">
                            <div></div>
                            <img src={item} alt={"portoflio"} key={idx}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortofolioSection;