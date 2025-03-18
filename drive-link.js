// Create a file called shared-elements.js
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
      <a href="https://drive.google.com/drive/folders/1xzefPIJwRymaN-cmVPPZUx_YHnUtOaM_?usp=sharing"
                        target="_blank">
                        G-Drive Archive
                    </a>
      <!-- Add other navigation links here -->
    `;
    
    // Insert the nav HTML into any element with class "navigation"
    document.querySelectorAll('.navigation2').forEach(nav => {
      nav.innerHTML = navHTML;
    });
  });