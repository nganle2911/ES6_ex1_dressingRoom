import callData from "../utils/callData.js";
import { getUINavPills, getUITabPanes } from "../controllers/controller.js";
import Item from "../models/Item.js";

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
        $("#myTab").html(contentNavPills);
        $("#nav-tabContent").html(contentTabPanes);
    }).catch((err) => {
        console.log("err", err);
    });
};

// TODO: 
$('body').delegate('.tryOn', 'click', () => {
    // Get item's values when pressing on "Try on" button
    let id = $(this).data("id"); 

    console.log("id", id);
    
    
});


// TODO: Render body content on UI
$(document).ready(() => {
    renderHTML();
});

