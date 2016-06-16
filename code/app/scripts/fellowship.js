console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middle_earth = document.createElement('section');
  middle_earth.setAttribute('id', 'middle-earth');
  for (var i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    var heading = document.createElement('h1');
    heading.textContent = lands[i];
    land.appendChild(heading);
    middle_earth.appendChild(land);
  }
  document.body.appendChild(middle_earth);

  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var list = document.createElement('ul');
  for (var i = 0; i < hobbits.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hobbits[i];
    listItem.setAttribute('class', 'hobbit');
    list.appendChild(listItem);
  }

  var shireArticle = document.querySelectorAll('article')[0];
  shireArticle.appendChild(list);

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  var the_ring = document.createElement('div');
  the_ring.setAttribute('class', 'magic-imbued-jewelry');
  the_ring.addEventListener('click',nazgulScreech);

  document.querySelectorAll('.hobbit')[0].appendChild(the_ring);


  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var asideTag = document.createElement('aside');
  var list = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = buddies[i];
    list.appendChild(listItem);
  }
  var rivendellArticle = document.querySelectorAll('article')[1];
  rivendellArticle.appendChild(list);



  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies();

// Part 5


function beautifulStranger() {
  var striderList = document.querySelectorAll('ul')[1];
  var striderItem = striderList.querySelectorAll('li')[3];
  striderItem.textContent = "Aragorn";

  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  var hobbitsList = document.querySelectorAll('ul')[0];
  var rivendellArticle = document.querySelectorAll('article')[1];
  rivendellArticle.appendChild(hobbitsList);

  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  var rivendellArticle = document.querySelectorAll('article')[1];
  var the_fellowship = document.createElement('div');

  rivendellArticle.appendChild(the_fellowship);

  var buddyList = rivendellArticle.querySelectorAll('ul')[0];
  the_fellowship.appendChild(buddyList);

  var hobbitList = rivendellArticle.querySelectorAll('ul')[0];
  the_fellowship.appendChild(hobbitList);

  alert("They have joined your party!");


  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  var rivendellArticle = document.querySelectorAll('article')[1];
  var buddyList = rivendellArticle.querySelectorAll('ul')[0];
  var gandalf = buddyList.querySelectorAll('li')[0];
  gandalf.textContent = 'Gandalf the White';
  gandalf.setAttribute('style', 'background-color:white; border: 3px; border-style: solid; border-color: gray;');

  // change the 'Gandalf the Gray' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {

  alert("The horn of gondor has been blown!");

  var rivendellArticle = document.querySelectorAll('article')[1];
  var buddyList = rivendellArticle.querySelectorAll('ul')[0];
  var boromir = buddyList.querySelectorAll('li')[4];
  boromir.setAttribute('style', 'text-decoration: line-through;');
  rivendellArticle.appendChild(boromir);

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){

  var rivendellArticle = document.querySelectorAll('article')[1];
  var buddyList = rivendellArticle.querySelectorAll('ul')[1];
  var frodo = buddyList.querySelectorAll('li')[0];
  var sam = buddyList.querySelectorAll('li')[1];
  var mordorArticle = document.querySelectorAll('article')[2];


  var list = document.createElement('ul');

  mordorArticle.appendChild(list);
  list.appendChild(frodo);
  list.appendChild(sam);

  var mount_doom = document.createElement('div');
  mount_doom.setAttribute('id', 'mount-doom');
  mordorArticle.appendChild(mount_doom);


  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  var mordorArticle = document.querySelectorAll('article')[2];
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordorArticle.appendChild(gollum);

  var list = mordorArticle.querySelectorAll('ul')[0];
  var frodo = list.querySelectorAll('li')[0];
  var ring = frodo.querySelectorAll('div')[0];

  gollum.appendChild(ring);

  var mount_doom = mordorArticle.querySelectorAll('div')[0];
  mount_doom.appendChild(gollum);

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {

  var mordorArticle = document.querySelectorAll('article')[2];
  var mount_doom = mordorArticle.querySelectorAll('div')[0];
  var gollum = mount_doom.querySelectorAll('div')[0];
  gollum.remove(0);

  var shireArticle = document.querySelectorAll('article')[0];
  var rivendellArticle = document.querySelectorAll('article')[1];
  var hobbits = rivendellArticle.querySelectorAll('ul')[1];

  shireArticle.appendChild(hobbits);

  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();
