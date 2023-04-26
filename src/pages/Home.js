import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Home = function () {
  return (
    <div>
      <Navbar />
      <main>
        <WordQuiz />
      </main>
    </div>
  );
};

export default Home;