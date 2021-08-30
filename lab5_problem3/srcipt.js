var project_name_id = document.querySelector("#project_name");
var project_agency_id = document.querySelector("#project_agency");
var position_id = document.querySelector("#positon");
var description_id = document.querySelector("#description");
var contact_id = document.querySelector("#contact");
var category_id = document.querySelector("#category");
var img_poster_id = document.getElementById("img_poster");
var img_qrcode_id = document.getElementById("img_qrcode");
var ref = document.querySelector("#dataList");

try {
    changeData("0001");
}
catch (err) {
    console.error(err);
}


fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            ref.innerHTML += `
            <label for="${element.project_id}" id="${element.project_id}block">
            <input id="${element.project_id}" type="radio" checked="checked" name="radio" onclick="changeData(this.id);">
            <div class="dataCard">
                <div>
                    <h3>${element.project_name}</h3>
                    <p>${element.project_agency}</p>
                </div>
                <button class="deleteDataButton"  onclick="deleteElement('${element.project_id}block')">
                    ลบ
                </button>
            </div>
            </label>`;
        })
    });

function deleteElement(id) {
    document.getElementById(id).remove();
}

function changeData(id) {
    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var object = data.filter(element => element.project_id == id);
            project_name_id.innerHTML = object[0].project_name;
            project_agency_id.innerHTML = object[0].project_agency;
            position_id.innerHTML = object[0].location.latitude + ", " + object[0].location.longitude;
            description_id.innerHTML = object[0].description;
            contact_id.innerHTML = object[0].contact;
            category_id.innerHTML = object[0].category;
            img_poster_id.href = object[0].img_poster;
            img_qrcode_id.href = object[0].img_qrcode;
        });
}