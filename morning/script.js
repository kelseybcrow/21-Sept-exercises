const gallery = document.querySelector('.gallery');

const cities = [
  [
    'https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg',
    'London',
  ],
  ['https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg', 'Paris'],
  [
    'https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg',
    'New York',
  ],
  [
    'https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg',
    'Nova Scotia',
  ],
  ['https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg', 'Tokyo'],
  [
    'https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg',
    'Venice',
  ],
];

cities.forEach((city) => {
  const src = city[0];
  const alt = city[1];

  gallery.innerHTML += `
    <div class='image'>
      <img src=${src} alt=${alt}>
      <div class='image__description'>${alt}</div>
    </div>
  `;
});

const dog = {};
dog.name = 'Sasha';
dog.age = 6;
dog['color'] = 'tan';
dog['friendly'] = true;

console.log(dog);

Object.keys(dog).forEach((key) => console.log(key));
Object.values(dog).forEach((value) => console.log(value));
