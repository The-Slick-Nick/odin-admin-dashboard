/* populate-project-cards.js
 *
 * This script populates icon/button elements for each content card
 * already present in the dom
 */


const project_cards = document.querySelectorAll(".project-card");


project_cards.forEach(
    (card) => {

        const star_icon = document.createElement("img");
        const eye_icon = document.createElement("img");
        const merge_icon = document.createElement("img");

        star_icon.classList.add("star");
        star_icon.setAttribute("alt", "star icon");
        star_icon.setAttribute("src", "./assets/star-icon.svg");

        eye_icon.classList.add("eye");
        eye_icon.setAttribute("alt", "eye icon");
        eye_icon.setAttribute("src", "./assets/eye-plus.svg");

        merge_icon.classList.add("merge");
        merge_icon.setAttribute("alt", "merge icon");
        merge_icon.setAttribute("src", "./assets/merge-icon.svg");

        let action_wrapper = document.createElement("div");
        action_wrapper.classList.add("project-actions");

        [star_icon, eye_icon, merge_icon].forEach((icon) => {
            icon.classList.add("icon");
            action_wrapper.appendChild(icon);
        });

        card.appendChild(action_wrapper);
    }
);

