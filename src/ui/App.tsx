import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/actions/jobActions";
import { JobType } from "../types/types";
import Nav from "./partials/Nav";
import Content from "./partials/Content";
import Job from "./components/Job";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const jobs = useSelector((state: any) => state.jobs.jobs);
  const filters = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();

  const [jobsOnBoard, setjobsOnBoard] = useState(jobs);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetch("./api/data.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setJobs(data));
          setjobsOnBoard(data);
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      var newJobs: JobType[] = [];
      if (jobs) {
        for (const job of jobs) {
          const allTags: string[] = [job.role, job.level].concat(job.languages);
          const shouldKeep = filters.every(
            (filter: string) => allTags.indexOf(filter) > -1
          );
          if (shouldKeep) {
            newJobs?.push(job);
          }
        }
      }
      console.log("newJobs", newJobs);
      setjobsOnBoard(newJobs);
    }
    return () => {
      mounted = false;
    };
  }, [filters]);

  return (
    <>
      <div className="App" style={{ paddingBottom: "100px" }}>
        <Nav></Nav>
        {filters.length > 0 && <SearchBar />}
        <Content>
          {jobsOnBoard &&
            jobsOnBoard.map((job: JobType) => {
              return <Job job={job} />;
            })}
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default App;
