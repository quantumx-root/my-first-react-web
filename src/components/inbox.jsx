import Progress from "./motion";
import "./contentbox.css";



function Inbox({data}){
      return(
        <>
        <div className="aboutunderstand">
              <h3 className="sub-name">{data.subname}</h3>
              <div className="orogressclass">
                <span className="name-sub"> {data.name1} </span>
                <div className="prograss-contener">
                  <Progress percentage={data.p1} delay={data.delay} />
                </div>
              </div>
              <div className="orogressclass">
                <span className="name-sub"> {data.name2} </span>
                <div className="prograss-contener">
                  <Progress percentage={data.p2} delay={data.delay} />
                </div>
              </div>
              <div className="orogressclass">
                <span className="name-sub"> {data.name3} </span>
                <div className="prograss-contener">
                  <Progress percentage={data.p3} delay={data.delay} />
                </div>
              </div>
            </div>
        </>
      )
}
export default Inbox;