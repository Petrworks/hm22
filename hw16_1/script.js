const INGREDIENTS = {
  cocoa: ['cocoa powder', 'milk', 'sugar'],
  cappuccino: ['milk', 'coffee'],
  smoothie: ['banana', 'orange', 'sugar'],
  'matcha frappe': ['matcha', 'milk', 'ice'],
};

const menu = document.querySelector('#menu');

const removeSubMenu = () => {
  const menus = menu.querySelectorAll('ol');
  if (menus.length > 0) {
    menus.forEach((item) => menus.remove());
  }
};

const onClickHandler = (event) => {
  const target = event.target;
  console.log(target);

  removeSubMenu();

  const itemName = target.textContent;
  const itemIngridients = INGREDIENTS[itemName];

  if (itemIngridients && Array.isArray(itemIngridients)) {
    const list = document.createElement('ol');

    itemIngridients.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.append(li);
    });
    target.append(list);
  }
};

menu.addEventListener('click', onClickHandler);
