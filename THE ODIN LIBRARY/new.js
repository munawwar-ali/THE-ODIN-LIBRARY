const id = crypto.randomUUID();
console.log(id);

const addBookBtn = document.getElementById("addBookBtn");
const bookDialog = document.getElementById("bookDialog");
const closeDialog = document.getElementById("closeDialog");
const addBook = document.getElementById("addBook");

const form = bookDialog.querySelector("form");
const bookcontainer = document.querySelector(".book-container");

addBookBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  bookDialog.close();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.querySelector('input[name="status"]:checked').value;
  const tittles = document.getElementById("title").value.trim();
  const authors = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();

  if (tittles && authors && pages && status) {
    const newBook = document.createElement("div");
    newBook.classList.add("book-card");
    newBook.innerHTML = `<h3>${tittles}</h3>
   <p>by ${authors}</p>
   <p> ${pages}</p>
   <p><strong>Read:</strong>${status}</p>
   <button class="remove-btn">Remove</button>`;
    bookcontainer.appendChild(newBook);
    form.reset();
    bookDialog.close();

    const removeBtn = newBook.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => newBook.remove());
  }
});
