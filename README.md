# 🎓 CodeSetu - Educational Learning Platform

CodeSetu is a frontend-based educational web application designed to help students and beginners learn coding, web development, and computer fundamentals in a simple and accessible way.

The platform includes user registration, login, profile management, and course-related pages. All user data is stored locally using the browser's Local Storage, making it a lightweight and fully frontend project.

## 🚀 Live Demo

https://code-setu-kohl.vercel.app/

---

## 📌 Features

### 👤 User Authentication

- User Registration (Sign Up)
- User Login
- Form Validation
- Authentication using Local Storage
- Session persistence in browser

### 📝 Registration Fields

Users can register using:

- Full Name
- Email Address
- Mobile Number
- Password
- Confirm Password

All registration data is securely stored in the browser's Local Storage.

### 👨‍💼 Profile Management

Users can update their profile information anytime.

Editable fields include:

- Full Name
- Email Address
- Mobile Number
- Father/Husband Name
- Mother Name
- Date of Birth
- Gender/Sex
- Complete Address
- Pincode / Zipcode
- Profile Information

Changes are automatically saved in Local Storage.

### 📚 Educational Pages

- Home Page
- About Page
- Courses Page
- Project Page
- Contact Page
- Privacy Policy
- Terms & Conditions

### 🎨 UI Features

- Responsive Design
- Clean Interface
- Easy Navigation
- Beginner-Friendly Layout
- Multi-Page Architecture

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- Vercel Deployment

---

## 📂 Project Structure

```text
CodeSetu-APP/
│
├── css/
│   └── style.css
│
├── html/
│   ├── about.html
│   ├── contact.html
│   ├── course.html
│   ├── edit.html
│   ├── login.html
│   ├── privacy.html
│   ├── profile.html
│   ├── project.html
│   ├── signup.html
│   └── terms.html
│
├── js/
│   ├── auth.js
│   ├── edit.js
│   └── profile.js
│
├── images/
│   ├── logo.jpg
│   ├── my_linkedin_pic.png
│   └── other images
│
├── index.html
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/NarayanSharma123/CodeSetu.github.io.git
```

### Open Project

```bash
cd CodeSetu.github.io
```

Run the project by opening:

```text
index.html
```

in your browser.

---

## 🔐 Local Storage Data Flow

### Registration

When a user signs up, the following information is saved:

```javascript
{
  fullname,
  email,
  mobile,
  password
}
```

### Profile Update

Users can later update:

```javascript
{
  fatherName,
  motherName,
  dob,
  gender,
  address,
  pincode
}
```

All data is managed using the browser's Local Storage API.

---

## 📷 Screenshots

Add project screenshots here.

Example:

```md
![Home Page](images/homepage.png)

![Profile Page](images/profile-page.png)

![Login Page](images/login-page.png)
```

---

## 🎯 Learning Objectives

This project demonstrates:

- DOM Manipulation
- Form Validation
- Authentication Logic
- Local Storage CRUD Operations
- Multi-Page Website Development
- Responsive Web Design
- User Profile Management

---

## 🌟 Future Improvements

- Backend Integration (Node.js + Express)
- MongoDB Database Support
- JWT Authentication
- Password Encryption
- Email Verification
- Forgot Password Feature
- Course Enrollment System
- Admin Dashboard
- Certificate Generation

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push the branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

Narayan Sharma

GitHub:
https://github.com/NarayanSharma123

LinkedIn:
(Add your LinkedIn Profile URL here)

---

⭐ If you found this project useful, please consider giving it a star on GitHub.
