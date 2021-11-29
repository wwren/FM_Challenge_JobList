import React, { useState, useEffect } from "react";
import { JobType } from "../types/types";
import Nav from "./partials/Nav";
import Content from "./partials/Content";
import Job from "./components/Job";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [jobsDB, setJobsDB] = useState<JobType[]>();
  // 'Jobs' is a copy instance of jobsDB (linked with database) which controls the jobs in the job list
  const [jobs, setJobs] = useState<JobType[]>();
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetch("./api/data.json")
        .then((response) => response.json())
        .then((data) => {
          setJobsDB(data);
          setJobs(data);
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
      if (jobsDB) {
        for (const job of jobsDB) {
          const allTags: string[] = [job.role, job.level].concat(job.languages);
          const shouldKeep = filters.every(
            (filter) => allTags.indexOf(filter) > -1
          );
          if (shouldKeep) {
            newJobs?.push(job);
          }
        }
      }
      console.log("filters", filters);
      setJobs(newJobs);
    }
    return () => {
      mounted = false;
    };
  }, [filters]);

  return (
    <>
      <div className="App" style={{ paddingBottom: "100px" }}>
        <Nav></Nav>
        {filters.length > 0 && (
          <SearchBar filters={filters} setFilters={setFilters} />
        )}
        <Content>
          {jobs &&
            jobs.map((job: JobType) => {
              return <Job job={job} setFilters={setFilters} />;
            })}
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default App;
