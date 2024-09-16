// JavaScript function to insert a uniform footer across all pages
function loadFooter() {
    const footerContent = `
        <div class="social-media">
            <a href="#">
          <!--     <a href="https://www.instagram.com" target="_blank">  -->
                <img src="images/instagram2.png" alt="Instagram" class="social-icon">
            </a>
            <a href="#">
         <!--      <a href="https://www.facebook.com" target="_blank">  -->
                <img src="images/facebook3.png" alt="Facebook" class="social-icon">
            </a>
            <a href="#">
            <!--   <a href="https://www.twitter.com" target="_blank">  -->
                <img src="images/x1.png" alt="Twitter" class="social-icon">
            </a>
        </div>
        <p>&copy; <a href="index.html">2024 Workshop on Service-Oriented Computing and Current Trends, Sassari, Sardinia</a> |  All rights reserved | Powered by <a href="https://www.iaas.uni-stuttgart.de/abteilung-service-computing/" target="_blank">IAAS-SC</a></p>
    `;

    // Get all footer elements on the page
    const footers = document.querySelectorAll("footer");

    // Set the content of each footer
    footers.forEach(footer => {
        footer.innerHTML = footerContent;
    });
}

// Run the function to load the footer
document.addEventListener("DOMContentLoaded", loadFooter);




// JavaScript function to insert a uniform header across all pages
function loadHeader() {
    const headerContent = `
        <a href="index.html"><img src="images/logosss.PNG" alt="Department Logo" class="logo"></a>
        <nav class="header-nav">
            <a href="index.html">Home</a>
            <a href="schedule.html">Schedule</a>
            <a href="participants.html">Participants</a>
           <!--  <a href="about.html">About</a> -->
          <!--   <a href="contact.html">Contact</a> -->



                <li class="dropdown">
                    <a href="#" class="dropbtn">Info</a>
                    <div class="dropdown-content">
                        <a href="about.html">About Us</a>
                        <a href="location.html">Location</a>
                         <a href="gallery.html">Gallery</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </li>
                
        </nav>    `;

    // Get all header elements on the page
    const headers = document.querySelectorAll("header");

    // Set the content of each header
    headers.forEach(header => {
        header.innerHTML = headerContent;
    });
}

// Run the function to load the header
document.addEventListener("DOMContentLoaded", loadHeader);