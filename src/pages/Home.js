import { Navbar } from "../components/Navbar/Navbar";
import WordQuiz from "../components/WordQuiz";

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
