const news_data = [{
    id: "water_cooler_talks",
    src: "img/chating_people.png",
    alt: "people chatting by the water cooler",
    date: "October 23, 2021",
    title: "Water Cooler Talks",
    text: "Water cooler talks is a phenomenon in offices when employees stop at coolers to chat.",
    object_position: '30%',
},
{
    id: "new_bottles",
    src: "img/new_bottles.jpg",
    alt: "new bottles in production",
    date: "January 03, 2022",
    title: "New Year — New Sparkle Bottles",
    text: "We are pleased to introduce our new Sparkle water bottles. They are great for offices.",
    object_position: '55%',
},
{
    id: "water_quality",
    src: "img/water_quality.webp",
    alt: "water from the bottle is poured into a glass",
    date: "March 26, 2022",
    title: "How to Test Water Quality?",
    text: "How to make sure that the water is really clean? Read our article and become a skilled expert!",
    object_position: '32%',
},
{
    id: "water_delivery",
    src: "img/water_delivery.webp",
    alt: "the woman receives water from the courier and confirms the delivery",
    date: "July 29, 2022",
    title: "New Promo on Water Delivery",
    text: "Order water delivery from Monday to Wednesday in New York and get a 15% discount on your order!",
    object_position: '50%',
},
{
    id: "exciting_news",
    src: "img/exciting_news.jpg",
    alt: "exciting news illustration",
    date: "September 15, 2022",
    title: "Exciting News Announcement",
    text: "We have some exciting news to share with you! Stay tuned for the big reveal.",
    object_position: 'center',
},
{
    id: "healthy_hydration",
    src: "img/healthy_hydration.jpg",
    alt: "healthy hydration image",
    date: "November 10, 2022",
    title: "Achieve Healthy Hydration",
    text: "Discover the benefits of staying hydrated and how it contributes to a healthy lifestyle.",
    object_position: 'center',
}
];
const NumCards = 4;
const rand = [...new Array(news_data.length)].map((el, ind) => ind);
rand.sort((a, b) => 0.5 - Math.random());

function renderNews(news, rand, NumCards) {
    let newsDomString = '';
    for (let i = 0; i < NumCards; i++) {
        const card = news[rand[i]];
        newsDomString += `
        <div class="news__card">
            <div class="card__foto">
                <img id="${card.id}" class="card__foto" src="${card.src}" alt="${card.alt}">
            </div>
            <div class="card__colector">
                <div class="card__date">
                    <div class="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                            xml:space="preserve" style="max-width:100%" height="100%">
                            <path
                                d="M50,13.304c-20.039,0-36.34,16.301-36.34,36.341c0,20.039,16.301,36.341,36.34,36.341s36.341-16.302,36.341-36.341  C86.341,29.605,70.039,13.304,50,13.304z M64.812,64.459c-0.598,0.599-1.381,0.897-2.165,0.897c-0.784,0-1.566-0.299-2.164-0.897  l-12.651-12.65c-0.035-0.034-0.045-0.082-0.079-0.118c-0.242-0.268-0.447-0.557-0.579-0.873c-0.151-0.362-0.238-0.758-0.238-1.173  v-0.007V35.9c0-1.691,1.371-3.062,3.062-3.062c1.691,0,3.062,1.371,3.062,3.062v12.479L64.812,60.13  C66.009,61.326,66.009,63.263,64.812,64.459z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="card__tag date">
                        <p>${card.date}</p>
                    </div>
                </div>
                    <p class="card__title">${card.title}</p>
                    <p class="card__text">${card.text}</p>
                    <a class="card__more" href="#">READ MORE</a>
                </div>
            </div>`
    }
    const newsContainer = document.querySelector(".news__cards");
    newsContainer.innerHTML = newsDomString;
    ReStyle(news, rand, NumCards);
}
function ReStyle(news, rand, NumCards) {
    if (window.innerWidth >= 1000) {
        for (let i = 0; i < NumCards; i++) {
            const cardImg = document.getElementById(news[rand[i]].id);
            if (cardImg) {
                cardImg.style.objectPosition = news[rand[i]].object_position;
            }
        }
    }
}
renderNews(news_data,rand, NumCards);
window.addEventListener("resize", ReStyle(news_data, rand, NumCards));
