import GetData from "../utils/GetData.js";
import { getDataItem, getUINavPills, getUITabPanes } from "./controller.js";

let getData = new GetData();
let itemList = []; 

// TODO: Render items list for on UI
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
        document.getElementById('myTab').innerHTML = contentNavPills;
        document.getElementById('nav-tabContent').innerHTML = contentTabPanes;
    }).catch((err) => {
        console.log(err);
    });
}

// todo: Render body content on UI
renderHTML()

// TODO: Try item on => id will be printed out 
window.tryOnItem = (itemId) => {
    // console.log(itemList);
    const item = itemList.tabPanes.find((item) => {
        return item.id === itemId;
    });
    console.log("item", item);
    
    // todo: get data when clicking on button "try on"
    let newItem = getDataItem(item); 
    console.log("newItem", newItem);
}
