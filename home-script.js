// ดึงข้อมูล username จาก localStorage และแสดงในหน้า home
const usernameDisplay = document.getElementById("usernameDisplay");

window.onload = function () {
    const username = localStorage.getItem("username");
    if (username) {
        usernameDisplay.textContent = username; // แสดงชื่อผู้ใช้ที่ล็อกอิน
    } else {
        window.location.href = "index.html"; // ถ้าไม่มีการล็อกอิน ให้กลับไปที่หน้าล็อกอิน
    }
}

// ฟังก์ชั่น Logout
function logout() {
    localStorage.removeItem("username"); // ลบข้อมูลจาก localStorage
    window.location.href = "index.html"; // เปลี่ยนหน้าไปที่หน้าล็อกอิน
}