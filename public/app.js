const socket = io("http://192.168.226.150:7000");

let name = prompt("Ismingizni kiriting");
let password;
do {
    password = prompt("Saytga kirish uchun parolni kiriting:");
} while (password !== "1234567890");

let chatMessages = document.querySelector(".chat-messages");
let messageForm = document.querySelector(".message-form");
let input = document.querySelector(".input");
let typing = document.querySelector(".typing");
let countChat = document.querySelector(".chat-title-status-text");
socket.emit("new-user", name);

socket.on('previous-messages', (messages) => {
    messages.forEach(message => {
        let p = document.createElement("p");
        p.textContent = `${message.username}: ${message.message}`;
        p.classList.add("message", "user-message");
        chatMessages.append(p);
    });
});

messageForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    let text = input.value;
    input.value = "";

    let p = document.createElement("p");
    p.textContent = `Siz: ${text}`;
    p.classList.add("message", "your-message");
    chatMessages.append(p);

    socket.emit("user-message", { name, text });
});

input.addEventListener("input", () => {
    socket.emit("typing-user", name);
});

socket.on("user-message-send", ({ name, text, senderId }) => {
    if (senderId !== socket.id) {
        let p = document.createElement("p");
        p.textContent = `${name}: ${text}`;
        p.classList.add("message", "user-message");
        chatMessages.append(p);
    }
});

socket.on("user-count", ({ count }) => {
    countChat.textContent = `Foydalanuvchilar: ${count}`;
});

socket.on("typing-user-send", (name) => {
    typing.textContent = `${name} yozmoqda...`;
    setTimeout(() => {
        typing.textContent = "";
    }, 2000);
});

socket.on("user-connected", (name) => {
    let p = document.createElement("p");
    p.textContent = `${name} qo'shildi`;
    p.classList.add("message", "user-connected");
    chatMessages.append(p);
});