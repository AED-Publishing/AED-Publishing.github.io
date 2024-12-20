export default function Footer() {
  return (
    <>
      <footer className="footer pt-3 px-3">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright © <script>document.write(new Date().getFullYear())</script>
              &nbsp;AED Publishing. All rights reserved.
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="/about" className="nav-link text-sm text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="mailto:info@aedpublishing.com" className="nav-link text-sm text-muted" target="_blank">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="https://discord.com/invite/ZD72Jx4zsn" className="nav-link text-sm text-muted" target="_blank">
                  Join Our Community
                </a>
              </li>
              <li className="nav-item">
                <a href="/mailer" className="nav-link text-sm text-muted">
                  Join Our Mailing List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                  aria-current="page"
                  href="https://patreon.com/AEDpublishing"
                >
                  <i className="text-lg fa-brands fa-patreon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                  aria-current="page"
                  href="https://bsky.app/profile/aedpublishing.bsky.social"
                >
                  <i className="text-lg fa-brands fa-bluesky"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
