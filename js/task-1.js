const listEl = document.querySelectorAll('li ul');
console.log('Number of catagories:', listEl.length);

const itemEls = document.querySelectorAll('li.item');

itemEls.forEach(itemEl => {
  const titleEl = itemEl.querySelector('h2').textContent;
  const countEl = itemEl.querySelectorAll('ul li');
  console.log('Category:', titleEl);
  console.log('Elements:', countEl.length);
});
