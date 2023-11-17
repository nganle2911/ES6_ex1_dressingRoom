import ChosenItemsList from "../models/ChosenItemsList.js";
import Item from "../models/Item.js";

let chosenList = new ChosenItemsList(); 

// todo: Get UI for navPills
const getUINavPills = (itemNav, activeClass) => {
    return `
        <button class="nav-link ${activeClass} mx-1" data-bs-toggle="tab" type="button" data-bs-target=#${itemNav.type} role="tab">${itemNav.showName}</button>
    `;
}

// todo: Create a new array for items having the same type for tabPanes
const getSameTypeArr = (navPillType, itemsArr) => {
    let newArr = [];
    itemsArr.map((item) => {
        // Check if navpill's type == tabPane's type => add this item to newArr
        if (item.type === navPillType) {
            newArr.push(item);
        }
    });
    return newArr;
}

// todo: Get each item's UI for each tabPane  
const getUIEachItem = (newArr) => {
    let itemContentHtml = "";
    // console.log("newArr", newArr);

    newArr.map((item) => {
        itemContentHtml += `
            <div class="col-3">
                <div class="card">
                    <img src=${item.imgSrc_jpg} class="card-img-top" alt="..." >
                    <div class="card-body text-center">
                        <h5 class="card-title">${item.name}</h5>
                        <button onclick="tryOnItem('${item.id}')" href="#" class="btn btn-primary tryOn" style="width: 100%;">Try on</button>
                    </div>
                </div>
            </div>
        `;
    });
    return itemContentHtml;
}

// todo: Get UI for tabPanes
const getUITabPanes = (navPillType, itemsArr) => {
    let newArr = null;
    let tabPane = null;

    switch (navPillType) {
        case "topclothes":
            newArr = getSameTypeArr("topclothes", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "botclothes":
            newArr = getSameTypeArr("botclothes", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "shoes":
            newArr = getSameTypeArr("shoes", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "handbags":
            newArr = getSameTypeArr("handbags", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "necklaces":
            newArr = getSameTypeArr("necklaces", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "hairstyle":
            newArr = getSameTypeArr("hairstyle", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;
        case "background":
            newArr = getSameTypeArr("background", itemsArr);
            tabPane = getUIEachItem(newArr);
            break;

        default:
            break;
    }
    return tabPane;
}

// todo: Get data from item 
const getDataItem = (item) => {
    let id = item.id;
    let name = item.name;
    let type = item.type;
    let img_png = item.imgSrc_png;
    let img_jpg = item.imgSrc_jpg;
    let desc = item.desc;

    return new Item(id, name, type, desc, img_jpg, img_png);
}

// todo: tim san phan chon co trung voi san pham trong chosenList khong 
const checkItemInChosenList = (chosenItem) => {
    console.log("chosenList", chosenList);
    // this chosenItem doesn't exist in chosenList 
    let index = -1; 

    // todo: check if chosenItem existed in chosenList
    index = chosenList.arr.findIndex((item) => {
        return item.type === chosenItem.type; 
    });
    console.log("index", index);

    return index; 
}

// todo: Render contain on UI
const renderOnContain = (chosenItems) => {
    console.log("chosenItems", chosenItems);
    chosenItems.map((item) => {
        if (item.type === "topclothes") {
            renderBikiniTop(item.imgSrc_png);
        } else if (item.type === "botclothes") {
            renderBikiniBottom(item.imgSrc_png);
        } else if (item.type === "shoes") {
            renderFeet(item.imgSrc_png);
        } else if (item.type === "handbags") {
            renderHandbag(item.imgSrc_png);
        } else if (item.type === "hairstyle") {
            renderHairstyle(item.imgSrc_png);
        } else if (item.type === "necklaces") {
            renderNecklace(item.imgSrc_png);
        } else {
            renderBackground(item.imgSrc_png);
        }
    })
}

// todo: render bikiniTop
const renderBikiniTop = (img) => {
    document.getElementById("bikiniTop").style.cssText = `
        position: absolute;
        width: 500px;
        height: 500px;
        background: url("${img}");
        transform: scale(0.5);
        z-index: 3;
        top: -53px;
        left: -24px;
    `;
}

// todo: render bikiniBottom
const renderBikiniBottom = (img) => {
    document.getElementById("bikiniBottom").style.cssText = `
        width: 1000px;
        height: 1000px;
        position: absolute;
        background: url("${img}");
        background-repeat: no-repeat;
        transform: scale(0.5);
        top: -30%;
        left: -32%;
    `;
}

// todo: render feet
const renderFeet = (img) => {
    document.getElementById("feet").style.cssText = `
        width: 1000px;
        height: 1000px;
        position: absolute;
        background: url("${img}");
        background-repeat: no-repeat;
        transform: scale(0.5);
        top: -30%;
        left: -32%;
    `;
}

// todo: render handbag
const renderHandbag = (img) => {
    document.getElementById("handbag").style.cssText = `
        width: 1000px;
        height: 1000px;
        position: absolute;
        background: url("${img}");
        background-repeat: no-repeat;
        transform: scale(0.5);
        top: -30%;
        left: -32%;
    `;
}

// todo: render hairstyle
const renderHairstyle = (img) => {
    document.getElementById("hairStyle").style.cssText = `
        width: 1000px;
        height: 1000px;
        background: url("${img}");
        position: absolute;
        top: -75%;
        right: -57%;
        transform: scale(0.15);
        z-index: 4;
    `;
}

// todo: render necklace
const renderNecklace = (img) => {
    document.getElementById("neckLace").style.cssText = `
        width: 500px;
        height: 1000px;
        position: absolute;
        bottom: -40%;
        right: -3.5%;
        transform: scale(0.5);
        z-index: 4;
        background: url("${img}");
    `;
}

// todo: render background 
const renderBackground = (img) => {
    document.getElementById("backGround").style.cssText = `
        width: 900px;
        height: 1500px;
        background-image: url("${img}");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -90%;
        right: -50%;
        transform: scale(0.5);
        z-index: -1;
    `;
}

export {
    getUINavPills,
    getSameTypeArr,
    getUIEachItem,
    getUITabPanes,
    getDataItem,
    checkItemInChosenList,

    // render items on model
    renderOnContain,
    renderBikiniTop,
    renderBikiniBottom, 
    renderHandbag,
    renderFeet, 
    renderNecklace, 
    renderBackground
}