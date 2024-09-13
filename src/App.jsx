import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [bookData, setBookData] = useState([]);
  const [searchInput, setSearchInput] = useState("tech");

  const fetchData = () => {
    axios
      .get(`/api/v1/public/books?&query=${searchInput}`)
      .then((response) => {
        setBookData(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchInput]);

  return (
    <div className="w-full min-h-screen bg-slate-950 relative">
      <Header setInput={setSearchInput} />
      <div className="w-full md:max-w-7xl md:mx-auto py-5 md:py-7 px-7 md:px-3">
        <h1 className="text-white/85 text-2xl font-medium tracking-tighter">
          Trending Books :
        </h1>

        <div className="w-full mt-5 flex flex-col gap-5">
          {bookData.length !== 0 ? bookData.map((bookData) => (
            <div key={bookData.id}>
              <Card data={bookData} />
            </div>
          )): <h2 className="text-white/50 font-medium text-3xl text-center mt-10">No Data Found</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
