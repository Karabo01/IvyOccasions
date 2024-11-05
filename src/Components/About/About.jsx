import React from 'react'
import './About.css'
// import about_img from '../../assets/BOCA.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            {/* <img src={about_img} alt="" className='about-img' /> */}
            {/* <img src={play_icon} alt="" className='play-icon' /> */}
        </div>
        <div className="about-right">
            <h3>ABOUT BOCA</h3>
            <h2>Who We Are</h2>
            <p>The best way to introduce you to our church is to tell you about the church in Antioch (Acts 11-13) and highlight four of its characteristics that we strive to imitate.</p>
            <p>Evangelism (Acts 11:20-21) – People were saved in Antioch, not through professionals or programs, but through the faithfulness of ordinary believers. BOCA is a church where everyone shares the task of spreading the good news of Jesus Christ among their friends, family, and co-workers.</p>
            <p>Training (Acts 11:26) – Jesus said, “Make disciples…teaching them to obey all that I have commanded you” (Matt 28:19-20). The church of Antioch did such a good job of teaching their members those things, their unbelieving friends wondered at their changed lives, and called them Christ-ians or Christ-followers. Like the church of Antioch, Grace Fellowship is a place where believers are trained through the teaching of the Word of God: all that Christ commanded us about doctrine and practice.</p>
            <p>Serving (Acts 11:29) – The Antioch church was a church of servers, not sitters. At Grace Fellowship, we want to be a church of servers—Christians who joyfully and sacrificially contribute to the cement-hauling and bricklaying spiritual tasks of building the church of Jesus Christ.</p>
            <p>Missions (Acts 13:2-3) – The church of Antioch was concerned with more than just strengthening their own church. Therefore, they sent out two of their elders, Paul and Barnabas, as church planters. In the same way, at BOCA we have dedicated ourselves to planting and strengthening Bible-teaching churches in Southern Africa.</p>
            <p>There are many great churches in the New Testament, however, the Antioch church in Acts 11-13 retains a special place in our hearts. We love its evangelism, training, serving and missions, and we have made those things our commitments at BOCA.</p>
        </div>

    </div>
  )
}

export default About