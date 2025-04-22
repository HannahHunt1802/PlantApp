/* ================================
   1. Sign In Page
====================================*/

/* ================================
   2. Home Page
====================================*/

//Getting real-time values
function updateDateTime(){
    const now = new Date();

    //retreiving date in a particular format, taking date suffix into consideration
    const weekday = now.toLocaleString('en-US', { weekday: 'long' });
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    const ordinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // Handle special case for days 4-20
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    const dateString = `${weekday}, ${day}${ordinalSuffix(day)} ${month} ${year}`;
    
    // retrieving time value
    const timeString = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    
    // updating elements
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}
// updating every minute
setInterval(updateDateTime, 1000);
updateDateTime();

/* ================================
   3. Tab Contents
====================================*/
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const addPlantBtn = document.querySelector(".add-plant-btn");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        const target = tab.getAttribute("data-target");

        // if the tag is already active
        if (tab.classList.contains("active")){
            tab.classList.remove("active");
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.classList.remove("active");
            }
            // displaying add-plant-btn
            addPlantBtn.style.display="block";
        }
        // if the tag is not active
        else{
            // removing active class from all tabs and content
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            // adding active class to clicked tab
            tab.classList.add("active");
            // showing corresponding tab content
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.classList.add("active");
            }
            // removing add-plant-btn
            addPlantBtn.style.display="none";
        }
    });
});