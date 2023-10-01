<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            transition: background-image 0.5s;
        }
    </style>
</head>
<body>

<script>
    let lastMouseMoveTime = Date.now();
    let isChangingBackground = false;
    
    // List of image URLs to use as backgrounds
    const imageUrls = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
        // Add more image URLs as needed
    ];
    
    // Function to change the background image to a random one
    function changeBackground() {
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        document.body.style.backgroundImage = `url('${randomImageUrl}')`;
    }
    
    // Function to check for mouse movement
    function checkMouseMovement() {
        const currentTime = Date.now();
        if (currentTime - lastMouseMoveTime >= 5000) {
            // If no mouse movement for 5 seconds, change the background
            if (!isChangingBackground) {
                changeBackground();
                isChangingBackground = true;
            }
        } else {
            isChangingBackground = false;
        }
    }
    
    // Listen for mousemove events
    document.addEventListener('mousemove', () => {
        lastMouseMoveTime = Date.now();
    });
    
    // Check for mouse movement every 1 second
    setInterval(checkMouseMovement, 1000);
    
    // Initial background change
    changeBackground();
</script>

</body>
</html>
