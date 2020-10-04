import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

const Home = ({name, paragraph, authorImage})=>{
    const props = useSpring({config:{duration:1000},opacity:1, from: {opacity:0}})

    const [,setY]= useSpring(()=>({y:0}));

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop)
    const [toggle, setToggle] = useState()
    return(
    <div>
        <div className="home_container">

            <div className="home_head_wrapper">
            <animated.h1 style={props}> Hi, I 'm <br></br> <span>{name}</span></animated.h1>
            <p>{paragraph}</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Author"/>
                <div className="bg">

                </div>
            </div>
            
        </div>
        {
         showScroll
         ?
             <button
                 className={"backToTop"}
                 onClick={()=>{
                     setY({
                         y: 0,
                         reset: true,
                         from: {y: window.scrollY},
                         onFrame: props => window.scroll(0,props.y)

                     });
                 }}

                 style={{
                     position:"fixed",
                     zIndex: "1",
                     bottom:1,
                     right:1,
                     marginRight:"5%",
                     marginBottom:"5%",
                     border:"none",
                     backgroundColor: "navy",
                     color:"white",
                     cursor:"pointer",
                     padding: "1rem",



                 }}

             >
                 back to top
             </button>
             :
             ""
        }

    </div>
    );
}

export default Home;