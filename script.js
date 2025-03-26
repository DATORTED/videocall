const DAILY_API_KEY = "378fca137b1fc0c80d064933082aee09c9fbc32b14dfdf5cac69ebe721fbfb59"; // Thay bằng API Key của bạn
const createRoomBtn = document.getElementById("create-room");
const joinRoomBtn = document.getElementById("join-room");
const roomUrlInput = document.getElementById("room-url");
const videoContainer = document.getElementById("video-container");
const videoFrame = document.getElementById("video-frame");

const fixedRoomUrl = "https://sangt4nhom2.daily.co/fixed-room"; // URL phòng cố định

async function createRoom() {
    const response = await fetch("https://api.daily.co/v1/rooms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${DAILY_API_KEY}`
        },
        body: JSON.stringify({
            name: "fixed-room",
            privacy: "public"
        })
    });

    const data = await response.json();
    roomUrlInput.value = data.url; // Hiển thị URL phòng mới tạo
}

function joinRoom() {
    const roomUrl = fixedRoomUrl;
    videoFrame.src = roomUrl;
    videoContainer.style.display = "block";
}

createRoomBtn.addEventListener("click", createRoom);
joinRoomBtn.addEventListener("click", joinRoom);

// Tạo và tham gia phòng cố định ngay khi tải trang
window.addEventListener("load", async () => {
    await createRoom();
    joinRoom();
});
