const table = {
  lines: () => document.getElementsByClassName("leads-person"),
  coluns: () => document.getElementsByTagName("td"),
};

const searchElement = {
  button: () => document.getElementById("search-button"),
  bar: () => document.getElementById("Search-bar"),
};

searchElement.bar().addEventListener("keyup", () => {
  let expression = searchElement.bar().value;
  for (let i in table.lines()) {
    if (true === isNaN(i)) {
      continue;
    }
    let content = table.lines()[i].innerHTML;
    if (true == content.includes(expression)) {
      table.lines()[i].style.display = "";
    } else {
      table.lines()[i].style.display = "none";
    }
  }
});
