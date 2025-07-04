
        let preloaderDelay = 2000; // Time before preloader disappears (in ms)

        // Check if user has already seen the preloader
        if (localStorage.getItem("seenPreloader")) {
          document.getElementById("preloader").style.display = "none";
          document.getElementById("content").style.display = "block";
          document.getElementById("content").classList.add("fade-in");
        } else {
          // Show the preloader only for first-time visitors
          localStorage.setItem("seenPreloader", "true");

          window.onload = function () {
            setTimeout(function () {
              document.getElementById("preloader").classList.add("fade-out");

              setTimeout(function () {
                document.getElementById("preloader").style.display = "none";
                document.getElementById("content").style.display = "block";
                document.getElementById("content").classList.add("fade-in");
              }, 1000); // Match fade-out duration
            }, preloaderDelay);
          };
        }
      