import burgerMenu from "./burger.js";
import tabs from "./tabs.js";


burgerMenu ({
    selectorMenu: '.nav_list',
    openMenuSelector: 'nav_list_active'
});

tabs ({
    selectorTabsBtn: '.tabs_btn',
    activeClassBtn: 'tabs_btn_active',
    selectorTabsElement: '.tabs_item',
    activeClassTab: 'tabs_item_active'
});