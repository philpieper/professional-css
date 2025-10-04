const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.getElementById("season");
const edibleFilter = document.getElementById("edible");
const noResultsMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index}`;
  card.style.viewTransitionName = `mushroom-${mushroomId}`;
});

document.addEventListener("DOMContentLoaded", function () {
  currentFilters.season = seasonalFilter.value;
  currentFilters.edible = edibleFilter.value;
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => filterCards());
  } else {
    filterCards();
  }
});

function handleSelectChange(event) {
  currentFilters[event.target.id] = event.target.value;
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => filterCards());
  } else {
    filterCards();
  }
}

seasonalFilter.addEventListener("change", (event) => handleSelectChange(event));
edibleFilter.addEventListener("change", (event) => handleSelectChange(event));

function filterCards() {
  let anyVisible = false;

  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    if (
      (matchesSeason || currentFilters.season === "all") &&
      (matchesEdible || currentFilters.edible === "all")
    ) {
      card.hidden = false;
      anyVisible = true;
    } else {
      card.hidden = true;
    }

    if (anyVisible) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}

// If JavaScript is enabled, show the filters
function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
