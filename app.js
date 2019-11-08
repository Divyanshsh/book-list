let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input = document.querySelector("input");
let button = document.querySelector(".button");
button.addEventListener("click", function (e) {
    function addBook() {
        if (input1.value == '' || input2.value == '' || input3.value == '') {
            // let alert = document.querySelector(".alert");
            let alert2 = document.querySelector(".alert2");
            let second = document.querySelector(".second");
            // alert.style.display = "block";
            alert2.style.display = "block";
            second.style.display = "block";

            setTimeout(function () {
                // let alert = document.querySelector(".alert");
                let alert2 = document.querySelector(".alert2");
                let second = document.querySelector(".second");
                // alert.style.display = "none";
                alert2.style.display = "none";
                second.style.display = "none";
            }, 2000);
        } else {
            var table = document.querySelector(".table");
            var row = document.createElement("tr");
            row.innerHTML =
           `<td>${input1.value}</td>
            <td>${input2.value}</td>
            <td>${input3.value}</td>
            `
            table.appendChild(row);

            // let alert1 = document.querySelector(".alert1");
            let alert1 = document.querySelector(".alert1");
            let first = document.querySelector(".first");
            // alert.style.display = "block";
            alert1.style.display = "block";
            first.style.display = "block";
            // alert1.style.backgroundColor = "none";

            setTimeout(function () {
                // let alert = document.querySelector(".alert");
                let alert1 = document.querySelector(".alert1");
                let first = document.querySelector(".first");
                // alert.style.display = "none";
                alert1.style.display = "none";
                first.style.display = "none";
            }, 2000);
        }
    }
    addBook();
    e.preventDefault();
});

var del = document.querySelector(".button-del");
del.addEventListener("click", function (e) {
    function deleteList() {
        let input1 = document.querySelector(".input1");
        let table = document.querySelector(".table");
        let input2 = document.querySelector(".input2");
        let input3 = document.querySelector(".input3");
        if (input1.value == '' || input2.value == '' || input3.value == '') {
            // let alert = document.querySelector(".alert");
            let alert3 = document.querySelector(".alert3");
            let third = document.querySelector(".third");
            // alert.style.display = "block";
            alert3.style.display = "block";
            third.style.display = "block";

            setTimeout(function () {
                // let alert = document.querySelector(".alert");
                let alert3 = document.querySelector(".alert3");
                let third = document.querySelector(".third");
                // alert.style.display = "none";
                alert3.style.display = "none";
                third.style.display = "none";
            }, 2000);
        } else {
            // let table = document.querySelector(".table");
            // let tr = document.querySelector(".row");
            // table.remove(tr);
            let valueList = [`${input.value}`];
            let i;
            for(i=0; i <= valueList.length; i++)
            {
                valueList[`${input.value}`].remove();
            }

        }
    }
    deleteList();
    e.preventDefault();
});
