import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return(
    <div className="about_page">
          <div className="about_heading">
            <h1>About Me</h1>
          </div>
          <div className="about_info">
            <div className="profpic"></div>
            <div className="content">
              <p>I am Seye - born in London, raised in Nigeria, currently living in New York. I am a junior web developer with a background in data analysis. I am highly familiar with a variety of programming languages and database technologies. I love building and designing websites and rich interactive web applications.</p>
              <p>I pride myself on being friendly, approachable, patient and eager to learn. If you are looking for a goal oriented strategist and experienced developer, or if you have any questions, please contact me through the link below. <br></br><br></br>I look forward to working with <span className="you">YOU</span>.</p>
            </div>
          </div>
          <div className="skills">
              <h2>Technical Skills</h2>
              <p>HTML5, CSS3, jQuery, JavaScript, React.js, Node.js, Express.js, Ruby, Rails, Google Firebase, PostgreSQL, MySQL, Python, Postman, RESTful API, Git, Github</p>
            </div>
          <div className="footer">
            <Link to='/contact'>
              <button>Contact Me</button>
            </Link>
          </div>
          <div className="footer_bottom">
            <p>Copyright © 2017. Website by Adeseye Sijuwade.</p>
          </div>
    </div>
  )
}

export default About;
