import ChosenItemsList from "../models/ChosenItemsList.js";
import GetData from "../utils/GetData.js";
import { checkItemInChosenList, getDataItem, getUINavPills, getUITabPanes, renderOnContain } from "./controller.js";

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