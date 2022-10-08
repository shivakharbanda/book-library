console.log("working fine!!");


let myLibrary = [];
let submitBtn = document.querySelector(".add_item");

let removeBtns = document.querySelectorAll(".removeBtn");


function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

function addBookToLibrary(arr) {
    //console.log("hello");
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("not_read").checked?false:true;

    //console.log(title, author, pages, read);


    let book = new Book(title, author, pages, read);
    arr.push(book)
    generateCards(arr);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.getElementById("pages").value = "";
    
};



submitBtn.addEventListener("click", () => {
    if (document.querySelector("#title").value == "" && document.querySelector("#author").value == "" && document.getElementById("pages").value == "") {
        alert("empty fields not allowd!!")
        return;
    };
    addBookToLibrary(myLibrary);
});

function generateCards(arr) {
    cardContainer = document.querySelector(".cards");
    cardContainer.textContent = '';
    let count = 0
    arr.forEach(element => {
        //console.log(element.title);

        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.setAttribute(`data-index`, count)

        titleP = document.createElement("p");
        authorP = document.createElement("p");
        pagesP = document.createElement("p");;
        readP = document.createElement("p");

        titleP.textContent = `Title : ${element.title}`;
        authorP.textContent = `Author : ${element.author}`;
        pagesP.textContent = `Total Pages : ${element.pages}`;
        //console.log(element);
        readP.textContent = `Read? : ${element.readStatus ? "YES": "NO"}`;

        newCard.appendChild(titleP);
        newCard.appendChild(authorP);
        newCard.appendChild(pagesP);
        newCard.appendChild(readP);

        removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.setAttribute("data-index", count)
        removeBtn.textContent = "Remove Card"
        

        cardContainer.appendChild(newCard);
        newCard.appendChild(removeBtn)
        count += 1;
    });

    removeBtns = document.querySelectorAll(".removeBtn");

    [...removeBtns].forEach(btn => {
        //console.log(btn);

        btn.addEventListener("click", () => {
            //console.log(btn.dataset.index);
            arr.splice(btn.dataset.index, 1);
            generateCards(arr);

        });
    });

    
};


