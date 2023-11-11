import { useEffect } from "react";
import "./App.css";
import HeroImage from "./assets/hero-image-github-profile.png";

function App() {
  const fetchData = async (username = "github") => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(`${data.name} — ${data.bio}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Bannerr */}
      <img className="hero-image" src={HeroImage} alt="github banner" />
      {/* SearchBar */}
      <input id="github-username" placeholder="username" />
      {/* Profile Avatar */}
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/82903918?v=4"
          alt="tnydv github"
        />
      </div>
      {/* Followers, Following, Location */}
      <div className="prrofile-info">
        <div className="info-card">Followers</div>
        <div className="info-card">Following</div>
        <div className="info-card">Location</div>
      </div>
      {/* Username */}
      <h1 className="username">GitHub</h1>
      {/* Profile Bio */}
      <p className="bio">How people build software.</p>
      {/* Top Repository Cards */}
      <div className="repo-card">
        <h3 className="repo-name">.github</h3>
        <p className="repo-description">
          Community health files for the @GitHub organization
        </p>

        <span className="repo-license">MIT?</span>
        <span className="repo-forks">2345?</span>
        <span className="repo-stars">500</span>
        <span className="repo-updated">updated 4 days ago</span>
      </div>
      {/* View all Repo link */}
      <a className="repos-link" href="https://github.com/github">
        View all repositories
      </a>
    </div>
  );
}

export default App;
