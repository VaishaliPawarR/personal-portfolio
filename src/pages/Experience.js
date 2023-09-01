import React from "react";
import {
  VerticalTimeLine,
  VerticalTimeLineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "material-ui/icons/School"
import WorkIcon from "material-ui/icons/Work"


function Experience() {
  return (
    <div className="experience">
      
      <VerticalTimeLine lineColor="#3e497a">
        <VerticalTimeLineElement className="vertical-time-line-element--education" 
        date="2010 - 2014"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}> 
        <h3 className="vertical-timeline-element-title">
          My Random High School
        </h3>
        <p>
          high school Science
        </p>
        </VerticalTimeLineElement>


        <VerticalTimeLineElement className="vertical-time-line-element--education" 
        date="2010 - 2014"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}> 
        <h3 className="vertical-timeline-element-title">
          My Random High School
        </h3>
        <p>
          high school Science
        </p>
        </VerticalTimeLineElement>  
        
        
        <VerticalTimeLineElement className="vertical-time-line-element--education" 
        date="2010 - 2014"
        iconStyle={{background: "#e9d35b ", color: "#fff"}}
        icon={<WorkIcon />}> 
        <h3 className="vertical-timeline-element-title">
          My Random High School
        </h3>
        <p>
          high school Science
        </p>
        </VerticalTimeLineElement>  
        
        
        <VerticalTimeLineElement className="vertical-time-line-element--education" 
        date="2010 - 2014"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}> 
        <h3 className="vertical-timeline-element-title">
          My Random High School
        </h3>
        <p>
          high school Science
        </p>
        </VerticalTimeLineElement>


      </VerticalTimeLine>
    </div>
  )
}

export default Experience