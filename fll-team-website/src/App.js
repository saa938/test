import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Join the Future of <span className="highlight">STEM</span>
            </h1>
            <p className="hero-subtitle">
              Building tomorrow's innovators through robotics, coding, and collaborative problem-solving
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>4-16</h3>
                <p>Age Range</p>
              </div>
              <div className="stat">
                <h3>110+</h3>
                <p>Countries</p>
              </div>
              <div className="stat">
                <h3>500K+</h3>
                <p>Students</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="robot-animation">
              <div className="robot-body">
                <div className="robot-head"></div>
                <div className="robot-torso"></div>
                <div className="robot-arm left"></div>
                <div className="robot-arm right"></div>
              </div>
              <div className="code-blocks">
                <div className="code-block">if (problem) { solve(); }</div>
                <div className="code-block">while (learning) { grow(); }</div>
                <div className="code-block">function innovate() { ... }</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="goal-section">
        <div className="container">
          <div className="goal-content">
            <h2>Our Mission</h2>
            <p className="goal-description">
              We're on a mission to create the next generation of innovators by forming dynamic 
              FLL teams that inspire young minds to explore science, technology, engineering, 
              and mathematics through hands-on robotics challenges and real-world problem solving.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <div className="icon">🎯</div>
                <h3>Build Teams</h3>
                <p>Connect passionate students with mentors and peers</p>
              </div>
              <div className="mission-point">
                <div className="icon">🚀</div>
                <h3>Inspire Innovation</h3>
                <p>Foster creativity and critical thinking through challenges</p>
              </div>
              <div className="mission-point">
                <div className="icon">🌍</div>
                <h3>Spread STEM</h3>
                <p>Make STEM education accessible to young learners everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FLL Section */}
      <section className="fll-section">
        <div className="container">
          <h2>What is FIRST LEGO League?</h2>
          <div className="fll-overview">
            <div className="fll-description">
              <p>
                FIRST LEGO League is a global STEM program that introduces children ages 4 to 16 
                to science, technology, engineering, and math through hands-on learning and robotics challenges.
              </p>
              <p>
                It's divided into three age-based divisions—<strong>Discover</strong>, <strong>Explore</strong>, 
                and <strong>Challenge</strong>—each designed to spark curiosity and build skills in coding, 
                teamwork, and problem-solving.
              </p>
            </div>
            
            <div className="fll-divisions">
              <div className="division">
                <div className="division-header">
                  <h3>FLL Discover</h3>
                  <span className="age-badge">Ages 4-6</span>
                </div>
                <p>Introduction to STEM through playful learning and exploration</p>
                <ul>
                  <li>Build with LEGO DUPLO</li>
                  <li>Learn through play</li>
                  <li>Develop social skills</li>
                </ul>
              </div>
              
              <div className="division">
                <div className="division-header">
                  <h3>FLL Explore</h3>
                  <span className="age-badge">Ages 6-10</span>
                </div>
                <p>Hands-on introduction to engineering and coding</p>
                <ul>
                  <li>Build motorized LEGO models</li>
                  <li>Basic programming</li>
                  <li>Team presentations</li>
                </ul>
              </div>
              
              <div className="division">
                <div className="division-header">
                  <h3>FLL Challenge</h3>
                  <span className="age-badge">Ages 9-16</span>
                </div>
                <p>Advanced robotics competition with research projects</p>
                <ul>
                  <li>Design & program robots</li>
                  <li>Research real-world problems</li>
                  <li>Compete in tournaments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fll-features">
            <div className="feature">
              <div className="feature-icon">🤖</div>
              <h4>Robot Design</h4>
              <p>Participants design and program LEGO robots to complete themed missions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔬</div>
              <h4>Research Projects</h4>
              <p>Conduct research projects and present innovative solutions to real-world problems</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h4>Competitions</h4>
              <p>Culminates in exciting regional and international competitions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h4>Core Values</h4>
              <p>Strong emphasis on creativity, collaboration, and Gracious Professionalism®</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Ready to Join the Adventure?</h2>
            <p>
              Fill out our team formation form and become part of a community that's 
              changing the world through STEM education and robotics innovation.
            </p>
            
            <div className="form-container">
              <div className="form-benefits">
                <h3>What You'll Get:</h3>
                <div className="benefits-list">
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Expert mentorship and guidance</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Access to LEGO robotics kits</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Tournament participation opportunities</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Lifelong friendships and memories</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Skills for future STEM careers</span>
                  </div>
                </div>
              </div>
              
              <div className="form-embed">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfYOr_RXFYjpHkvbfQD3h56/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="FLL Team Registration Form"
                >
                  Loading…
                </iframe>
                <div className="form-fallback">
                  <p>Can't see the form? <a href="https://forms.gle/RXFYjpHkvbfQD3h56" target="_blank" rel="noopener noreferrer">Click here to open it in a new tab</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>FIRST LEGO League</h4>
              <p>Inspiring young people to be science and technology leaders and innovators</p>
            </div>
            <div className="footer-section">
              <h4>Get Involved</h4>
              <ul>
                <li><a href="#join">Join a Team</a></li>
                <li><a href="#volunteer">Volunteer</a></li>
                <li><a href="#mentor">Become a Mentor</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="https://www.firstlegoleague.org/" target="_blank" rel="noopener noreferrer">Official FLL Site</a></li>
                <li><a href="#challenges">Current Challenges</a></li>
                <li><a href="#tournaments">Tournaments</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FLL Team Formation Program. Inspiring the next generation of innovators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
