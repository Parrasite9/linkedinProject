import React from 'react'
import '../CSS/Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



function Widgets() {

  const newArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className='widgets'>
           <div className="widgets_header">
              <h2>LinkedIn News</h2>
              <InfoIcon /> 
           </div>

           {newArticle("Are You Ready to hire someone with the skills?", "Email me at johnsonIsaiah13@yahoo.com")} 
           {newArticle("Industry Expertise:", "Stay up-to-date on the latest trends and insights in your field with my experience and expertise.")} 
           {newArticle("Collaborative Approach:", "Looking for a team player who can bring fresh ideas and work collaboratively? Let's connect and take your organization to new heights.")} 
           {newArticle("Results-Driven:", "Results matter. I am passionate about delivering tangible results that add value to your business. Let's achieve success together.")} 
           {newArticle("Innovative Thinker:", "Are you looking for someone who can think outside the box? I have a track record of driving innovation and bringing creative solutions to the table.")} 
           {newArticle("Leadership Skills: Want to empower your team and drive organizational growth?", "Let's discuss how my leadership skills can make a difference for your company.")} 
           {newArticle("Communication Skills:", "Effective communication is essential to building strong relationships and driving success. Let's connect and see how my communication skills can benefit your organization.")} 
           {newArticle("Passionate and Driven:", "Passion and drive are key to success. I am passionate about what I do and driven to achieve exceptional results. Let's partner and take your organization to the next level.")} 
    </div>
  )
}

export default Widgets
