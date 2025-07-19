const urlInput = document.getElementById("urlInput");
const errorEl = document.getElementById("error");
const downloadBtn = document.getElementById("downloadBtn");
const videoCard = document.getElementById("videoCard");
const thumbnail = document.getElementById("thumbnail");
const videoTitle = document.getElementById("videoTitle");
const username = document.getElementById("username");
const duration = document.getElementById("duration");
const views = document.getElementById("views");
const openOriginal = document.getElementById("openOriginal");
const mockDownload = document.getElementById("mockDownload");

const validateInstagramUrl = (url) => {
    const instagramRegex = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?/;
    return instagramRegex.test(url);
};

downloadBtn.onclick = async () => {
    const url = urlInput.value.trim();
    if (!url) {
        errorEl.textContent = "Please enter an Instagram URL";
        return;
    }

    if (!validateInstagramUrl(url)) {
        errorEl.textContent = "Please enter a valid Instagram URL (post, reel, or IGTV)";
        return;
    }

    errorEl.textContent = "";
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Processing...";

    await new Promise(res => setTimeout(res, 1500)); // simulate API call

    // Simulated video data
    const mockData = {
        title: "Amazing Instagram Reel - Nature Photography",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
        username: "@nature_photographer",
        duration: "0:30",
        views: "125K",
        downloadUrl: "#mock-download"
    };

    videoTitle.textContent = mockData.title;
    thumbnail.src = mockData.thumbnail;
    username.textContent = mockData.username;
    duration.textContent = `Duration: ${mockData.duration}`;
    views.textContent = `Views: ${mockData.views}`;
    videoCard.classList.remove("hidden");

    downloadBtn.disabled = false;
    downloadBtn.textContent = "Get Video";
};

mockDownload.onclick = () => {
    alert("Download started (mock). No actual file will download.");
};

openOriginal.onclick = () => {
    const url = urlInput.value.trim();
    if (url) {
        window.open(url, "_blank");
    }
};
