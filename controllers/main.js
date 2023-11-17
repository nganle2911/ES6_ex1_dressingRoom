import callData from "../utils/callData.js";
import { getUINavPills, getUITabPanes } from "../controllers/controller.js";


// TODO: Render UI body for Dressing Room
const renderHTML = () => {
    let contentNavPills = "";
    let contentTabPanes = "";

    callData().then((result) => {

        result.navPills.map((item) => {
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

        // todo: render html on UI
        document.getElementById('myTab').innerHTML = contentNavPills;
        document.getElementById('nav-tabContent').innerHTML = contentTabPanes;
    }).catch((err) => {
        console.log("err", err);
    });
};

// TODO: Render body content on UI
renderHTML();

// TODO: Try item on => id will be printed out 
window.tryOnItem = () => {
    console.log("aloha");

}





