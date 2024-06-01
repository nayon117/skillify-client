const Footer = () => {
  return (
    <div className="section-container mt-12 bg-third">
      <footer className="footer  p-10">
        <aside>
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="h-16 w-16" />
            <span className="title -ml-3">ressU</span>
          </div>
          <p>
            <br />
            Providing reliable Products since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
