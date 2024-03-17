'use strict';
//!

const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul > li');

  console.log(`Category: ${categoryName} (${categoryItems.length} items)`);
});
