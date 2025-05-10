
    document.addEventListener("DOMContentLoaded", () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            // इनपुट में पहले से वैल्यू डाल दो
            document.getElementById("name").value = currentUser.name || "";
            document.getElementById("email").value = currentUser.email || "";
            document.getElementById("phone").value = currentUser.phone || "";
            document.getElementById("fatherName").value = currentUser.fatherName || "";
            document.getElementById("motherName").value = currentUser.motherName || "";
            document.getElementById("dob").value = currentUser.dob || "";
            document.getElementById("address").value = currentUser.address || "";
            document.getElementById("pincode").value = currentUser.pincode || "";
            document.getElementById("gender").value = currentUser.gender || "";

            // जब Update Now बटन क्लिक हो
            document.querySelector(".btn.btn-primary").addEventListener("click", () => {
                // updated values लो
                const updatedUser = {
                    ...currentUser,
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    fatherName: document.getElementById("fatherName").value,
                    motherName: document.getElementById("motherName").value,
                    dob: document.getElementById("dob").value,
                    address: document.getElementById("address").value,
                    pincode: document.getElementById("pincode").value,
                    gender: document.getElementById("gender").value
                };

                // localStorage में save करो
                localStorage.setItem("currentUser", JSON.stringify(updatedUser));
                alert("Profile updated successfully!");
                window.location.href = "profile.html";
            });
        } else {
            alert("Please login first.");
            window.location.href = "login.html";
        }
    });
