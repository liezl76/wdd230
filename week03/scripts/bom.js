    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");
  
    // Initialize chaptersArray from localStorage or an empty array
    let chaptersArray = getChapterList() || [];
  
    // Populate the displayed list
    chaptersArray.forEach(chapter => {
      displayList(chapter);
    });
  
    // Button click event listener
    button.addEventListener("click", () => {
      if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
      }
    });
  
    // Function to display a list item
    function displayList(item) {
      let li = document.createElement('li');
      let deleteButton = document.createElement('button');
      li.textContent = item;
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete');
      li.append(deleteButton);
      list.append(li);
  
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
      });
    }
  
    // Function to set chaptersArray in localStorage
    function setChapterList() {
      localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
  
    // Function to get chaptersArray from localStorage
    function getChapterList() {
      return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
  
    // Function to delete a chapter
    function deleteChapter(chapter) {
      chapter = chapter.slice(0, chapter.length - 1);
      chaptersArray = chaptersArray.filter(item => item !== chapter);
      setChapterList();
    }