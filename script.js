// script.js
const testimonials = document.querySelectorAll('.testimonial');
const courses = document.querySelectorAll('.course');
const features = document.querySelectorAll('.feature');

function checkElements(elements) {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 1.2;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

function checkTestimonials(){
    checkElements(testimonials);
}

function checkCourses(){
    checkElements(courses);
}
function checkFeatures(){
    checkElements(features);
}

window.addEventListener('scroll', checkTestimonials);
window.addEventListener('scroll', checkCourses);
window.addEventListener('scroll', checkFeatures);

checkTestimonials();
checkCourses();
checkFeatures();