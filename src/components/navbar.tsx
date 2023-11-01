const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/">
          AED Publishing
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                id="pagesExample"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                5th Conspiracy
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li>
                  <a className="dropdown-item" href="/ip/5th-Conspiracy">
                    What is 5C?
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="https://www.kickstarter.com/projects/aedpublishing/5th-conspiracy/description">
                    Kickstarter
                  </a>
                </li> */}
                <li>
                  <a className="dropdown-item" href="/ip/5th-Conspiracy/resources">
                    5C Resources
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/about/"
              >
                About AED
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="https://discord.com/invite/Q5eHkzc6tv"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab text-lg fa-discord"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/mailer"
              >
                <i className="text-lg fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
