//select all buttons and cards
const filterButtons = document.querySelectorAll(".filterButtons button");
const cards = document.querySelectorAll(".filterableCards .card");
function groupCards(e)
{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target);

    //iterate over each card
    cards.forEach(card => 
        {
            //add "hide" class to hide the card initially
            card.classList.add("hide");
            //check if the card mathces the filter or "all" is selected
            if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all")
            {
                card.classList.remove("hide");
            }
        })
}

//console.log(filterButtons, cards);


//Add click event listener to each button
filterButtons.forEach(button => button.addEventListener("click", groupCards));


