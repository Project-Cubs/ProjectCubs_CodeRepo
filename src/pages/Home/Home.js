
import { Navbar } from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";

export function Home() {
  return (
    <div>
      <Navbar />
      <main className="loggedIn">
        <Dashboard />
      </main>
    </div>
  );
};