let myList = JSON.parse(localStorage.getItem("myList")) || [];

function renderList() {
    const ul = document.getElementById("list");
    ul.innerHTML = "";

    myList.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button onclick="deleteItem(${index})" class="deleteBtn">X</button>
        `;

        ul.appendChild(li);
    });
}


function addItem() {
    const item = document.getElementById("txtNum1").value.trim();

    if (item === "") {
        alert("Please type something.");
        return;
    }

    myList.push(item);

    // Save permanently
    localStorage.setItem("myList", JSON.stringify(myList));

    // Refresh the visible list
    renderList();

    document.getElementById("txtNum1").value = "";
}

function deleteItem(index) {
    myList.splice(index, 1); // remove item at position "index"

    // update localStorage
    localStorage.setItem("myList", JSON.stringify(myList));

    // redraw the list
    renderList();
}


renderList();

