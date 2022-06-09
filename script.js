const rc_container = document.querySelector("#es-magne-forte_0522_1");
const tableTitles = rc_container.querySelectorAll(".es-general__tableTitle");
const curTitle = rc_container.querySelector(".es-cur__sectionTitle");
const curMainCnt = rc_container.querySelector(".es-cur__mainCnt");
const curQuestionImg = rc_container.querySelector(".es-cur__questionImgCnt");

tableTitles.forEach((tableTitle) => {
  tableTitle.addEventListener("click", (e) => {
    const tableCnt = e.target.closest(".es-table__tableCnt");
    const tableItemsCnt = tableCnt.querySelector(".es-table__itemsCnt");
    const tableItems = tableCnt.querySelectorAll(".es-table__item");
    const arrow = tableCnt.querySelector(".es-table__arrow");

    arrow.classList.toggle("es-table__arrowClose");

    tableItems.forEach((item, index) => {
      setTimeout(
        () => item.classList.toggle("es-general__invisible"),
        index * 100
      );
    });

    setTimeout(() => {
      tableItemsCnt.classList.toggle("es-general__displayNone");
      tableCnt.classList.toggle("es-general__tableCntClosed");
    }, 500);
  });
});

curTitle.addEventListener("click", () => {
  curMainCnt.classList.toggle("es-cur__mainCntHide");
  curQuestionImg.classList.toggle("es-cur__questionImgCntHide");
});

function reveal() {
  const reveals = document.querySelectorAll(".es-ben__infoItem");
  console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("es-ben__infoItemActive");
    } else {
      reveals[i].classList.remove("es-ben__infoItemActive");
    }
  }
}

window.addEventListener("scroll", reveal);
