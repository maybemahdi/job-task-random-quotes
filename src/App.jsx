import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await 
    };
  }, []);
  return (
    <>
      <div className="py-10 min-h-screen font-main text-white bg-gradient-to-r from-black to-gray-500">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-center">Random Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
        </div>
      </div>
    </>
  );
}

export default App;
