// Select every single category button on the page
const categoryButtons = document.querySelectorAll(".btn");

categoryButtons.forEach(button => {
    button.onclick = function() {
        // 'this.nextElementSibling' targets the exact video-list right under the clicked button
        this.nextElementSibling.classList.toggle("show");
    };
});

// side bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}