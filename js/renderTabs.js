import getData from "./getData.js";

const getCard = function(dataCard) {
    const li = document.createElement('li');
    li.classList.add('card');
    
    switch (this) {
        case 'video':
            li.classList.add('card_video')
            li.innerHTML = ` 
                <a href="${dataCard.link}" target="_blank" class="card_link tube">
                    <figure>
                        <img src="${dataCard.preview}" alt="${dataCard.description}" class="card_video_img">
                        <figcaption>${dataCard.description}</figcaption>
                    </figure>
                </a>`;
            break;
        case 'photo':
            li.classList.add('card_img')
            li.innerHTML = `<img class="card_photo_img" src="${dataCard.link}" alt="${dataCard.description}">`;
            break;
        case 'goods':
            li.classList.add('card_product')
            li.innerHTML = `
                <article class="product">
                    <img src="${dataCard.picture}" alt="${dataCard.name}" class="product_img">
                    <h2 class="product_title">${dataCard.name}</h2>
                    <div class="product_wrapper_buy">
                        <p class="product_price">${dataCard.price}₽</p>
                        <button class="product_btn_buy">
                            <svg class="product_btn_icon">
                                <use xlink:href="#add" />
                            </svg>
                        </button>
                    </div>
                </article>`;
            break;
        
        default:
            li.innerHTML = `Нет данных`;
    }

    return li;
};

const renderTabs = async(i = 0) => {
    const tabsContent = document.querySelectorAll('.tabs_content');

    const type = tabsContent[i].dataset.base;

    const data = await getData(`db/${type}.json`);
   
    const listElem = data.map(getCard, type);

    tabsContent[i].textContent = '';

    tabsContent[i].append(...listElem);
};

export default renderTabs;


