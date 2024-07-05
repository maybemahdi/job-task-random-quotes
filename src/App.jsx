import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generate, setGenerate] = useState(false);

  const fetchQuotes = async (count) => {
    setLoading(true);
    let newQuotes = [];
    for (let i = 0; i < count; i++) {
      const response = await fetch(import.meta.env.VITE_QUOTES_API_KEY);
      const quote = await response.json();
      newQuotes.push(quote[0]);
    }
    setQuotes(newQuotes);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes(4);
  }, [generate]);

  const handleGenerate = () => {
    setGenerate(!generate);
  };

  const handleSave = (quote) => {
    let allSaved = JSON.parse(localStorage.getItem("saved")) || [];
    const alreadyPresent = allSaved.find(
      (singleQuote) => singleQuote === quote
    );
    if (alreadyPresent) {
      toast.error("Already Saved to List");
    } else {
      allSaved.push(quote);
      localStorage.setItem("saved", JSON.stringify(allSaved));
      toast.success("Saved to List");
    }
  };

  return (
    <>
      <div style={{minHeight: "calc(100vh - 160px)"}} className={`pt-10 font-main text-white`}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="md:text-6xl text-4xl font-bold text-center">
            Random Quotes
          </h2>
          <div className="flex flex-col mt-10">
            <div className="overflow-hidden px-8 rounded-3xl text-2xl font-bold">
              {loading ? (
                <div className="w-full h-44 gap-x-2 flex justify-center items-center">
                  <div className="w-5 bg-[#ad137c] animate-pulse h-5 rounded-full animate-bounce"></div>
                  <div className="w-5 animate-pulse h-5 bg-[#602289] rounded-full animate-bounce"></div>
                  <div className="w-5 h-5 animate-pulse bg-[#270eb6] rounded-full animate-bounce"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-black">
                  {quotes?.map((quote, idx) => (
                    <div
                      className="flex flex-col justify-center items-center rounded bg-purple-400 hover:bg-purple-500 transition-all duration-500"
                      key={idx}
                    >
                      <h3 className="w-[90%] h-[90%] text-center my-10 mx-auto font-local">
                        `{quote}`
                      </h3>
                      <button
                        onClick={() => handleSave(quote)}
                        className="mb-5 mx-6 px-8 bg-pink-500 transition-all duration-500 hover:bg-purple-400 shadow-2xl p-2 rounded-full"
                      >
                        Save to List
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-col items-center my-10">
                {!loading && (
                  <button
                    onClick={handleGenerate}
                    className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
                  >
                    <span className="font-medium text-[#333] group-hover:text-white">
                      Generate
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
