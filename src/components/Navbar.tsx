import  { useState,useEffect } from "react";
import navbarConstant from "../constants/navbar.constant";


const Navbar = () => {
   const [active,setActive] = useState<boolean>(false);

   const handleScrollIntoView = (path : string) => {
    const allLinkItem = document.querySelectorAll('ul a div');
    const allSection = document.querySelectorAll('section');
    allLinkItem.forEach((item)=>item.classList.remove('active-scroll-spy'));
    allSection.forEach((section,idx) => {
         if(section.getAttribute('id')?.includes(path) && allLinkItem[idx].getAttribute('data-to-scrollspy-id')?.includes(path)) {
            section.scrollIntoView({
                behavior:'smooth',
                block:"nearest"
            });
            allLinkItem[idx].classList.add('active-scroll-spy');
         }
    })
}

   
   useEffect(() => {
    if(typeof window !== 'undefined') {
        
        window.addEventListener('scroll' , function() {
            if(this.scrollY < 100) {
                const allItemNavbarLink = document.querySelectorAll('ul a div');
                allItemNavbarLink.forEach((item)=>item.classList.remove("active-scroll-spy"));
                console.log("test");
            }
        });
    }

    }, []);

    return (
        <nav className="navbar">
           <div className="navbar--content">
            <a href="javascript:void(0)" id="logo">Talentive</a>
                <ul className={`navbar--links ${active && "active"}`}>
                    {navbarConstant.map((item:any,idx:number)=>(
                       <a onClick={() => handleScrollIntoView(item.path)} href={item.path} key={idx}>
                        <div  data-to-scrollspy-id={item.path.split("#")[1]}>
                          {item.title}
                        </div>
                      </a>
                    ))}
                </ul>
                <button onClick={()=>setActive(!active)} id="hamburger-menu">
                    <i className="ri-menu-line"></i>
                </button>
           </div>
        </nav>
    )
}

export default Navbar;