var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'Video Editor', 'Web Designer'],
    typeSpeed: 70,
    loop: true,
    backSpeed: 20,
    backDelay: 700,
});

const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
    navRight.classList.toggle('active');
});


    // Function to handle the animation when any .ph1 element comes into view
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animated' class to start the animation
                entry.target.classList.add('animated');
            } else {
                // Remove the class to reset the animation when it's out of view
                entry.target.classList.remove('animated');
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Target all elements with the .ph1 class
    const ph1Elements = document.querySelectorAll('.ph1');

    // Observe each .ph1 element
    ph1Elements.forEach(ph1 => {
        observer.observe(ph1);
    });

    const swapnilImgElement = document.getElementById('swapnilimg');

    // Observe the swapnilimg element if it exists
    if (swapnilImgElement) {
        observer.observe(swapnilImgElement);
    }
    
    // Target all elements with the .right-personal class
    const rightPersonalElements = document.querySelectorAll('.right-personal');
    
    // Observe each .right-personal element
    rightPersonalElements.forEach(rightPersonal => {
        observer.observe(rightPersonal);
    });

    const swapnilExpressElement = document.getElementById('pep');

    // Observe the swapnilimg element if it exists
    if (swapnilExpressElement) {
        observer.observe(swapnilExpressElement);
    }

    const workBoxElements = document.querySelectorAll('.work-box');
    
    // Observe each .right-personal element
    workBoxElements.forEach(workBox => {
        observer.observe(workBox);
    });

    const skillContentElements = document.querySelectorAll('.skillcontent');
    
    // Observe each .right-personal element
    skillContentElements.forEach(skillContent => {
        observer.observe(skillContent);
    });

    const contactLeftElements = document.querySelectorAll('.contact-left');
    
    // Observe each .right-personal element
    contactLeftElements.forEach(contactLeft => {
        observer.observe(contactLeft);
    });

    const contactRightElements = document.querySelectorAll('.contact-right');
    
    // Observe each .right-personal element
    contactRightElements.forEach(contactRight => {
        observer.observe(contactRight);
    });


    // Handle navbar click to trigger the animation manually when clicked
    document.querySelectorAll('.nav a').forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            const targetId = e.target.getAttribute('href');
            
            if (targetId === '.ph1') {
                // Ensure that animation restarts for all .ph1 elements when navigation is clicked
                ph1Elements.forEach(ph1 => {
                    ph1.classList.remove('animated'); // Reset animation
                    setTimeout(() => ph1.classList.add('animated'), 50); // Re-apply animation after a delay
                });
            }
        });
    });




    document.addEventListener("DOMContentLoaded", function () {
        // Function to trigger animation when element comes into view
        let observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the animation class when the element enters the viewport
                    entry.target.classList.add('animate');
                    // Unobserve the element after the animation is triggered to avoid re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
    
        // Select the elements to animate
        let rpText = document.querySelector('.rp-text');
        let leftPersonal = document.querySelector('.left-personal');
    
        // Observe both elements
        if (leftPersonal) {
            observer.observe(leftPersonal);
        }
        if (rpText) {
            observer.observe(rpText);
        }
    
        // Handle navigation clicks
        const personalButton = document.getElementById('personal-nav-button');
        if (personalButton) {
            personalButton.addEventListener('click', function () {
                const personalSection = document.querySelector('.personal');
                personalSection.scrollIntoView({ behavior: 'smooth' });
    
                // Trigger the animations manually when scrolling to the section via the navbar
                setTimeout(() => {
                    rpText.classList.add('animate');
                    leftPersonal.classList.add('animate');
                }, 500); // Delay to allow smooth scroll
            });
        }
    });
    

    document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    entry.target.classList.remove('animated');
                }
            });
        }, { threshold: 0.1 });
    
        const projectBoxes = document.querySelectorAll('.project-box');
        projectBoxes.forEach(box => {
            observer.observe(box);
        });
    });
    

    const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
