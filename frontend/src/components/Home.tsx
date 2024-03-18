import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "lucide-react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface IBook {
  title: string;
  author: string;
  description: string;
  rating: number;
  bookImageUrl: string;
}

interface RatingProps {
  rating: number;
}

const Home = () => {
  const [books, setBooks] = useState<Array<IBook>>([]);
  const [isloading, setIsloading] = useState(false);

  console.log(books);

  const fetchBooks = useCallback(async () => {
    setIsloading(true);
    try {
      const result = await axios.get("/api/books");

      if (result.data) {
        setBooks(result.data || []);
        setIsloading(false);
      }
    } catch (error) {
      toast.success("Something went wrong");
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen font-extrabold">
        Loading Books...
      </div>
    );
  }

  function Rating({ rating }: RatingProps) {
    return (
      <div className="flex items-center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "#ea580c" : "#f5f5f5"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return (
                <BsStarHalf
                  color="#ea580c"
                  key={i}
                  style={{ marginLeft: "1" }}
                />
              );
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <h1 className="container mx-auto p-4 font-extrabold text-xl">
          List Of Book(s)
        </h1>
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {books.map(book => (
            <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
              <img src={book.bookImageUrl} alt={book.title} />
              <div className="space-x-1 flex justify-center mt-10">
                <Rating rating={book.rating} />
              </div>
              <h1 className="text-3xl my-5">{book.title}</h1>
              <p className="mb-5 flex items-center justify-center gap-1">
                <User />
                {book.author}
              </p>
              {/* <h2 className="font-semibold mb-5">$29.99</h2>
              <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                Add To Cart
              </button> */}
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Home;
