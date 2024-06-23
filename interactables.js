/* interactables.js
 *
 * This script adds various, small, misc interactability 
 * for flavor.
 */


const notifications_icon = document.querySelector(".icon.notifications");

notifications_icon.addEventListener("click", (event) => {
    if (notifications_icon.classList.contains("notifications-on")) {
        notifications_icon.classList.remove("notifications-on");
        notifications_icon.classList.add("notifications-off");
        notifications_icon.setAttribute("src", "./assets/notification-icon-off.svg");
    }
    else if (notifications_icon.classList.contains("notifications-off")) {
        notifications_icon.classList.remove("notifications-off");
        notifications_icon.classList.add("notifications-on");
        notifications_icon.setAttribute("src", "./assets/notifiction-icon-on.svg");
    }
    else {
        throw new Error("Notifications icon lacking both on and off class");
    }

});

