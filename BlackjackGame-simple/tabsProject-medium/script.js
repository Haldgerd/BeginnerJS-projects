//object articles
const articles = [{
  title: "history",
  description: "3002 japanese bolws sushi eats eal well kimono suit under strict sea food teriyaki yum konichiwa hello samurai katana. Travel budhism buda chopstics sakura fall geisha maiko drums."
},
{
  title: "vision",
  description:  "3012 japanese bolws sushi eats eal well kimono suit under strict sea food teriyaki yum konichiwa hello samurai katana. Travel budhism buda chopstics sakura fall geisha maiko drums."
},
{
  title: "goals",
  description: "3022 japanese bolws sushi eats eal well kimono suit under strict sea food teriyaki yum konichiwa hello samurai katana. Travel budhism buda chopstics sakura fall geisha maiko drums."
}
]

const displayButtons =  document.querySelectorAll(".btn--display");
const articleTitle = document.querySelector("h2");
const articleContent = document.querySelector(".article__description");

function displayArticle(index) {
  let article = articles[index];
  articleTitle.textContent = article.title;
  articleContent.textContent = article.description;
}

// first button starts as active
displayButtons[0].classList.add("btn--active");
displayArticle(0); // 0 being the index of fist object corresponding to first button.

displayButtons.forEach((btn, index) => {
  //console.log(btn);
  //console.log(index);
  btn.addEventListener("click", (e) => {
    let currentButton = e.currentTarget;
    currentButton.classList.add("btn--active");
    displayArticle(index);
    displayButtons.forEach(btn => {
      // method to only have one content open at the time (eg. one active button at the time)
      if (btn.classList.contains("btn--active") && (btn !== currentButton)) {
        btn.classList.remove("btn--active");
      };
    });
    });
  });