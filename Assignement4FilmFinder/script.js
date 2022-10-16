// Selectors
const getUlMovieList = document.querySelector("#movielist");
const getButtonMovieFilter = document.querySelectorAll(".filter-movies");
const searchInput = document.querySelector(".input");

// Add Movies to DOM
const addMoviesToDOM = function (movies) {
  while (getUlMovieList.firstChild) {
    getUlMovieList.removeChild(getUlMovieList.firstChild);
  }
  movies.map(function (movies) {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", movies.poster);
    newImg.setAttribute("title", movies.title);
    const newATag = document.createElement("a");
    newATag.setAttribute("href", "https://www.imdb.com/title/" + movies.imdbID);
    newATag.setAttribute("target", "_blank");
    const selectLi = getUlMovieList.appendChild(newLi);
    const selectATag = selectLi.appendChild(newATag);
    selectATag.appendChild(newImg);
  });
};

// Movie filters
const filterMovies = function (selectedFilter) {
  console.log(selectedFilter);
  const selectedMovies = movies.filter((movies) =>
    movies.title.includes(selectedFilter)
  );
  console.log(selectedMovies);
  addMoviesToDOM(selectedMovies);
};

const filterLatestMovies = function () {
  const selectedMovies = movies.filter(
    (movies) => movies.year.match(/\d+/g) >= 2014
  );
  console.log(selectedMovies);
  addMoviesToDOM(selectedMovies);
};

// Radio Button event
getButtonMovieFilter.forEach(function (event) {
  event.addEventListener("change", function (event) {
    const clickedRadioButton = event.target.value;
    handleOnChangeEvent(clickedRadioButton);
  });
});

const handleOnChangeEvent = function (event) {
  switch (event) {
    case "new-movies":
      console.log("You are looking for new movies.");
      filterLatestMovies();
      break;
    case "avenger-films":
      console.log("You are looking for Avenger movies.");
      filterMovies("Avenger");
      break;
    case "x-men-films":
      console.log("You are looking for X-Men movies.");
      filterMovies("X-Men");
      break;
    case "princess-films":
      console.log("You are looking for Princess movies.");
      filterMovies("Princess");
      break;
    case "batman-films":
      console.log("You are looking for Batman movies.");
      filterMovies("Batman");
      break;
    default:
  }
};

// Search Bar Input

searchInput.addEventListener("input", (input) => {
  let value = input.target.value.toLowerCase();
  console.log(value);
  if (value.toLowerCase()) {
    const searchedMovies = movies.filter((movies) =>
      movies.title.toLowerCase().includes(value)
    );

    console.log(searchedMovies);
    addMoviesToDOM(searchedMovies);
  } else {
    addMoviesToDOM(movies);
  }
});

//
addMoviesToDOM(movies);
