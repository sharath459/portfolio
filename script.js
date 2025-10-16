document.addEventListener('DOMContentLoaded', function() {

    // --- DOM Manipulation ---
    const experienceContainer = document.getElementById('experience-cards');
    for (const id in experienceData) {
        const item = experienceData[id];
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;
        card.dataset.type = 'experience';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <span>${item.date}</span>
            <p>${item.summary}</p>
        `;
        experienceContainer.appendChild(card);
    }

    const projectsContainer = document.getElementById('project-cards');
    for (const id in projectData) {
        const item = projectData[id];
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;
        card.dataset.type = 'project';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
        `;
        projectsContainer.appendChild(card);
    }

    const testimonialsContainer = document.querySelector('.testimonial-cards');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.classList.add('testimonial-card');
        card.innerHTML = `
            <p>"${testimonial.quote}"</p>
            <h3>- ${testimonial.author}</h3>
        `;
        testimonialsContainer.appendChild(card);
    });

    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const type = card.dataset.type;
            let data;
            if (type === 'experience') {
                data = experienceData[id];
            } else {
                data = projectData[id];
            }
            
            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                ${data.date ? `<span>${data.date}</span>` : ''}
                <div>${data.details}</div>
            `;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    // --- Animations ---
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    let lastScrollTop = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-80px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});
