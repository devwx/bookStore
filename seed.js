// seed.js
const mongoose = require("mongoose");
const Book = require("./models/Book");

require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const booksData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A story of race and class, injustice and hypocrisy, and courage and compassion.",
    rating: 4.5,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel set in a totalitarian society where individuality is suppressed.",
    rating: 4.8,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A tale of love, greed, and the American Dream set in the Roaring Twenties.",
    rating: 4.2,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic novel of manners, love, and marriage among the British landed gentry.",
    rating: 4.6,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description:
      "The first book in the beloved Harry Potter series, introducing the magical world of Hogwarts.",
    rating: 4.7,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A coming-of-age novel that explores themes of alienation, identity, and adolescence.",
    rating: 4.3,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A story of race and class, injustice and hypocrisy, and courage and compassion.",
    rating: 4.5,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy adventure novel that follows the journey of Bilbo Baggins.",
    rating: 4.6,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "An epic fantasy trilogy set in the world of Middle-earth, following the quest to destroy the One Ring.",
    rating: 4.9,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description:
      "A Bildungsroman following the experiences of its eponymous character, including her growth to adulthood and her love for Mr. Rochester.",
    rating: 4.4,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "A dystopian novel set in a future where the government forces children to participate in a televised death match.",
    rating: 4.4,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A coming-of-age novel that explores themes of alienation, identity, and adolescence.",
    rating: 4.3,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A dystopian novel that explores the dangers of a totalitarian society ruled by technology and conformity.",
    rating: 4.5,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thriller that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum.",
    rating: 4.1,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A philosophical novel about a young Andalusian shepherd named Santiago who embarks on a journey to find a hidden treasure.",
    rating: 4.7,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    description:
      "A series of fantasy novels set in the magical land of Narnia, filled with talking animals, mythical creatures, and epic battles between good and evil.",
    rating: 4.6,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A Gothic novel that explores the consequences of vanity and the pursuit of beauty.",
    rating: 4.2,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description:
      "A collection of detective stories featuring the legendary detective Sherlock Holmes and his companion Dr. John Watson.",
    rating: 4.8,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description:
      "A mystery thriller novel that follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance.",
    rating: 4.3,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    description:
      "An epic novel that tells the story of Captain Ahab's obsessive quest for revenge against the white whale Moby Dick.",
    rating: 4.1,
    bookImageUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Seed function
async function seed() {
  try {
    // Delete existing documents in the books collection
    await Book.deleteMany({});

    // Insert seed data into the books collection
    await Book.insertMany(booksData);

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error.message);
  } finally {
    // Close the MongoDB connection
    mongoose.disconnect();
  }
}

// Run seed function
seed();
