$(".menu").on('click', function () {

    var selector = $(".body")
  
    if (selector.hasClass('open')) {
  
      selector.removeClass('open');
    } else {
  
      selector.addClass('open');
    }
  });
  

document.querySelectorAll('.nav-icons').forEach(icon => {
    icon.addEventListener('click', function() {
        // Remove 'active' class from all icons
        document.querySelectorAll('.nav-icons').forEach(icon => icon.classList.remove('active'));

        // Add 'active' class to the clicked icon
        this.classList.add('active');

        // Optionally, scroll to the corresponding section
        const targetSection = document.getElementById(this.getAttribute('data-target'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


