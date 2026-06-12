const appTitle = document.getElementById("app-title");
const movieCount = document.getElementById("movie-count");
const movieForm = document.getElementById("movie-form");
const titleInput = document.getElementById("title-input");
const genreInput = document.getElementById("genre-input");
const movieList = document.getElementById("movie-list");
const clearWatchedBtn = document.getElementById("clear-watched-btn");

const filterBtns = document.querySelectorAll(".filter-btn");

console.log(appTitle);
//---------------Phase 2-------------------------
// Change the app title
appTitle.textContent = "My Movie Watchlist";

// Read and log the current count text
console.log("Count says:", movieCount.textContent);

// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies";

// .add() puts a class on the element
movieCount.classList.add("active-filter");
// Look at the browser — what changed?

// .remove() takes it off
// movieCount.classList.remove("active-filter");

// .toggle() adds if missing, removes if present — one call does both
movieCount.classList.toggle("active-filter");
movieCount.classList.toggle("active-filter");

// getAttribute reads the HTML attribute as it was written in the file
console.log(titleInput.getAttribute("placeholder")); // → "Movie title..."
console.log(titleInput.getAttribute("type")); // → "text"
console.log(titleInput.getAttribute("required")); // → "" (empty string = it exists)

// setAttribute changes or adds an attribute
titleInput.setAttribute("placeholder", "Try: The Matrix");
// Refresh — the placeholder text in the input changed

// // removeAttribute removes it entirely
titleInput.removeAttribute("required");
// // The input is no longer required — blank submissions won't be blocked
titleInput.setAttribute("required", ""); // put it back

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → returns the initial value from the HTML file
// .value               → returns the live value typed by the user
//---------------Phase 3-------------------------
movieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read the movie title from the input — use .value, not getAttribute
  const title = titleInput.value;

  // Read the genre the same way
  const genre = genreInput.value;
  console.log("event listener says: ");
  console.log(title, genre);
  const movieCard = createMovieCard(title, genre);
  //movieList.append(movieCard)

  // At the end, reset the form so the inputs are blank for the next entry
  movieForm.reset();
  //  .reset() clears all inputs in the form at once — no need to blank them one by one
});
//---------------Phase 4-------------------------
function createMovieCard(title, genre) {
  const movieCard = document.createElement("li"); // 1. Create the outer <li>
  movieCard.classList.add("movie-card"); //- give it the class "movie-card"
  movieCard.setAttribute("data-genre", genre); //- use setAttribute to set data-genre to the genre value

  const movieInfo = document.createElement("div"); // 2. Create a <div> for the info section — class "movie-info"
  movieInfo.classList.add("movie-info");
  //    Inside it, create two <span> elements:
  const movieTitle = document.createElement("span");
  movieTitle.classList.add("movie-title"); //    - one with class "movie-title" — set its textContent to title
  movieTitle.textContent = title;

  const movieGenre = document.createElement("span");
  movieGenre.classList.add("movie-genre"); //    - one with class "movie-genre" — set its textContent to genre (show "No genre" if empty)
  movieGenre.textContent = "No genre";

  movieInfo.append(movieTitle, movieGenre); //    Append both spans into the info div

  const movieActions = document.createElement("div"); // 3. Create a <div> for the buttons — class "movie-actions"
  movieActions.classList.add("movie-actions");
  //    Inside it, create two <button> elements:
  const watchButton = document.createElement("button");
  watchButton.classList.add("watch-btn"); //    - one with class "watch-btn" — textContent "Mark Watched"
  watchButton.textContent = "Mark Watched";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn"); //    - one with class "remove-btn" — textContent "Remove"
  removeButton.textContent = "Remove";

  movieActions.append(watchButton, removeButton); //    Append both buttons into the actions div

  movieCard.append(movieInfo, movieActions); // 4. Append the info div and actions div into the <li>

  return movieCard; // 5. return the card — do NOT append it here
  //    The function's job is to build and return. Appending is the caller's job.
}
// const movieDetails = createMovieCard(title, genre);

// movieList.append(movieDetails);
// console.log(movieDetails);
// //updateCount();
// movieForm.reset();
