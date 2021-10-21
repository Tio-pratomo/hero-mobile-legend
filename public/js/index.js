/* ---------------------------------------- STORE VARIABLE TO GET DETAIL HERO --------------------------------------- */
const getDetailHero = function (id) {
    // GET API DATA USE FETCH --> THIS FUNCTION RETURN PROMISE
    return fetch(`https://api.dazelpro.com/mobile-legends/hero/${id}`)
        .then((result) => result.json())
        .then((data) => data);
};

/* ------------------------------------- IMPORT AND INITIALIZE ANIMATE ON SCROLL ------------------------------------ */

AOS.init();

/* ----------------------------------- BEHAVIOR IF ELEMEN HAS BEEN CLICK FROM USER ---------------------------------- */
document.addEventListener('click', async function (event) {
    // FILTER IF ELEMENT HAS CLASS = detail-hero
    if (event.target.classList.contains('detail-hero')) {
        // VARIABLE TO GET ID HERO
        const id = event.target.dataset.heroid;

        // DATA FROM API AS ARRAY
        const detailsHero = await getDetailHero(id);

        // SELECT ELEMENT HAS CLASS = modal-body
        const modalBody = document.querySelector('.modal-body');

        // VARIABLE CONTAIN A OBJECT HERO OVERVIEW {hero_ability: 50,hero_durability: 80, ... }
        const heroOverview = detailsHero.hero[0].hero_overview;

        // VARIABLE CONTAIN HERO NAME
        const heroName = detailsHero.hero[0].hero_name;

        // INITIATE VARIABLE ELEMENT P, which will be filled with several elements
        let elementP = '';
        elementP += /* html */ `
            <div>
                <img src="images/${heroName}.jpg" class="img-fluid" alt="${heroName}" >
            </div>

            <div class="align-self-center">
                <ul class="list-group">
                    <li class="list-group-item">Ability Effect : ${heroOverview.hero_ability}</li>
                    <li class="list-group-item list-group-item-primary">Difficulty : ${heroOverview.hero_difficulty}</li>
                    <li class="list-group-item">Durability : ${heroOverview.hero_durability}</li>
                    <li class="list-group-item list-group-item-primary">Offence : ${heroOverview.hero_offence}</li>
                </ul>
            </div>
        `;

        // MODAL BODY CONTAIN SEVERAL ELEMENT FORM VARIABLE elemenP
        modalBody.innerHTML = elementP;
    }
});
