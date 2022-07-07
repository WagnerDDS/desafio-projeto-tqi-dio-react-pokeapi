import Layout from "./components/layout";
import PokeProvider from "./provider/pokeProvider";

function App() {
  return (
    <PokeProvider>
      <Layout />
    </PokeProvider>
  );
}

export default App;
