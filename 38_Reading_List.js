const goodreadsInfo = {
  currentlyReading: [
    {
      title: "Twisted Lies",
      author: "Ana Huang"
    }
  ],

  wantToRead: [
    {
      title: "King Of Wrath",
      author: "Ana Huang"
    }
  ]
}

           
const addNewBooks = (books, ...additionalBookObjects) => {
  return [books, ...additionalBookObjects];

}
goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, 

     { title: "Twisted Lies", author: "Ana Huang" }

)

goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, {

  title: "King Of Wrath",

  author:  "Ana Huang",

})

const showGoodreadsInfo = (info) => {
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  console.log("Currently Reading:");

  for (let book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);

  }
  console.log()

  console.log("Want To Read:");

  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);
