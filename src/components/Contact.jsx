import React from 'react';

const Contact = (props) => {
  return(
    <div className="contact_page">
          <div className="contact_heading">
            <h1>Contact Details</h1>
          </div>
          <div className="contact_info">
            <p className="linkedin"><span className="info">LinkedIn: </span><a href="https://www.linkedin.com/in/seyesijuwade/" target="_blank" rel="noopener noreferrer" className="link"><h4>https://www.linkedin.com/in/seyesijuwade</h4></a></p>
            <p className="other"><span className="info">Email Address: </span> adeseyesijuwade@gmail.com</p>
            <p className="other"><span className="info">Phone Number: </span> +1(732)789 3916</p>
            <p className="other"><span className="info">Location: </span>New York, NY</p>
          </div>
          <div className="contact_footer">
            <p>Copyright © 2017. Website by Adeseye Sijuwade.</p>
          </div>
    </div>
  )
}

export default Contact;
