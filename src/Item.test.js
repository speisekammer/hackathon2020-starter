import  items  from './ExampleData';

test('item count is working correctly', () => {
  expect(items[0].getCount()).toBe(10);
  expect(items[1].getCount()).toBe(1);
  expect(items[2].getCount()).toBe(2);
});

test('number of item sets is working correctly', () => {
  expect(items[0].getNumberOfItemSets()).toBe(3);
  expect(items[1].getNumberOfItemSets()).toBe(1);
  expect(items[2].getNumberOfItemSets()).toBe(2);
});

test('adding an item set is working correctly', () => {
  items[0].clearItemSet();
  expect(items[0].getNumberOfItemSets()).toBe(0);
  items[0].addSet();
  expect(items[0].getNumberOfItemSets()).toBe(1);
});