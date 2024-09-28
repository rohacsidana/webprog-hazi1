let movies = [
  {
    title: "Oppenheimer",
    studio: "Universal",
    month: "July",
    reviews: [10, 1, 7, 9, 10, 10, 9],
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    studio: "Sony",
    month: "June",
    reviews: [9, 8, 9, 9, 6],
  },
  {
    title: "Dungeons & Dragons: Honor Among Thieves",
    studio: "Paramount",
    month: "March",
    reviews: [9, 8],
  },
  {
    title: "Mission: Impossible - Dead Reckoning Part One",
    studio: "Skydance",
    month: "July",
    reviews: [7, 8, 3, 9],
  },
  {
    title: "The Hunger Games: The Ballad of Songbirds and Snakes",
    studio: "Lionsgate",
    month: "November",
    reviews: [],
  },
  {
    title: "John Wick 4",
    studio: "Lionsgate",
    month: "March",
    reviews: [6, 10, 9],
  },
  {
    title: "Saw X",
    studio: "Lionsgate",
    month: "September",
    reviews: [7],
  },
  {
    title: "Barbie",
    studio: "Mattel",
    month: "July",
    reviews: [1, 10, 1, 10, 1, 10, 1, 10],
  },
];

task1();
task2();
task3();
task4();
task5();

/* 1.1 **Keresd meg a márciusban (March) megjelent filmeket.** (1 pont) */
function task1() {
  movies.forEach((movie) => {
    if (movie.month === "March") {
      console.log(movie);
    }
  });
}

/* 1.2 **Írasd ki a filmek címét (és csak a címét!) ABC rendben.** (1 pont)
Olyan összehasonlítási módot használj, amely működne ékezetes karakterek esetén is! */
function task2() {
  const titles = movies
    .map((movie) => movie.title)
    .sort((m1, m2) => {
      return m1.localeCompare(m2, "hu");
    });

  console.log(titles);
}

/* 1.3 **Készíts egy egyedi listát a filmeket gyártó stúdiók nevéről.
      Tehát az eredményként kiadott tömbben a stúdiók nevei szerepeljenek, azonban mindegyik csak egyszer.** (1 pont) */
function task3() {
  const uniqueStudios = [...new Set(movies.map((m) => m.studio))];
  console.log(uniqueStudios);
}

/* 1.4 **Döntsd el, hogy szerepel-e olyan film a listában ami Szeptemberben (September) jelent meg.** (1 pont) */
function task4() {
  const septemberMovie = movies.find((m) => m.month === "September");
  console.log(septemberMovie == null ? "no" : "yes");
}

/* 1.5 **Írasd ki, hogy összesen (nem filmenként!) hány darab értékelés készült.** (1 pont) */
function task5() {
  const counter = movies.reduce((accumulator, movie) => {
    return (accumulator += movie.reviews.length);
  }, 0);

  console.log(counter);
}
