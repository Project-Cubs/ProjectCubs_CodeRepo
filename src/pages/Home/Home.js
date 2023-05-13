
import { Navbar } from "../../components/Navbar/Navbar";
import Dashboard from "./components/Dashboard";

export function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
};