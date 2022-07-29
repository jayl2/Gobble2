import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  //link object  Styling
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <button className="enterBtn">
          <Link style={linkStyle} to="/restaurants">
            Enter{" "}
          </Link>
        </button>
      </main>
    </div>
  );
}
