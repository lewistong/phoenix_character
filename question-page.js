        // array of characters for looping later
        const characters = ["Bunny", "Looshkin", "Doggo", "Fawn", "Gorebrah", "Tosh"];
        
        // Function to get the character with the highest score
        function getHighestScoreCharacter() {
            // Retrieve scores from local storage
            const scores = JSON.parse(localStorage.getItem('scores')) || {};

            let highestScore = -1;
            let winningCharacter = "";

            // Loop through each character and find the one with the highest score
            characters.forEach(character => {
                if (scores[character] > highestScore) {
                    highestScore = scores[character];
                    winningCharacter = character;
                }
            });

            return winningCharacter;
        }
    
        // Function to update the character image
        function updateCharacterImage() {
        const resultImage = document.getElementById("result-image");
        const highestScoreCharacter = getHighestScoreCharacter();
        // Set the name of the character
        document.getElementById("result").textContent = highestScoreCharacter;

        // Set the image source based on the highest scoring character
        resultImage.src = getImageSource(highestScoreCharacter);
    }

        // Function to get the image source based on the character
        function getImageSource(character) {
            // You can customize the image sources based on your file structure
            switch (character) {
                case "Bunny":
                    return "images/bunny.png";
                case "Looshkin":
                    return "images/looshkin.png";
                case "Doggo":
                    return "images/doggo.png";
                case "Fawn":
                    return "images/fawn.png";
                case "Gorebrah":
                    return "images/gorebrah.png";
                case "Tosh":
                    return "images/tosh.png";    
                default:
                    return ""; // Default image source
            }
        }

        // Call the function to update the character image
        updateCharacterImage();