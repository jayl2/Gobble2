import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <button className="enterBtn">
          <Link to="/restaurants">Enter </Link>
        </button>
      </main>
    </div>
  );
}
