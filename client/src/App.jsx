import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  </div>
);


export default App
