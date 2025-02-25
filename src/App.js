import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ChooseUs from "./components/ChooseUs";
import OurClasses from "./components/OurClasses";
import Registration from "./components/Registration";
import Plan from "./components/Plan";
import Clients from "./components/Clients";
import Trainer from "./components/Trainer";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-scroll no-scrollbar scroll-smooth">
      <Navbar />

      <main className="flex flex-col gap-12 md:gap-16">
        <Details />
        <ChooseUs />
        <OurClasses />
        <Registration />
        <Plan />
        <Clients />
        <Trainer />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
