const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value !== "") {
      if (!chaptersArray.includes(input.value)) {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
      } else {
        alert("Chapter already added!"); // Inform the user about duplicate entry
      }
      input.value = "";
      input.focus();
    }
  });

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete");
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    const cleanedChapter = chapter.slice(0, -1); // Remove the last character
    chaptersArray = chaptersArray.filter((item) => item !== cleanedChapter);
    setChapterList();
  }

  document.addEventListener("DOMContentLoaded", function () {
    chaptersArray.forEach((chapter) => {
      displayList(chapter);
    });
  });