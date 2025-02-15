// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const destination = document.getElementById('destination').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const bikeModel = document.querySelector('select[aria-label="Bike Model"]').value;
            const pickupDate = document.getElementById('pickupDate').value;
            const dropDate = document.getElementById('dropDate').value;
            const pickupTime = document.getElementById('pickupTime').value;
            const dropTime = document.getElementById('dropTime').value;
            
            // Basic validation
            if (!destination || !name || !phone || bikeModel === 'Choose Model' || 
                !pickupDate || !dropDate || !pickupTime || !dropTime) {
                alert('Please fill in all fields');
                return;
            }
            
            // Phone number validation
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            
            // Date validation
            const pickup = new Date(pickupDate + ' ' + pickupTime);
            const drop = new Date(dropDate + ' ' + dropTime);
            
            if (pickup >= drop) {
                alert('Drop date/time must be after pickup date/time');
                return;
            }
            
            // If all validation passes, you can submit the form
            console.log('Form submitted successfully');
            // Add your form submission logic here
        });
    }
});

// Initialize all Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Initialize all Bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))