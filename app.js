var id = 1;

function Cat(name,picture){
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ['Happy', 'Mean-n-Nasty'];
    this.petCount = 0;

    id++;
}

var catLady = {
    cats: []
}

var cat1 = new Cat('Mr. Snibbly',"http://4.bp.blogspot.com/--jEwLoAO26k/TV-Ml8IklzI/AAAAAAAAA14/YcPLkbSKd7M/s1600/cougar-picture.jpg");
var cat2 = new Cat('Snuffles',"http://e.rpp-noticias.io/medium/2015/10/28/031403_18413.jpg");
var cat3 = new Cat('Mittens',"http://elelur.com/data_images/mammals/cougar/cougar-05.jpg");

catLady.cats.push(cat1, cat2, cat3);

//console.log(catLady);

function draw(cats){
    //document.getElementById('cats').innerText = catLady.cats[0].name;
    //draw all cats to screen in a given html format

    var template = ''; //evry cat have its own template

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //check number of pets to determine status
        var statusIndex = 0;
        if(cat.petCount > 5){
            statusIndex = 1;
        }

        template+=`
            <div class="cat">
                <img src="${cat.picture}" alt="">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Number of Pets: ${cat.petCount}</p>
                <button type="button" onclick="pet(${cat.id})">Pet Me!</button>
                <button type="button" onclick="catnip(${cat.id})">Catnip</button>
            </div>  
        `
    }
    document.getElementById("cats").innerHTML = template;

}

function pet(catId){
    //find by id
    var catToPet = getCatById(catLady.cats, catId);

    //increment petcount
    catToPet.petCount++;

    draw(catLady.cats);
}

function catnip(catId){
    var catToNip = getCatById(catLady.cats, catId);
    catToNip.petCount = 0;
    draw(catLady.cats);
}

function getCatById(catArray, catId){
    for(var i = 0; i < catArray.length; i++){
        var cat = catArray[i];

        if(catId === cat.id){
            return cat;
        }
    }
}

draw(catLady.cats);