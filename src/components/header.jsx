import React from "react";
import graduates from "../Assets/graduates.jpeg";

export const Header = (props) => {
  return (
    <header id="header">
      <div style={{backgroundColor:"aliceblue",width:"100%",height:"100vh"}}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text " >
                <h1 style={{position:"relative",color:"blue",top:"-250px",marginLeft:"200px",}}>
                  {/*{props.data ? props.data.title : "Loading"}*/}
                  LOOKING FOR OVERSEAS EDUCATION WITH SCHOLARSHIP? WE CAN HELP YOU WITH THAT
                </h1>
                <img src={graduates} alt="" style={{mixBlendMode:"multiply",position:"absolute",right:"420px",top:"160px"}}  />
                {/*<p>{props.data ? props.data.paragraph : "Loading"}</p>*/}
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll " 
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
