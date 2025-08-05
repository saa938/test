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
                <div className="code-block">if (problem) &#123; solve(); &#125;</div>
                <div className="code-block">while (learning) &#123; grow(); &#125;</div>
                <div className="code-block">function innovate() &#123; ... &#125;</div>
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
          <h2>What is FIRST Tech Challenge?</h2>
          <div className="fll-overview">
            <div className="fll-description">
              <p>
                FIRST Tech Challenge (FTC) is a dynamic, hands-on robotics competition that immerses middle and high school students 
                in the exhilarating world of engineering, coding, and strategic problem-solving.
              </p>
              <p>
                Teams of passionate, inventive students design, build, and program sophisticated robots using Android-based kits 
                and Java or Blocks interfaces. The competition unfolds in a fast-paced alliance format, where robots navigate 
                intricate game fields, execute precise maneuvers, and adapt to unpredictable challenges.
              </p>
            </div>
          </div>

          <div className="fll-features">
            <div className="feature">
              <div className="feature-icon">🤖</div>
              <h4>Robot Design</h4>
              <p>Teams design and program sophisticated robots using Android-based kits and Java or Blocks programming</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h4>Fast-Paced Competition</h4>
              <p>Alliance-based matches where robots navigate complex game fields and execute precise maneuvers</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h4>Competitions</h4>
              <p>Regional and international tournaments with multiple award categories beyond just winning matches</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h4>Community Impact</h4>
              <p>Emphasis on collaboration, outreach, and innovation, rewarding teams for community impact and engineering excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-overview">
            <div className="team-stats">
              <div className="team-stat">
                <h3>12</h3>
                <p>Team Members</p>
              </div>
              <div className="team-stat">
                <h3>8th-11th</h3>
                <p>Grade Range</p>
              </div>
              <div className="team-stat">
                <h3>4</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="team-description">
              <p>
                We are a dedicated team of 12 passionate students ranging from 8th to 11th grade, 
                with 4 years of competitive robotics experience. Our team has consistently performed 
                at the highest levels, earning recognition as a top-tier FTC team through our 
                innovative designs, strategic gameplay, and commitment to excellence.
              </p>
            </div>
          </div>

          <div className="achievements-section">
            <h3>Our Achievements</h3>
            <div className="season-achievements">
              <div className="season">
                <div className="season-header">
                  <h4>2024 Into the Deep</h4>
                  <span className="performance-badge top">Top 0.5% Team</span>
                </div>
                <div className="awards-list">
                  <div className="award">
                    <span className="award-icon">🥇</span>
                    <div className="award-details">
                      <strong>Finalist Alliance 1st Pick</strong>
                      <span>Washington Championship</span>
                    </div>
                  </div>
                  <div className="award">
                    <span className="award-icon">🥈</span>
                    <div className="award-details">
                      <strong>Motivate Award 2nd Place, Finalist Alliance 1st Pick</strong>
                      <span>Semifinal</span>
                    </div>
                  </div>
                  <div className="award">
                    <span className="award-icon">🏆</span>
                    <div className="award-details">
                      <strong>Control Award Winner, Finalist Alliance 1st Pick</strong>
                      <span>Interleague</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="season">
                <div className="season-header">
                  <h4>2023 Centerstage</h4>
                  <span className="performance-badge">Top 5% Team</span>
                </div>
                <div className="awards-list">
                  <div className="award">
                    <span className="award-icon">🏆</span>
                    <div className="award-details">
                      <strong>Control Award Winner</strong>
                      <span>Australia-Pacific Open</span>
                    </div>
                  </div>
                  <div className="award">
                    <span className="award-icon">🥇</span>
                    <div className="award-details">
                      <strong>Winning Alliance 1st Pick</strong>
                      <span>West Coast Invitational</span>
                    </div>
                  </div>
                  <div className="award">
                    <span className="award-icon">🥉</span>
                    <div className="award-details">
                      <strong>Innovate Award 3rd Place</strong>
                      <span>Washington Championship</span>
                    </div>
                  </div>
                  <div className="award">
                    <span className="award-icon">🥉</span>
                    <div className="award-details">
                      <strong>Inspire Award 3rd Place, Winning Alliance 1st Pick</strong>
                      <span>Interleague</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="season">
                <div className="season-header">
                  <h4>2022 Power Play</h4>
                  <span className="performance-badge">Breakthrough Season</span>
                </div>
                <div className="awards-list">
                  <div className="award">
                    <span className="award-icon">🏆</span>
                    <div className="award-details">
                      <strong>Innovate Award Winner</strong>
                      <span>Interleague</span>
                    </div>
                  </div>
                </div>
              </div>
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
              Connect with our award-winning team and become part of a community that's 
              changing the world through STEM education and competitive robotics.
            </p>
            
            <div className="form-container">
              <div className="form-benefits">
                <h3>What You'll Get:</h3>
                <div className="benefits-list">
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Mentorship from experienced team members</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Hands-on experience with advanced robotics</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Competitive tournament experience</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Programming skills in Java and Blocks</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Leadership and teamwork development</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">✅</span>
                    <span>Award-winning team culture</span>
                  </div>
                </div>
              </div>
              
              <div className="form-cta">
                <div className="cta-content">
                  <h3>Get Started Today</h3>
                  <p>
                    Ready to join our championship-level team? Fill out our interest form 
                    and we'll get back to you with next steps, meeting times, and how you 
                    can become part of our robotics family.
                  </p>
                  <a 
                    href="https://forms.gle/example-form-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    Join Our Team
                    <span className="button-arrow">→</span>
                  </a>
                  <p className="form-note">
                    The form opens in a new tab and takes about 3 minutes to complete.
                  </p>
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
              <h4>FIRST Tech Challenge</h4>
              <p>Inspiring young people to be science and technology leaders and innovators through competitive robotics</p>
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
                <li><a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer">Official FTC Site</a></li>
                <li><a href="#challenges">Current Challenges</a></li>
                <li><a href="#tournaments">Tournaments</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FTC Team. Inspiring the next generation of innovators through competitive robotics.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;