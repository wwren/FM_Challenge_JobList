import "../../assets/css/Footer.css";
export default function Footer() {
  return (
    <footer>
      <div>
        <span>Copyright &copy;</span> Ran's JobList (FM challenge) 2021
      </div>
      <div className="footer">
        <div>
          <a
            id="profile-link__github"
            href="https://github.com/wwren/FM_Challenge_JobList"
            rel="external"
          >
            <i className="fa fa-github">
              <span> GitHub</span>
            </i>
          </a>
        </div>
        <div>
          <a
            id="profile-link__linkedin"
            href="https://www.linkedin.com/in/ding-ran/"
            rel="external"
          >
            <i className="fa fa-linkedin-square">
              <span> Linkedin</span>
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
