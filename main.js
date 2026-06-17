const card1 = document.querySelector(".card_1");
const card2 = document.querySelector(".card_2");
const card3 = document.querySelector(".card_3");
const heroBtn = document.querySelector(".hero_button button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close_button");
const input1 = document.querySelector(".input_content input");
const input2 = document.querySelector(".input_content_3 input");
const input3 = document.querySelector(".input_content_4 input");
const input4 = document.querySelector(".input_container_3");
const number1 = document.querySelector(".number_1");
const number2 = document.querySelector(".number_2");
const number3 = document.querySelector(".number_3");
const orderBtn1 = document.querySelector(".order-btn1");
const orderBtn2 = document.querySelector(".order-btn2");
const orderBtn3 = document.querySelector(".order-btn3");
const card = document.querySelector(".hero_card");

card1.addEventListener("click", () => {
  card1.classList.add("active");
  card2.classList.remove("active");
  card3.classList.remove("active");

  if (card1.classList.contains("active")) {
    number1.classList.add("green");
  }
});

card2.addEventListener("click", () => {
  card2.classList.add("active");
  card1.classList.remove("active");
  card3.classList.remove("active");

  if (card2.classList.contains("active")) {
    number1.classList.add("green");
  }
});

card3.addEventListener("click", () => {
  card3.classList.add("active");
  card1.classList.remove("active");
  card2.classList.remove("active");

  if (card3.classList.contains("active")) {
    number1.classList.add("green");
  }
});

heroBtn.addEventListener("click", () => {
  modal.classList.add("active");
  heroBtn.classList.add("remove");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
  heroBtn.classList.remove("remove");
});

input1.addEventListener("input", () => {
  if (input1.value.trim() !== "") {
    number2.classList.add("green");
  }

  if (input1.value.trim() == "") {
    number2.classList.remove("green");
  }

  if (input1.value !== "@") {
    input1.classList.remove("green");
  }
});

input2.addEventListener("input", () => {
  if (input2.value.trim() !== "") {
    number3.classList.add("green");
  }

  if (input2.value.trim() == "") {
    number3.classList.remove("green");
  }
});

orderBtn1.addEventListener("click", () => {
  card.scrollIntoView({
    behavior: "smooth",
  });
  heroBtn.classList.add("flash");
});

orderBtn2.addEventListener("click", () => {
  card.scrollIntoView({
    behavior: "smooth",
  });
});

orderBtn3.addEventListener("click", () => {
  card.scrollIntoView({
    behavior: "smooth",
  });
});
