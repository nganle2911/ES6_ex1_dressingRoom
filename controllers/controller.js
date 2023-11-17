import Item from "../models/Item.js";

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

export {
    getUINavPills,
    getSameTypeArr,
    getUIEachItem,
    getUITabPanes,
    getDataItem
}