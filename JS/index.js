var bookmarkNameInput = document.getElementById("name")
var websiteUrlInput = document.getElementById("url")
var addRow = document.getElementById("tableBody")

var userInputsArray ;

if(localStorage.getItem("localStorageQuotes")==null) {
    userInputsArray =[]
}
else {
     userInputsArray =JSON.parse(localStorage.getItem("localStorageQuotes"))
    displayBookmark()
}

function addBookmark() {
    var bookmark = {
        index: userInputsArray.length +1,
        name: bookmarkNameInput.value,
        visit: websiteUrlInput.value,
    }
    userInputsArray.push(bookmark)
    localStorage.setItem("localStorageQuotes",JSON.stringify(userInputsArray))
    displayBookmark()
    clearInputs()
}

function displayBookmark() {
   var cartona= ""
    for(var i=0; i< userInputsArray.length; i++){
        cartona +=`<tr>
            <th scope="row">${userInputsArray[i].index}</th>
            <td>${userInputsArray[i].name}</td>
            <td><a target="__blank" href="${userInputsArray[i].visit}"><button class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
            <td><button onclick="deleteButton(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>delete</button></td>
          </tr>`
    }
    addRow.innerHTML= cartona;
}

function clearInputs() {
    bookmarkNameInput.value=null;
    websiteUrlInput.value=null;
}

function deleteButton (deleteProduct) {
    userInputsArray.splice(deleteProduct,1);
    displayBookmark()
}


