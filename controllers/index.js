import ChosenItemsList from "../models/ChosenItemsList.js";
import GetData from "../utils/GetData.js";
import { getDataItem, getUINavPills, getUITabPanes } from "./controller.js";

let getData = new GetData();
let itemList = [];
let chosenList = new ChosenItemsList(); 

// TODO: Render items list on UI
const renderHTML = () => {
    let contentNavPills = "";
    let contentTabPanes = "";

    getData.getListData().then((result) => {
        itemList = result;
        console.log("itemList", itemList);
        itemList.navPills.map((item) => {
            let activeClass = item.type === "topclothes" ? "active" : "";

            contentNavPills += getUINavPills(item, activeClass);
            contentTabPanes += `
                <div class="tab-pane ${activeClass}" id=${item.type}>
                    <div class="row">
                        ${getUITabPanes(item.type, result.tabPanes)}
                    </div>
                </div>
            `;
        });

        // todo: render on UI
        document.getElementById("myTab").innerHTML = contentNavPills;
        document.getElementById("nav-tabContent").innerHTML = contentTabPanes;

    }).catch((err) => {
        console.log(err);
    });
};
renderHTML();

// TODO: Try item on => item will be printed out 
window.tryOnItem = (itemClicked) => {
    const item = itemList.tabPanes.find((item) => {
        return item.id === itemClicked;
    });
    
    // todo: get data when clicking on button "try on"
    let newItem = getDataItem(item); 
    console.log("newItem", newItem);

    // todo: kiem tra su ton tai cua newItem trong chosenList 
    let index = checkItemInChosenList(newItem);

    // todo: neu index = -1 => chua ton tai => add vao chosenList : neu != -1 => ton tai roi => thay the 
    if (index === -1) {
        // add to chosenList
        chosenList.addItem(newItem);
        console.log("chosenList after add", chosenList.arr);
    } else {
        // replace bang newItem
        chosenList.arr[index] = newItem;
        console.log("chosenList after replace", chosenList.arr);
    }

    // todo: sau khi co chosenList hoan chinh => render ra giao dien 
    renderOnContain(chosenList.arr); 
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


