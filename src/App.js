import { Navbar } from "./components/navbar";
import GlobalRoutes from "./routes/globalRoutes";

function App() {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <GlobalRoutes/>
    </div>
    </div>
  );
}

export default App;
