import "./Foot.css";

const Foot = () => {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Centre", "Terms of Use", "Contact Us"],
  ];

  return (
    <div className="footer-container">
      <p className="email-prompt">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="email-form">
        <input type="email" placeholder="Email address" />
        <button>Get Started</button>
      </div>

      <p className="contact">
        Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a>
      </p>

      <div className="footer-links">
        {footerLinks.map((column, i) => (
          <ul key={i}>
            {column.map((link, j) => (
              <li key={j}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>


      <p className="disclaimer">
  Netflix Clone — Educational Project. This website is created for
  educational purposes only and is not affiliated with or endorsed by Netflix.
</p>
    </div>
  );
};

export default Foot;