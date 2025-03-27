// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // -------------- Custom cursor --------------
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");
    
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        
        // Cursor follower with delay
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + "px";
            cursorFollower.style.top = e.clientY + "px";
        }, 100);
    });
    
    // Custom cursor effects for links and buttons
    const links = document.querySelectorAll("a, button");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
            cursorFollower.style.width = "40px";
            cursorFollower.style.height = "40px";
            cursorFollower.style.backgroundColor = "rgba(108, 92, 231, 0.1)";
        });
        
        link.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursorFollower.style.width = "30px";
            cursorFollower.style.height = "30px";
            cursorFollower.style.backgroundColor = "transparent";
        });
    });
    
    // -------------- Sticky Header --------------
    const header = document.querySelector("header");
    const heroSection = document.querySelector(".hero");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
    
    // -------------- Mobile Menu Toggle --------------
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".links");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
    
    // -------------- Typed Text Effect --------------
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".typed-text + .cursor");
    
    const textArray = ["Web Designer", "HTML/CSS Expert", "UI Developer", "Frontend Developer"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    
    // -------------- Scroll Animation --------------
    const scrollElements = document.querySelectorAll(".section");
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }
    
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
    
    handleScrollAnimation();
    
    // -------------- Portfolio Filter --------------
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons and add to current clicked button
            filterBtns.forEach(button => button.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            portfolioItems.forEach(item => {
                if (filterValue === "all") {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 200);
                } else if (item.getAttribute("data-category") === filterValue) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 200);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 500);
                }
            });
        });
    });
    
    // -------------- Smooth Scrolling --------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // -------------- Contact Form --------------
    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Validate form (simple validation)
            if (!name || !email || !message) {
                alert("Please fill in all required fields");
                return;
            }
            
            // Show success message (in a real scenario you would send this data to a backend)
            alert("Thank you for your message! I'll get back to you soon.");
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // -------------- Scroll to Top --------------
    // Create a button element
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = "scroll-top-btn";
    document.body.appendChild(scrollTopBtn);
    
    // Add styles for the button to the head
    const style = document.createElement("style");
    style.innerHTML = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            z-index: 99;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        .scroll-top-btn.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .scroll-top-btn:hover {
            background: linear-gradient(to left, var(--primary-color), var(--secondary-color));
        }
    `;
    document.head.appendChild(style);
    
    // Show/hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Initialize the website with animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
}); 