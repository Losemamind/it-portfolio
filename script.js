
// เปลี่ยน YOUR_USERNAME เป็นชื่อบัญชี GitHub ของตัวเอง
const githubUsername = "YOUR_USERNAME";

const githubURL = `https://github.com/${githubUsername}`;

// ตั้งค่าลิงก์ GitHub
const githubLink = document.getElementById("github-link");

if (githubLink) {
    githubLink.href = githubURL;
}

// สร้าง QR Code สำหรับ GitHub
const qrCode = document.getElementById("github-qr");

if (qrCode) {
    qrCode.src =
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(githubURL)}`;
}

// แสดงปีปัจจุบัน
document.getElementById("year").textContent =
    new Date().getFullYear();

// ปิดเมนูหลังจากเลือกหัวข้อบนมือถือ
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navbarNav");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});