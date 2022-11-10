import React, { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Input } from "semantic-ui-react";
import "./userform.css";

export default function UserForm() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [html, setHtml] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const setData = ({
    name,
    login,
    followers,
    public_repos,
    avatar_url,
    html_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setHtml(html_url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  const updateInput = (e) => {
    setUserInput(e.target.value);
  };

  const reposClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: userName });
    window.location.href = `http://localhost:3000/${userName}`;
  };

  const [display, setDisplay] = useState("block");

  useEffect(() => {
    userName === "example" ? setDisplay("none") : setDisplay("block");
  }, [userName]);
  return (
    <div>
      <form onSubmit={handleSubmit} className="searchForm">
        {/* <input className="usernameinput"
          type="text"
          onChange={updateInput}
          placeholder='Enter GitHub username'
        /> */}
        <Input
          className="usernameinput"
          size="large"
          icon="github"
          type="text"
          onChange={updateInput}
          placeholder="Username"
        />

        <div class="ui animated fade button" id="submitdiv" tabindex="0">
          <div class="visible content">
            <Input
              icon="search"
              className="submitbtn"
              type="submit"
              value=" "
            />
          </div>
          <div class="hidden content" id="hiddencontent">Search</div>
        </div>
      </form>
      <div className="card" style={{ display: display }}>
        <Card>
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="username">Username: {userName}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href={html}>
              <Icon name="github" />
              Visit their Github
            </a>
          </Card.Content>
          <Card.Content extra>
            <a onClick={reposClick}>
              <Icon name="database" />
              {repos} Repos
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
