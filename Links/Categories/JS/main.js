
//Link API : 
//categories : https://www.themealdb.com/api/json/v1/1/categories.php
let word = ""
let boxWidth = $(".open_bar").outerWidth();
console.log(boxWidth)
$(".open_bar").animate({left:`-${boxWidth}px`})
$(".always_open").animate({left:`0`})
$(".links").click(function(){
    if($(".open_bar").css("left") === "0px"){
        //closed
        $(".open_bar").animate({left:`-${boxWidth}px`},600)
        $(".always_open").animate({left:`0`},600)
        $("#change_icon").removeClass(`fa-solid fa-xmark`)
        $("#change_icon").addClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
    }
    else{
        //opened
        $(".open_bar").animate({left:`0px`},600)
        $(".always_open").animate({left:`18%`},600)
        $("#change_icon").removeClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
        $("#change_icon").addClass(`fa-solid fa-xmark`)
    }
})

//API
async function getMeal(){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let mealdescription = await meal.json()
    console.log(mealdescription)
    displayDataMeal(mealdescription.categories)
}
function displayDataMeal(data){
    let box = ''
    for(let i=0;i<data.length;i++){
        console.log(i)
        box += `<div data-id="${data[i].strCategory}" class="card1 col-lg-3 col-md-6 col-sm-12 my-3 position-relative">
        <img src="${data[i].strCategoryThumb}">
        <div class="caption px-2">
            <h2>${data[i].strCategory}</h2>
        </div>
    </div>`
    }
    document.getElementById("card_categories").innerHTML = box
    document.querySelectorAll(".card1").forEach(card => {
        card.addEventListener('click', () => {
            word = card.getAttribute('data-id');
            console.log("clicked")
            console.log(word)
            $(".content1").addClass("d-none")
            $(".content").removeClass("d-none")
            getWord(word)
        })
    })
}
getMeal()

async function getWord(word){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${word}`)
    let mealdescription = await meal.json()
    console.log(mealdescription.meals)
    displayMeals(mealdescription.meals)
}

function displayMeals(data){
    let box = ''
    for(let i=0;i<data.length;i++){
        console.log(i)
        box += `<div data-id="${data[i].idMeal}" class="card1 col-lg-3 col-md-6 my-3 position-relative">
        <img src="${data[i].strMealThumb}">
        <div class="caption px-2">
            <h2>${data[i].strMeal}</h2>
        </div>
    </div>`
    }
    document.getElementById("card").innerHTML = box
    document.querySelectorAll(".card1").forEach(card => {
        card.addEventListener('click', () => {
            id = card.getAttribute('data-id');
            console.log("clicked")
            console.log(id)
            $(".content").addClass("d-none")
            $(".description").removeClass("d-none")
            getId(id)
        })
    })
}

async function getId(id){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let mealdescription = await meal.json()
    console.log(mealdescription.meals)
    displayIDMeal(mealdescription.meals)
}

function displayIDMeal(data){
    let box = ''
    for(let i=0;i<data.length;i++){
        if(data[i].strTags === null){
            data[i].strTags = " "
            $(".word").addClass("d-none")
        }
        if(data[i].strMeasure1 === ""){
            $(".span1").addClass("d-none")
        }
        if(data[i].strMeasure2 === ""){
            $(".span2").addClass("d-none")
        }
        if(data[i].strMeasure3 === ""){
            $(".span3").addClass("d-none")
        }
        if(data[i].strMeasure4 === ""){
            $(".span4").addClass("d-none")
        }
        if(data[i].strMeasure5 === ""){
            $(".span5").addClass("d-none")
        }
        if(data[i].strMeasure6 === ""){
            $(".span6").addClass("d-none")
        }
        if(data[i].strMeasure7 === ""){
            $(".span7").addClass("d-none")
        }
        if(data[i].strMeasure8 === ""){
            $(".span8").addClass("d-none")
        }
        if(data[i].strMeasure9 === ""){
            $(".span9").addClass("d-none")
        }
        if(data[i].strMeasure10 === ""){
            $(".span10").addClass("d-none")
        }
        if(data[i].strMeasure11 === ""){
            $(".span11").addClass("d-none")
        }
        if(data[i].strMeasure12 === ""){
            $(".span12").addClass("d-none")
        }
        if(data[i].strMeasure13 === ""){
            $(".span13").addClass("d-none")
        }
        if(data[i].strMeasure14 === ""){
            $(".span14").addClass("d-none")
        }
        if(data[i].strMeasure15 === ""){
            $(".span15").addClass("d-none")
        }
        if(data[i].strMeasure16 === ""){
            $(".span16").addClass("d-none")
        }
        if(data[i].strMeasure17 === ""){
            $(".span17").addClass("d-none")
        }
        if(data[i].strMeasure18 === ""){
            $(".span18").addClass("d-none")
        }
        if(data[i].strMeasure19 === ""){
            $(".span19").addClass("d-none")
        }
        if(data[i].strMeasure20 === ""){
            $(".span20").addClass("d-none")
        }
        
        box += `<div class="col-lg-12  ">
        <img src="${data[i].strMealThumb}">
        <h2 class="my-3">${data[i].strMeal}</h2>
    </div>
    <div class="col-lg-12   my-4">
        <h2>Instructions</h2>
        <p>${data[i].strInstructions}</p>
        <h3 class="d-inline-block">Area:</h3> ${data[i].strArea}
        <br>
        <h3 class="d-inline-block">Category:</h3> <span>${data[i].strCategory}</span>

        <h3>Recipes : </h3>
        
        <div class="spans">
            <span class="mx-2 span1">${data[i].strMeasure1}</span>
            <span class="mx-2 span2">${data[i].strMeasure2}</span>
            <span class="mx-2 span3">${data[i].strMeasure3}</span>
            <span class="mx-2 span4">${data[i].strMeasure4}</span>                            
            <span class="mx-2 span5">${data[i].strMeasure5}</span>
            <br>
            <br>
            <span class="mx-2 span6">${data[i].strMeasure6}</span>                            
            <span class="mx-2 span7">${data[i].strMeasure7}</span>
            <span class="mx-2 span8">${data[i].strMeasure8}</span>                            
            <span class="mx-2 span9">${data[i].strMeasure9}</span>
            <span class="mx-2 span10">${data[i].strMeasure10}</span>
            <br>
            <br>                            
            <span class="mx-2 span11">${data[i].strMeasure11}</span>
            <span class="mx-2 span12">${data[i].strMeasure12}</span>                            
            <span class="mx-2 span13">${data[i].strMeasure13}</span>
            <span class="mx-2 span14">${data[i].strMeasure14}</span>                            
            <span class="mx-2 span15">${data[i].strMeasure15}</span>
            <br>
            <br>
            <span class="mx-2 span16">${data[i].strMeasure16}</span>                            
            <span class="mx-2 span17">${data[i].strMeasure17}</span>
            <span class="mx-2 span18">${data[i].strMeasure18}</span>
            <span class="mx-2 span19">${data[i].strMeasure19}</span>
            <span class="mx-2 span20">${data[i].strMeasure20}</span>
        </div>

        
        <h3 class="my-4">Tags : </h3>
        <div class="word mx-3">
            <p style="padding: 3px 3px;">${data[i].strTags}</p>
        </div>
        <div class="buttons">
            <button class="btnsource btn btn-success"><a href="${data[i].strSource}" target="_blank" style="color: white; text-decoration: none;">Source</a></button>
            <button class="btnyoutube btn btn-danger"><a href="${data[i].strYoutube}" target="_blank" style="color: white; text-decoration: none;">Youtube</a></button>
        </div>
    </div>`
    }
    document.getElementById("demo").innerHTML = box
}

//return to main page on reload
if (performance.navigation.type === 1) {
    // This means the page was reloaded
    window.location.replace("../../index.html");
}
