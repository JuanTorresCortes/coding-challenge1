const removeButton = document.getElementById("remove-button");
const counter = document.getElementById("my-counter");
const addButton = document.getElementById("add-button");
const stars = document.getElementById("star-container");

counter.innerText = 5;

let count = 5;
let totalStars = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];

removeButton.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    counter.innerText = count;
    starCount();
  } else {
    alert("Can not remove any more stars");
  }
});

addButton.addEventListener("click", () => {
  if (count < 5) {
    count = count + 1;
    counter.innerText = count;
    starCount();
  } else {
    alert("Can't add more than 5 stars");
  }
});

const starCount = () => {
  if (count > 0) {
    const displayedStars = totalStars.slice(0, count);
    stars.innerText = displayedStars.join(" ");
  } else {
    stars.innerText = "😔"; // Display sad face when stars = 0
  }
};

starCount(); // Initial star count
