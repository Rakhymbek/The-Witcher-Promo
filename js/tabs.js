const tabs = option => {
    const {
        selectorTabsBtn,
        activeClassBtn,
        selectorTabsElement,
        activeClassTab,
        callback = () => {},
    } = option;

    const tabsBtn = document.querySelectorAll(selectorTabsBtn);
    const tabsElems = document.querySelectorAll(selectorTabsElement);

    tabsBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < tabsBtn.length; i++) {
                if (tabsBtn[i] === btn) {
                    tabsBtn[i].classList.add(activeClassBtn);
                    tabsElems[i].classList.add(activeClassTab);
                }else {
                    tabsBtn[i].classList.remove(activeClassBtn);
                    tabsElems[i].classList.remove(activeClassTab);
                }
            }
        });
    });
};

export default tabs;