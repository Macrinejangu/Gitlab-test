import { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
  const [people, setPeople] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });
      setPeople(response.data);
      setTotalCount(response.data.length);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <TopNav setPeople={setPeople} setTotalCount={setTotalCount} />
      <InfoSection totalCount={totalCount} />
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GithubProject;