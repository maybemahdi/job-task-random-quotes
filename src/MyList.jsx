import { useEffect, useState } from "react";

const MyList = () => {
  const [quotes, setQuotes] = useState(null);
  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("saved"));
    setQuotes(saved);
  }, []);
  return (
    <div style={{minHeight: "calc(100vh - 240px)"}} className="font-main my-10">
      <h2 className="md:text-6xl text-white text-4xl font-bold text-center my-10">
        My Listing
      </h2>
      <div className="grid grid-cols-1 px-8 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-black">
        {quotes?.map((quote, idx) => (
          <div
            className="flex flex-col justify-center items-center rounded bg-purple-400 hover:bg-purple-500 transition-all duration-500"
            key={idx}
          >
            <h3 className="w-[90%] my-10 text-center mx-auto font-local">`{quote}`</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
