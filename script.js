
const menu = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


const searchInput = document.getElementById("search");
const menuCatalog = document.getElementById("menu");
const aboveButton = document.getElementById("ratingAbove");
const belowButton = document.getElementById("ratingBelow");
const allRecipeBtn = document.getElementById("all-recipe");
const vegBtn = document.getElementById("veg");
const nonvegBtn = document.getElementById("non-veg");
const menuBtn = document.getElementById("menu-btn");
const navBtns = document.getElementById("nav-btns");

// //toggle-btn
// menuBtn.addEventListener("click", function () {
//     navBtns.classList.toggle("active");
// });
//sorting
allRecipeBtn.addEventListener("click", () =>{
    displayRecipes(menu);
});
vegBtn.addEventListener("click", () => {
    const vegRecipes = menu.filter(recipe => recipe.type === "veg");
    displayRecipes(vegRecipes);
});

nonvegBtn.addEventListener("click", () => {
    const nonVegRecipes = menu.filter(recipe => recipe.type === "non-veg");
    displayRecipes(nonVegRecipes);
});

//ratings
aboveButton.addEventListener("click", () => {
    const above4Rating = menu.filter(recipe => recipe.rating >= 4);
    displayRecipes(above4Rating);
});

belowButton.addEventListener("click", () => {
    const below4Rating = menu.filter(recipe => recipe.rating < 4);
    displayRecipes(below4Rating);
});


// search function
searchInput.addEventListener("input", filterRecipes);
function filterRecipes() {
    const searchText = searchInput.value.toLowerCase();
    const filteredRecipes = menu.filter(recipe => recipe.name.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
}

function toggleLike(recipe) {
    recipe.isLiked = !recipe.isLiked;
    displayRecipes(menu);
}

function displayRecipes(recipes) {
    const menuCatalog = document.getElementById("menu"); 

    menuCatalog.innerHTML = ""; 

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
        <div class="card-info">
            <div class="card-info-1">
            <p> ${recipe.type}</p>
            <h3>${recipe.name}</h3>
            <h5>${recipe.time}</h5>
            </div>
            <div  class="card-info-2">
            <p><span><i class="fa-solid fa-star" style="color: #eef207;"></i></span>${recipe.rating}</p>
            <button class="like-btn" data-recipe-index="${menu.indexOf(recipe)}">
                ${recipe.isLiked ? '<i class="fa-solid fa-heart" style="color: #f40119;"></i>' : '<i class="fa-regular fa-heart"></i>'}
            </button>
            <p><i class="fa-regular fa-comment"></i></P>
            </div>
        </div>
            
        `;
        menuCatalog.appendChild(card);
         
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => toggleLike(recipe));
    });
}
displayRecipes(menu);
