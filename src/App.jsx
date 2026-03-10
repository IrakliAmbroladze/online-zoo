import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="flex-1">
        <p className="bg-stone-400">initial text</p>
        <p className="bg-red-500 text-white text-4xl">Tailwind test</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
