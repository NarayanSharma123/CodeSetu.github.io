document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        // प्रोफ़ाइल में डेटा सेट करें
        document.querySelector("#profileName").innerText = currentUser.name || "नाम नहीं";
        document.querySelector("#profileFatherName").innerText = currentUser.fatherName || "नाम नहीं";
        document.querySelector("#profileEmail").innerText = currentUser.email || "ईमेल नहीं";
        document.querySelector("#profilePhone").innerText = currentUser.phone || "फ़ोन नहीं";
        document.querySelector("#profileAddress").innerText = currentUser.address || "पता नहीं";

        // लॉगआउट बटन
        const logoutBtn = document.querySelector(".logout-btn");
        logoutBtn?.classList.remove("d-none");
        logoutBtn?.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        });

        // नेविगेशन UI अपडेट
        document.querySelector(".login-btn")?.classList.add("d-none");
        document.querySelector(".signup-btn")?.classList.add("d-none");
        document.querySelector(".profile-link")?.classList.remove("d-none");
        document.querySelector(".profile-footer-link")?.classList.remove("d-none");

    } else {
        alert("कृपया पहले लॉगिन करें ताकि प्रोफ़ाइल देख सकें।");
        window.location.href = "login.html";
    }
});
