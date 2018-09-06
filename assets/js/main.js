// Event Listeners
document.getElementById('pizza-form').addEventListener("submit",validate);

document.getElementById('add-pizza').addEventListener("click",addPizza);

document.body.addEventListener("click", deleteItem);

document.getElementById('drink-quantity').addEventListener("click",nonPizza);

document.getElementById('breadstick').addEventListener("click",nonPizzasticks);
document.body.addEventListener("click",close);

document.getElementById('salad-quantity').addEventListener("click",nonPizzaSalad);
document.getElementById('pizza-order').addEventListener("click",notify);

// Functions
function close(e){
  	if (e.target.className === 'close') {
		e.target.parentElement.style.display = 'none';	
	}
        
    
};



function validate(e) {

	let x = document.getElementById('customer_name').value;
		var y = document.getElementById('phone').value;
	if (x === "" || y=== '' || y.length < 10) {
		alert("Name must be filled out");
		e.preventDefault();
	}else{
		e.preventDefault();
			document.getElementById('modal').style.display = 'block';
       document.getElementById('customer_name').value = "";
       document.getElementById('phone').value = "";
		
	}
	
}



function addPizza(e) {
	e.preventDefault();
	
	var add = document.createElement('div');
	add.className = "pizza-select";
	add.innerHTML = `
     <div class="pizza-select style="justify-content:center;margin:auto;">
       
<div class="pizza_and_flavor">
<label id="label" for="pizza_type">Pizza</label>
<br>
<select class="pizza_choices" name="pizza_type">
  <option value="cheese">Cheese</option>
  <option value="pepperoni">Pepperoni</option>
  <option value="hawaiian">Hawaiian</option>
  <option value="supreme">Supreme</option>
  <option value="the hog">The Hog</option>
    <option value="veggie">Veggie</option>
</select>
</div>

<div class="size">
  <label id="label" for="pizza_size">Size</label>
  <br>
<select class="pizza_choices" name="pizza_size" id="size">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>
</div>

<div class="crust">
 <label id="label" for="crust_options">Crust</label>
 <br>
<select class="pizza_choices" name="crust_options">
  <option value="thick">Thick</option>
  <option value="thin">Thin</option>
 </select>
</div>
</div>
<span class="remove-pizza" alt="Remove selection" style="width: 20%;
    margin-top: 20px;
    margin-left: 20px;width: 40%;
    margin-bottom: 0px;">Remove Pizza</span>

	`;
	
	const f = document.getElementById('add-pizza');
	document.getElementById('pizza-form').appendChild(add);
	document.getElementById('pizza-form').insertBefore(add,f);
}


function deleteItem(e) {
	if (e.target.className === 'remove-pizza') {
		e.target.parentElement.remove();	
	}
}

function nonPizza() {
	let x = document.getElementById('drink').value;
	
	if (x === 'none') {
		document.getElementById('drink-quantity').style.display = "none";     
		document.querySelector("input[name='drink_quantity']").style.display = "none";     
	} else {
		document.getElementById('drink-quantity').style.display = "block";     
		document.querySelector("input[name='drink_quantity']").style.display = "block"; 
	}
}

function nonPizzasticks() {
	let y = document.getElementById('breadstick').value;
	
	if (y === 'none') {
		document.getElementById('breadstick_quantity').style.display = "none";     
		document.querySelector("input[name='breadstick_quantity']").style.display = "none";     
	} else {
		document.querySelector("label[for='breadstick_quantity']").style.display = "block";     
		document.querySelector("input[name='breadstick_quantity']").style.display = "block"; 
	}
}

function nonPizzaSalad() {
	let q = document.getElementById('salad-quantity').value;
	
	if (q === 'no') {
		document.querySelector("label[for='salad_quantity']").style.display = "none";     
		document.querySelector("input[name='salad_quantity']").style.display = "none";     
	} else {
		document.querySelector("label[for='salad_quantity']").style.display = "none";     
		document.querySelector("input[name='salad_quantity']").style.display = "block"; 
	}

   function autorun()
   {
    
   }
   if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
   else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
   else window.onload = autorun;
    (function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.nodeMenu = settings.nodeMenu;
      settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
      return this.nodeMenu.classList.toggle('js-menu_activated');
    }
  }

  let nodeMenu = document.querySelector('body');
  
  new Menu({
    nodeMenu: nodeMenu,
    nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
  });
})();


};