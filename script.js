const accordionTitle = document.querySelectorAll(".accordion_title");
const accordionDetail = document.querySelectorAll(".accordion_detail");

for (let i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener("click", () => {
    accordionDetail[i].classList.toggle("open");
  });
}
