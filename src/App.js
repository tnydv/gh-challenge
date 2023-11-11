import { useEffect, useState } from "react";
import "./App.css";
import HeroImage from "./assets/hero-image-github-profile.png";

function App() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [location, setLocation] = useState("none");

  const fetchData = async (username = "github") => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUsername(data.name);
      data.bio ? setBio(data.bio) : setBio(`${username} has no bio.`);
      setFollowers(data.followers);
      setFollowing(data.following);
      data.location ? setLocation(data.location) : setLocation("none");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("tnydv");
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
        <div className="info-card">Followers | {followers}</div>
        <div className="info-card">Following | {following}</div>
        <div className="info-card">Location | {location}</div>
      </div>
      {/* Username */}
      <h1 className="username">{username}</h1>
      {/* Profile Bio */}
      <p className="bio">{bio}</p>
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
      <a className="repos-link" href={`https://github.com/${username}`}>
        View all repositories
      </a>
    </div>
  );
}

export default App;
