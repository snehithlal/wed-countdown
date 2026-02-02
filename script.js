// Create twinkling stars and shooting stars
function createStars() {
    const starsContainer = document.getElementById('starsContainer');

    // Create regular twinkling stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }

    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 5 + 's';
        shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(shootingStar);
    }
}

createStars();

// Move the No button away
let moveCount = 0;
const messages = [
    "Maybe not... 😢",
    "But I'll debug all your problems! 💻",
    "I'll be your permanent dance partner! 💃",
    "Teacher + Developer = Perfect! 📚💻",
    "I'll learn all your dance moves! 🕺",
    "You teach kids, I'll teach code! 👨‍🏫",
    "My code runs on your love! ❤️",
    "I can't dance but I can love! 💕",
    "You choreograph, I'll code! 🎭💻",
    "I'll attend all your performances! 🎪",
    "Bug-free love guaranteed! 🐛❌",
    "My only successful loop: loving you! 🔄",
    "You're the rhythm to my algorithm! 🎵",
    "I'll learn Bharatanatyam for you! 💃😅",
    "Piyu.setStatus('MyWife'); 💍",
    "while(true) { loveYou(); } ♾️",
    "Error 404: Rejection not found! 🚫",
    "Sudo command: Say YES! 🔒",
    "Git commit -m 'Forever' 💏",
    "Warning: Saying no causes heart.break() 💔",
    "I promise to carry your bags! 🛍️",
    "Unlimited free tech support for life! 🛠️",
    "I'll be your personal photographer! 📸",
    "Our love story > Twilight! 🧛‍♂️❌",
    "Don't make me use Comic Sans! 😱",
    "I'll watch all your cheesy movies! 🎬",
    "Undefined logic: You saying no! ❓"
];

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Force position fixed on first move to allow it to leave the container
    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
        noBtn.style.zIndex = '1000';
    }

    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const yesBtnRect = yesBtn.getBoundingClientRect();

    // Increase safety margin to keep button on screen for both mobile and desktop
    // Use 80px margin from all edges to ensure it never disappears
    const margin = 80;
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    let newX, newY;
    let attempts = 0;
    const maxAttempts = 50;

    // Keep trying until we find a position that doesn't overlap with Yes button
    do {
        // Ensure min position is at least 'margin' (80px from all edges)
        newX = margin + Math.random() * (maxX - margin);
        newY = margin + Math.random() * (maxY - margin);

        // Check if it overlaps with Yes button (with extra padding)
        const padding = 60; // Larger padding to be safe
        const overlaps = !(
            newX + btnWidth + padding < yesBtnRect.left ||
            newX - padding > yesBtnRect.right ||
            newY + btnHeight + padding < yesBtnRect.top ||
            newY - padding > yesBtnRect.bottom
        );

        attempts++;

        if (!overlaps) break;

    } while (attempts < maxAttempts);

    noBtn.style.transition = 'all 0.2s ease'; // Fast but smooth
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transform = `scale(${0.9 + Math.random() * 0.2}) rotate(${Math.random() * 20 - 10}deg)`;
    noBtn.style.zIndex = '1000'; // Ensure it's on top

    // Change color randomly
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    noBtn.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Update button text with messages
    if (moveCount < messages.length) {
        noBtn.textContent = messages[moveCount];
        moveCount++;
    } else {
        moveCount = 0; // Loop messages
        noBtn.textContent = messages[moveCount];
    }

    // Make Yes button grow and more prominent
    const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
    const currentPadding = parseFloat(getComputedStyle(yesBtn).padding);
    if (currentSize < 60) { // Limit max size
        yesBtn.style.fontSize = (currentSize * 1.1) + 'px';
        yesBtn.style.padding = (currentPadding * 1.05) + 'px';
    }
    yesBtn.classList.add('heartbeat');

    // Add extra glow to Yes button
    if (moveCount > 5) {
        yesBtn.style.boxShadow = '0 6px 30px rgba(255, 107, 157, 0.9), 0 0 80px rgba(255, 107, 157, 0.8)';
    }
}

// Handle Yes button click
function handleYes() {
    const mainScreen = document.getElementById('mainScreen');
    const successScreen = document.getElementById('successScreen');

    mainScreen.classList.add('hidden');
    successScreen.classList.add('active');

    // Start countdown immediately!
    startCountdown();

    // Create confetti
    createConfetti();

    // Start spawning photos immediately!
    startPhotoHearts(true);

    // Add more stars
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createStars(), i * 100);
    }

    // Funny animated messages sequence
    const funnyMessages = [
        "Initializing marriage.exe... Loading... ✨",
        "Downloading patience.zip (This may take 50+ years) 🌌",
        "Installing 'Husband 2.0' (Bug fixes included!) 💫",
        "Warning: Storage full of love and bad jokes 🌟",
        "Syncing calendar... May 10, 2026 locked! 📅✨",
        "Compiling list of dance moves to learn... Error 404 💃😅",
        "Calculating optimal Netflix binge schedule... 📺🍿",
        "Backing up bachelor mode... Deleting... Done! 🗂️❌",
        "Creating joint account for snack funds... 🍫💰",
        "Upgrading relationship status to 'Forever' ♾️💖",
        "Learning to share the blanket... Still loading... 🛌🛏️",
        "Activating 'Yes Dear' auto-response mode 🤖💕",
        "May 10th - when two souls become one... and one remote! ✨📺"
    ];

    const extraFunnyMessages = [
        "P.S. You teach grace, I'll teach you Git... fair trade? 👨‍💻💃",
        "P.S. I promise to debug your life, but I can't fix my dance moves 🐛💃",
        "P.S. You get the aux cord 24/7. Yes, even for Bollywood remixes 🎵😅",
        "P.S. I'll attend every performance... even the 6-hour ones 🎭☕",
        "P.S. Warning: Marriage includes unlimited dad jokes (no refunds) 😂❌",
        "P.S. I'll learn Bharatanatyam... right after I finish learning to cook 🍳💃",
        "P.S. You choreograph our life, I'll just try not to trip 🤷‍♂️💃",
        "P.S. My code compiles. My dance... let's not talk about it 💻🕺"
    ];

    let messageIndex = 0;
    const funnyTextElement = document.getElementById('funnyText');

    // Animate through funny messages
    const messageInterval = setInterval(() => {
        if (messageIndex < funnyMessages.length) {
            funnyTextElement.textContent = funnyMessages[messageIndex];
            funnyTextElement.style.animation = 'none';
            setTimeout(() => {
                funnyTextElement.style.animation = 'pulse 0.5s';
            }, 10);
            messageIndex++;
        } else {
            clearInterval(messageInterval);

            // Show final message with extra funny note
            setTimeout(() => {
                const extraFunny = document.getElementById('extraFunny');
                const randomMessage = extraFunnyMessages[Math.floor(Math.random() * extraFunnyMessages.length)];
                extraFunny.innerHTML = `<strong>${randomMessage}</strong>`;
                extraFunny.style.animation = 'slideIn 1s ease-out';
            }, 1000);
        }
    }, 800);

    // Make emojis dance
    const coupleEmoji = document.getElementById('coupleEmoji');
    setInterval(() => {
        coupleEmoji.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    }, 500);

    // Play celebration sound effect (visual)
    setTimeout(() => {
        document.body.style.animation = 'flash 0.5s';
    }, 2000);
}

// Countdown timer function
function startCountdown() {
    const weddingDate = new Date('2026-05-10T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.querySelector('.countdown-title').textContent = "Today's The Day! 🎉💒";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#9370db', '#ba55d3', '#da70d6', '#ee82ee'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

// Initialize state
window.onload = function () {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'relative'; // Start relative to be in flow
    noBtn.style.top = 'auto'; // Reset
    noBtn.style.left = 'auto'; // Reset
};

// Photo Bubble Feature
function startPhotoHearts(immediate = false) {
    // Configuration
    const numberOfPhotos = 10; // Files named 1.jpg to 10.jpg
    const spawnInterval = 1000; // New photo every 1 second (faster!)

    setInterval(() => {
        spawnPhotoHeart(numberOfPhotos);
    }, spawnInterval);

    // Spawn immediately if requested
    if (immediate) {
        for (let i = 0; i < 5; i++) {
            // Spawn instantly, no delay!
            spawnPhotoHeart(numberOfPhotos);
        }
    }
}

function spawnPhotoHeart(maxPhotos) {
    const container = document.body;
    const tile = document.createElement('div');
    tile.className = 'photo-tile photo-float';

    // Random position
    const left = Math.random() * 90; // 0-90% width
    tile.style.left = left + '%';

    // Random rotation specific to this element handled in keyframes but add initial random
    const initialRot = Math.random() * 20 - 10;
    const randomScale = 0.8 + Math.random() * 0.4;
    tile.style.transform = `rotate(${initialRot}deg) scale(${randomScale})`;

    // Random photo
    const photoNum = Math.floor(Math.random() * maxPhotos) + 1;
    const img = document.createElement('img');
    img.src = `images/${photoNum}.jpg`;
    img.onerror = function () {
        // Fallback if image doesn't exist
        this.style.display = 'none';
        tile.style.background = '#feca57';
        tile.innerHTML = '<div style="font-size: 40px;">💖</div>';
    };

    tile.appendChild(img);
    container.appendChild(tile);

    // Cleanup
    setTimeout(() => {
        tile.remove();
    }, 15000); // Remove after animation ends
}
