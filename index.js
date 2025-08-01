async function renderBooks(filter) {
    const booksWrapper = document.querySelector('.books')
    const books = await getBooks();
      
      if (filter === 'LOW_TO_HIGH') {
        books.sort((a,b)=> a.originalPrice - b.originalPrice);
        } 
        else if (filter === 'HIGH_TO_LOW') {
          books.sort((a,b)=> b.originalPrice - a.originalPrice);
        }
        else if (filter === 'RATING') {
          books.sort((a,b)=> b.rating - a.rating);
        }

        let ratingHTML = '';
        let rating = 3.5;
        for (let i = 0; i <Math.floor(rating); ++i) {
          ratingHTML += '<i class="fas fa-star"><i>\n'
        }
        if (!Number.isInteger(rating)) {
          ratingHTML += '<i class="fas fa-star-half-alt"><i>\n'
        }
        console.log(ratingHTML)
    
        const booksHtml = books
    .map(book=> {
       return   `<div class="book">
        <figure class="book_img--wrapper">
            <img class="book_img" src="${book.url}" alt="">
        </figure>
        <div class="book_title">
            ${book.title}
        </div>
        <div class="book_ratings">
            ${ratingHTML}
        </div>
        <div class="book_price">
            <span class=>$${book.originalPrice.toFixed(2)}</span> 
        </div>
    </div>`;
    })
    .join("");
    booksWrapper.innerHTML = booksHtml;
}

function filterBooks(event) {
    renderBooks(event.target.value);
}
    
setTimeout(() => {
renderBooks();
});

// FAKE DATA
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Crack the Coding Interview",
          url: "assets/crack the coding interview.png",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atomic Habits",
          url: "assets/atomic habits.jpg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Deep Work",
          url: "assets/deep work.jpeg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 44,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 35,
          salePrice: null,
          rating: 2,
        },
        {
          id: 10,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 30,
          salePrice: null,
          rating: 4.5,
        },
      ]);
    }, 1000);
  });
}
