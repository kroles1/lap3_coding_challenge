import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";

export default function UserForm() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const setData = ({ name, login, followers, public_repos, avatar_url }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
    const updateInput = (e) => {
      setUserInput(e.target.value);
    };

    const reposClick = (e) => {
    e.preventDefault()
    dispatch({ type: 'SEARCH', payload: userName})
    window.location.href = `http://localhost:3000/${userName}`    
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={updateInput}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="card">
      <Card>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="username">Username: {userName}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {followers} Followers
          </a>
          </Card.Content>
          <Card.Content extra>
          <a onClick={reposClick}>
            <Icon name="user" />
            {repos} Repos
          </a>
        </Card.Content>
      </Card>
    </div>
      </div>
    );
}












