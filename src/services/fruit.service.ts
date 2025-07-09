const FRUITS = [
  'Apple',
  'Banana',
  'Orange',
  'Grape',
  'Strawberry',
  'Blueberry',
  'Mango',
  'Pineapple',
  'Watermelon',
  'Kiwi',
  'Peach',
  'Pear',
  'Cherry',
  'Plum',
  'Avocado'
];

export async function getAllFruits() {
  console.log('Fetching all fruits from service');
  
  return {
    fruits: FRUITS,
    count: FRUITS.length,
  };
}