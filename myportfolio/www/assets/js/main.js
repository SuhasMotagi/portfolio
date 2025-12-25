// // Set current year in footer
// document.getElementById('year').textContent = new Date().getFullYear();

// // Typing animation
// var typed = new Typed('.typedText', {
//     strings: ['Programmer Analyst', 'Software Engineer', 'Python Developer', 'Database Specialist'],
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 2000
// });

// // Menu toggle
// function myMenuFunction() {
//     var navMenu = document.getElementById('myNavMenu');
//     navMenu.classList.toggle('responsive');
// }

// // Close menu when clicking on a nav link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         document.getElementById('myNavMenu').classList.remove('responsive');
//     });
// });

// // Scroll spy to highlight active nav link
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section[id]');
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 100;
//         const sectionId = current.getAttribute('id');
//         const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             link?.classList.add('active-link');
//         } else {
//             link?.classList.remove('active-link');
//         }
//     });
// });

// // Email send function
// function sendEmail() {
//     const name = document.getElementById('names').value;
//     const email = document.getElementById('emails').value;
//     const message = document.getElementById('message').value;

//     if (!name || !email || !message) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     emailjs.send("service_73zqrio", "template_4sdqlzo", {
//         from_name: name,
//         from_email: email,
//         message: message,
//     }).then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert("Message sent successfully!");
//         document.getElementById('names').value = '';
//         document.getElementById('emails').value = '';
//         document.getElementById('message').value = '';
//     }, (error) => {
//         console.error('FAILED...', error);
//         alert("Failed to send message. Please try again later.");
//     });
// }
