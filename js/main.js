let input = document.getElementById("item");
let result = document.querySelector(".result > span");
let buttons = document.querySelectorAll(".buttons span");
let itemValue = document.getElementById("localval");
let inpvalue;

buttons.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      inpvalue = input.value;

      checkItem();
    }

    if (e.target.classList.contains("show")) {
      inpvalue = input.value;

      showItem();
    }

    if (e.target.classList.contains("add")) {
      inpvalue = input.value;

      addItem();
    }

    if (e.target.classList.contains("delet")) {
      inpvalue = input.value;

      deletItem();
    }

    if (e.target.classList.contains("show-all")) {
      inpvalue = input.value;

      showAll();
    }
    if (e.target.classList.contains("delet-all")) {
      inpvalue = input.value;

      deletAll();
    }
  });
});

function hent(value = false) {
  if (value) {
    result.innerHTML = "Please Fill All the Input Faildes";
  } else result.innerHTML = "name failed can't be Empty";
}

function emptyTheInputs(emptyAll = false) {
  if (emptyAll) {
    input.value = "";
    itemValue.value = "";
  } else {
    input.value = "";
  }
}

function checkItem() {
  if (inpvalue == "") {
    hent();
  } else {
    if (localStorage.getItem(inpvalue)) {
      result.innerHTML = `an item calld  <span>${inpvalue}</span> has ben Found `;
    } else {
      result.innerHTML = `no itme whith the name  <span>${inpvalue}</span>`;
    }
    emptyTheInputs();
  }
}

function showItem() {
  if (inpvalue == "") {
    hent();
  } else {
    if (localStorage.getItem(inpvalue)) {
      result.innerHTML = `the result of the item <span>${inpvalue}</span> fund<div>value="${localStorage.getItem(
        inpvalue
      )}"</div>  `;
    } else {
      result.innerHTML = `no itme whith the name  <span>${inpvalue}</span>`;
    }
    emptyTheInputs();
  }
}

function addItem() {
  if (inpvalue == "" || itemValue.value == "") {
    hent(true);
  } else {
    if (localStorage.getItem(inpvalue)) {
      result.innerHTML = `ther is allreday an item with the name <span>${inpvalue}</span>`;
    } else {
      localStorage.setItem(inpvalue, itemValue.value);
      result.innerHTML = `the item calld <span>${inpvalue}</span> seccessfuly add`;
    }
    emptyTheInputs(true);
  }
}

function deletItem() {
  if (inpvalue == "") {
    hent();
  } else {
    if (localStorage.getItem(inpvalue)) {
      localStorage.removeItem(`${inpvalue}`);
      result.innerHTML = `the item with the name <span>${inpvalue}</span> seccessfuly deleted`;
    } else {
      result.innerHTML = `no itme whith the name  <span>${inpvalue}</span>`;
    }
    emptyTheInputs();
  }
}

function showAll() {
  if (localStorage.length > 0) {
    result.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      result.innerHTML += `${i + 1}-name:<span>${localStorage.key(
        i
      )}</span>,value="${localStorage.getItem(localStorage.key(i))}" <br>`;
    }
    result.parentElement.style.textAlign = "left";
  } else {
    result.innerHTML = `no itme funed`;
  }
}

function deletAll() {
  if (localStorage.length > 0) {
    result.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      localStorage.clear();
    }
    result.innerHTML += `<span>local storage cleared</span> <br>`;
  } else {
    result.innerHTML = `local storage is Empty`;
  }
}
