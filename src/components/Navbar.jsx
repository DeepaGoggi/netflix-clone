import "./Navbar.css";

function Navbar() {
  const handleSignInClick = () => {
    window.location.href = "/signin";
  };

  return (
    <nav className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Net.flix Logo"
        class="logo"
      />
      {/* <img src="./public/images/img.png" alt="Net.flix" className="logo" /> */}
      <div className="nav-buttons">
        <select className="lang-select">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;