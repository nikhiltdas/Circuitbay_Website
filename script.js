// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("hidden")
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Product filtering functionality
function filterProducts(category) {
  const products = document.querySelectorAll(".product-card")
  const filterButtons = document.querySelectorAll(".filter-btn")

  // Update button styles
  filterButtons.forEach((btn) => {
    btn.classList.remove("bg-primary", "text-white")
    btn.classList.add("bg-gray-200", "text-gray-700")
  })

  event.target.classList.remove("bg-gray-200", "text-gray-700")
  event.target.classList.add("bg-primary", "text-white")

  // Filter products
  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block"
      product.classList.remove("hidden")
    } else {
      product.style.display = "none"
      product.classList.add("hidden")
    }
  })
}

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()
      const products = document.querySelectorAll(".product-card")

      products.forEach((product) => {
        const productName = product.querySelector("h3").textContent.toLowerCase()
        const productDescription = product.querySelector("p").textContent.toLowerCase()

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
          product.style.display = "block"
          product.classList.remove("hidden")
        } else {
          product.style.display = "none"
          product.classList.add("hidden")
        }
      })
    })
  }
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.classList.add("shadow-xl")
  } else {
    header.classList.remove("shadow-xl")
  }
})

// Add animation on scroll for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

// Observe all product cards and feature sections
document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = document.querySelectorAll(".product-card, .feature-card")
  elementsToObserve.forEach((el) => observer.observe(el))
})

// Add CSS animation class
const style = document.createElement("style")
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .product-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.3s ease;
    }
    
    .product-card.animate-fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`
document.head.appendChild(style)

// Contact form handling (if you add a contact form later)
function handleContactForm(event) {
  event.preventDefault()
  // Add your form handling logic here
  alert("Thank you for your message! We will get back to you soon.")
}

// Instagram redirect tracking
function trackInstagramClick() {
  // Add analytics tracking here if needed
  console.log("Instagram link clicked")
}

// Add click tracking to Instagram links
document.addEventListener("DOMContentLoaded", () => {
  const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]')
  instagramLinks.forEach((link) => {
    link.addEventListener("click", trackInstagramClick)
  })
})
