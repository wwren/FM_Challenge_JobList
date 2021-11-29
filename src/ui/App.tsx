import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setJobBaseOnFilters } from "../redux/actions/jobActions";
import { JobType } from "../types/types";
import Nav from "./partials/Nav";
import Content from "./partials/Content";
import Job from "./components/Job";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const jobs = useSelector((state: any) => state.jobs.jobs);
  const filters = useSelector((state: any) => state.filters);
  const jobsOnBoard = useSelector((state: any) => state.jobsOnBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetch("./api/data.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setJobs(data));
          dispatch(setJobBaseOnFilters(data, filters));
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(setJobBaseOnFilters(jobs, filters));
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
          {jobsOnBoard.length > 0 &&
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
