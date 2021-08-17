const items = [
  {
    id: 1,
    title: "FEZ",
    category: "arcade",
    price: 12.55,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffc%2FFez_(video_game)_cover_art.png%2F1200px-Fez_(video_game)_cover_art.png&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 2,
    title: "LIMBO",
    category: "arcade",
    price: 15.55,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F363214-limbo-xbox-one-front-cover.png&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 3,
    title: "Terraria",
    category: "arcade",
    price: 19.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iiG18XscXIuodvDB-LvQ3AHaJk%26pid%3DApi&f=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 4,
    title: "Journey",
    category: "arcade",
    price: 25.90,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnerdbacon.com%2Fwp-content%2Fuploads%2F2016%2F11%2FJourney-Cover-Art.jpg&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 5,
    title: "Bastion",
    category: "rpg",
    price: 20.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ebd71_8cTsiQY8W3Q6NWLQHaI2%26pid%3DApi&f=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 6,
    title: "Night in the woods",
    category: "adventure",
    price: 20.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.senscritique.com%2Fmedia%2F000010078010%2Fsource_big%2FNight_in_the_Woods.jpg&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 7,
    title: "Disco Elysium",
    category: "rpg",
    price: 30.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffontmeme.com%2Fimages%2Fdisco-elysium-font-1.jpg&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 8,
    title: "Oxenfree",
    category: "adventure",
    price: 14.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.H2GhW0a3SXwbgX8yONemxwHaLH%26pid%3DApi&f=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 9,
    title: "Divinity: Original sin",
    category: "rpg",
    price: 25.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgematsu.com%2Fwp-content%2Fuploads%2F2015%2F08%2FDivinity-OS-2-Ann.jpg&f=1&nofb=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  },
  {
    id: 10,
    title: "Ori and the blind forest",
    category: "adventure",
    price: 12.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bkmBAC6Gy7DY-7qWQ7-tYwHaLH%26pid%3DApi&f=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe voluptas natus eos consequatur, inventore tenetur quis aut exercitationem officiis.",
  }
];

const menuSection = document.querySelector(".menu__container");
const buttons = document.querySelectorAll(".menu__btn");

// display items as html code - inject into html.
function displayMenuItems(items) {
  let displayContent = items.map(item => {
    // console.log(item);
    return `<section class="menu__section">
              <img src=${item.image} alt="${item.title}" class="image" />
              <div class="menu__description">
                <div class="menu__header">
                  <h2 class="menu__title">${item.title}</h2>
                  <span class="menu__price">${item.price.toFixed(2) + "€"}</span>
                </div>
                <hr class="title__hr" />
                <p class="menu__text">${item.description}</p>
              </div>
          </section>`;
  });
  //toFixed rounds the number to two decimals. In our example, becasue we have declared 2 in brackets.
  displayContent = displayContent.join("");
  // console.log(displayContent);
  menuSection.innerHTML = displayContent;
}



// load items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(items);
});


// filter items
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const filterBtn = e.currentTarget.dataset.id; //dataset needs data-id on your html element for it to work! 
    const filteredMenu = items.filter(item => {
      if (item.category === filterBtn) {
        return item; //creates an array of values which evaluate to true.

        // console.log(item.title);
      }
    });
    if (filterBtn === "all") {
      displayMenuItems(items);
    } else {
      displayMenuItems(filteredMenu);
    }
    // console.log(filteredMenu);
  });
});