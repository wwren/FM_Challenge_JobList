import React, { useState, useEffect } from "react";
import { JobType } from "../types/types";
import "../assets/css/App.css";
import Nav from "./partials/Nav";
import Content from "./partials/Content";
import Job from "./components/Job";

function App() {
  const [jobs, setJobs] = useState<JobType[]>();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetch("./api/data.json")
        .then((response) => response.json())
        .then((data) => {
          setJobs(data);
          console.log("jobs", jobs);
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <Content>
        {jobs &&
          jobs.map((job: JobType) => {
            return <Job job={job} />;
          })}
      </Content>
    </div>
  );
}

export default App;
