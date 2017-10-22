import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render(){
    return (
      <div className="home">
          <div className="heading">

          </div>
          <div className="projects">
            <h3 className="projectheading">Recent Projects</h3>
             <div className="images">
              <div className="p1"><a href="https://tvshowtrakr.herokuapp.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>TV Show Trackr</h5>
                    <p>React.js, Express.js, SQL, CSS, REST API</p>
                  </div>
                </div>
              </a></div>
              <div className="p2"><a href="https://barhoppers.herokuapp.com/" target="_blank" className="work">
                <div class="overlay">
                  <div class="overlay-text">
                    <h5>Bar Hoppers</h5>
                    <p>React.js, Express.js, SQL, CSS</p>
                  </div>
                </div>
              </a></div>
              <div className="p3"><a href="http://guessthesong.bitballoon.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>Guess-the-Song</h5>
                    <p>HTML, CSS, JavaScript</p>
                  </div>
                </div>
              </a></div>
              <div className="p4"><a href="https://to-dosapp.herokuapp.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>To-Do-App</h5>
                    <p>Express.js, SQL, CSS</p>
                  </div>
                </div>
              </a></div>
              <div className="p5"><a href="http://seyetictactoegame.bitballoon.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>Tic-Tac-Toe</h5>
                    <p>HTML, CSS, JavaScript</p>
                  </div>
                </div>
              </a></div>
              <div className="p6"><a href="http://seyereact-weatherapp.bitballoon.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>Weather App</h5>
                    <p>React.js, CSS</p>
                  </div>
                </div>
              </a></div>
              <div className="p7"><a href="https://seriesjunkie.herokuapp.com/" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>Series Junke</h5>
                    <p>Node.js, Express.js, EJS, CSS, SQL, REST API</p>
                  </div>
                </div>
              </a></div>
              <div className="p8"><a href="https://github.com/seyesij/cocktail_app" target="_blank" className="work">
                <div className="overlay">
                  <div className="overlay-text">
                    <h5>Cocktail Recipes</h5>
                    <p>Rails</p>
                  </div>
                </div>
              </a></div>
            </div>
          </div>
          <div className="footer">
            <Link to='/contact'>
              <button>Hire Me</button>
            </Link>
          </div>
      </div>
    )
  }
}

export default Homepage;
