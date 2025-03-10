import "./contentbox.css";
import Inbox from "./inbox";



function Contenebox({devdata}) {
  let name = devdata.mainname
  
  let data1 = devdata.data1
  let data2 = devdata.data2
  let data3 = devdata.data3
  let data4 = devdata.data4

  return (
    <>
      <div className="main-box">
        <div className="content-box">
          <div className="about-text">
            <h3 className="about-me" id="about-me">
              {name}
            </h3>
          </div>
          <div className="about-box">
            <Inbox data={data1}></Inbox>
            <Inbox data={data2}></Inbox>
            <Inbox data={data3}></Inbox>
            <Inbox data={data4}></Inbox>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contenebox;
