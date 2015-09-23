<<<<<<< HEAD
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);
=======
var playlist = [];

playlist.push('Uptown Funk', 'Respect', 'Uptown Girl');
playlist.unshift('Super Duper Mario', 'Save the Dinosaurs');

printList(playlist);
>>>>>>> 287e6f1e0ec4c0d8195a0816350ee8180ee8b434
