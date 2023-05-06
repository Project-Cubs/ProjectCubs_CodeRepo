
import Dashboard from "../components/Dashboard/Dashboard";
import { Navbar } from "../components/Navbar/Navbar";


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