$(document).ready(function() {
    // Define repetitive HTML in a variable
    const footerTemplate = `
        <footer>
            <div class="grid-container">
                <!-- grid 1 -->
                <div class="grid-item">

                </div>
                <!-- grid 2 -->
                <div class="grid-item">
                    <p class="rights">One Magazine All rights reserved</p>
                </div>
                <!-- grid 3 -->
                <div class="grid-item">

                </div>
            </div>
        </footer>
    `;

    // 1. Inject it into the footer placeholder
    $('#footer-placeholder').html(footerTemplate);
});