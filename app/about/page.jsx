export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src="/images/ekemini.jpg" alt="Ekemini Akpan" className="profile-pic" />
        <div className="bio">

          <p>I am a dedicated football enthusiast who lives and breathes the beautiful game. My passion for football has been a lifelong journey, and I proudly support Manchester United, a club that embodies perseverance, excellence, and a never-give-up attitude.</p>

          <p>As a devoted fan, I enjoy analyzing games, celebrating victories, and appreciating the skill, teamwork, and strategy that define the sport. My love for football extends beyond the matches—I believe it unites people worldwide, creating unforgettable moments and lifelong memories.</p>

          <p>When I’m not watching Manchester United dominate the pitch, you can find me exploring the latest football news or joining in friendly discussions about the sport's history and future.</p>

          <h3>My Favorite Team</h3>
          <div className="team-logo">
            <a href="https://www.manutd.com/" target="_blank">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" 
                alt="Manchester United Logo" 
                className="manchester-united-logo" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
