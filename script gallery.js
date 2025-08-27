const dessertTab = document.getElementById('dessert-tab');
const foodTab = document.getElementById('food-tab');
const drinkTab = document.getElementById('drink-tab');

foodTab.addEventListener('click', function(event) {
    event.preventDefault(); 

    window.location.href = 'Index Food Gallery.html';
});

drinkTab.addEventListener('click', function(event) {
    event.preventDefault(); 

    window.location.href = 'Index Gallery.html';
});

dessertTab.addEventListener('click', function(event) {
    event.preventDefault(); 

    window.location.href = 'Index Dessert Gallery.html';
});
