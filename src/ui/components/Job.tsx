import React from "react";
import { JobType } from "../../types/types";
import "../../assets/css/Job.css";
import Tag from "./Tag";

function Job({ job }: { job: JobType }) {
  return (
    <div className="job__container" tabIndex={-1}>
      <div className="job">
        <div className="job__left-panel">
          <div className="job__logo">
            <img src={job.logo} alt={`${job.company}-logo`} />
          </div>
          <div className="job__description">
            <div className="job__description__firstline">
              {job.company}
              {(job.new || job.featured) && (
                <div className="job__description__firstline-tags">
                  {job.new && <div>NEW!</div>}
                  {job.featured && <div>FEATURED</div>}
                </div>
              )}
            </div>
            <a className="job__description__secondline" href="#">
              {job.position}
            </a>
            <div className="job__description__thirdline">
              <ul>
                <li>{job.postedAt}</li>
                <li>{job.contract}</li>
                <li>{job.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="job__right-panel">
          <Tag>{job.role}</Tag>
          <Tag>{job.level}</Tag>
          {job.languages.map((language) => {
            return (
              <React.Fragment key={language}>
                <Tag>{language}</Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Job;
