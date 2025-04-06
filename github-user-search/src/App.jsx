// src/App.jsx
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold text-center py-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
