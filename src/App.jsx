import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generate, setGenerate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_QUOTES_API_KEY}`);
      const data = await res.json();
      setQuotes(data);
      setLoading(false);
    };
    fetchData();
  }, [generate]);
  const handleGenerate = () => {
    setGenerate(!generate);
  };
  const handleSave = (quote) => {
    let allSaved = JSON.parse(localStorage.getItem("saved")) || [];
    const alreadyPresent = allSaved?.find(
      (singleQuote) => singleQuote === quote
    );
    if (alreadyPresent) {
      return toast.error("Already Saved to List");
    } else {
      allSaved.push(quote);
      localStorage.setItem("saved", JSON.stringify(allSaved));
    }
  };
  return (
    <>
      <div className="pt-20 min-h-screen font-main text-white bg-gradient-to-r from-black to-gray-500">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-center">Random Quotes</h2>
          <div className="flex flex-col my-10">
            <div className="overflow-hidden w-96 px-8 h-fit rounded-3xl text-2xl font-bold bg-purple-400 hover:bg-purple-500 transition-all duration-500">
              {loading ? (
                <div className="w-full h-44 gap-x-2 flex justify-center items-center">
                  <div className="w-5 bg-[#ad137c] animate-pulse h-5 rounded-full animate-bounce"></div>
                  <div className="w-5 animate-pulse h-5 bg-[#602289] rounded-full animate-bounce"></div>
                  <div className="w-5 h-5 animate-pulse bg-[#270eb6] rounded-full animate-bounce"></div>
                </div>
              ) : (
                <div className="flex flex-col w-full h-full text-center item-center justify-center text-black">
                  {quotes?.map((quote, idx) => (
                    <div className="flex flex-col" key={idx}>
                      <h3 className="w-[90%] my-10 mx-auto font-local">
                        "{quote}"
                      </h3>

                      <button
                        onClick={handleGenerate}
                        className="mt-5 mb-2 bg-purple-500 transition-all duration-500 hover:bg-purple-400 shadow-2xl p-2 rounded-full"
                      >
                        Generate
                      </button>
                      <button
                        onClick={() => handleSave(quote)}
                        className="mb-5 bg-pink-500 transition-all duration-500 hover:bg-purple-400 shadow-2xl p-2 rounded-full"
                      >
                        Save to List
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
