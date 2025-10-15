document.addEventListener('DOMContentLoaded', function() {

    // --- Data ---
    const experienceData = {
        "eng-manager-citiustech": {
            title: "Engineering Manager, CitiusTech",
            date: "Mar 2025 – Present",
            summary: "Managed an 8-person data team, accelerating 5 critical data projects in 3 months.",
            details: `
                <ul>
                    <li>Managed a team of 8 data professionals (DEs/BIEs).</li>
                    <li>Accelerated 5 critical data projects within the first 3 months.</li>
                    <li>Key activities included DBT model building in Redshift, GitHub integration for version control, and creating Looker dashboards for visualization.</li>
                </ul>
            `
        },
        "trader-mentor": {
            title: "Individual Trader & Mentor",
            date: "2022 – 2024",
            summary: "Managed derivative portfolios over ₹3 crore, achieving 20% CAGR.",
            details: `
                <ul>
                    <li>Managed over six derivative trading portfolios with a total value exceeding ₹3 crore.</li>
                    <li>Achieved a consistent 20% Compound Annual Growth Rate (CAGR).</li>
                    <li>Developed and back-tested four time-based option strategies, which achieved a 50% CAGR over multi-year periods.</li>
                </ul>
            `
        },
        "sr-bie-alexa": {
            title: "Sr. BIE, Amazon Alexa",
            date: "2020 – 2022",
            summary: "Spearheaded data architecture for the Connected Device organization.",
            details: `
                <ul>
                    <li>Led data architecture and developed customer-facing dashboards for the Connected Device organization, supporting over 15 teams.</li>
                    <li>Established a robust data infrastructure using Redshift and data pipelining.</li>
                    <li>Built self-service products, including QuickSight Dashboards and a Query Bank for FAQs, which reduced data access time from two weeks to less than an hour.</li>
                </ul>
            `
        },
        "sr-bie-ads": {
            title: "Sr. BIE, Amazon Ads",
            date: "2018 – 2020",
            summary: "Designed and implemented the Head Count Tracking (HCT) Tool.",
            details: `
                <ul>
                    <li>Designed and implemented the Head Count Tracking (HCT) Tool for Amazon Ads, which automated and streamlined the process of tracking employee headcount.</li>
                    <li>The tool used SharePoint forms for input, Redshift for data storage, and QuickSight for visualization.</li>
                    <li>Freed up approximately 50% of a financial analyst's bandwidth.</li>
                    <li>Delivered Retargeting metrics (WBR) by creating joined queries on Athena tables.</li>
                </ul>
            `
        }
    };

    const projectData = {
        "headct-tool": {
            title: "HeadCT Tool Implementation",
            summary: "Replaced manual headcount tracking with a scalable, automated system.",
            details: `
                <p><strong>Problem:</strong> Manual headcount tracking via emails, chime, and Excel was inefficient and not scalable.</p>
                <p><strong>Solution:</strong> Developed an integrated system using SharePoint forms for user input and HR BI data (via DataNet ETL) into a Redshift database. Visualized results in QuickSight.</p>
                <p><strong>Impact:</strong> Reduced manual effort, saving approximately 50% of a financial analyst's bandwidth and providing a single source of truth for headcount.</p>
                <p><strong>Technologies:</strong> SharePoint Forms, Redshift, HR BI, QuickSight, DataNet ETL</p>
            `
        },
        "compliance-data": {
            title: "Compliance Data Unification",
            summary: "Unified data from over 90 sources into a single source of truth.",
            details: `
                <p><strong>Problem:</strong> Data was siloed across 90+ unrelated sources, making comprehensive reporting and analysis nearly impossible.</p>
                <p><strong>Solution:</strong> Developed a denormalized table that unified these sources into a single table with over 100 columns.</p>
                <p><strong>Impact:</strong> Accelerated reporting cycles and provided end-to-end visibility for key stakeholders. Enabled faster analysis for metrics like SLA miss reports for gated ASINs.</p>
                <p><strong>Technologies:</strong> Redshift, SQL, ETL Development</p>
            `
        },
        "dsp-sdp-reporting": {
            title: "DSP/SDP Reporting",
            summary: "Built data pipelines and queries for critical advertising metrics.",
            details: `
                <p><strong>Problem:</strong> Needed to build data pipelines and queries for Single Display Product (SDP) and Sponsored Display metrics under intense time pressure for WBR reporting.</p>
                <p><strong>Solution:</strong> Created queries and views to define metrics for active advertisers using complex SQL logic on da_athena.sp_campaign and spbetaadvertisers tables.</p>
                <p><strong>Impact:</strong> Ensured that WBR reporting could continue without interruption, providing critical data to the business.</p>
                <p><strong>Technologies:</strong> Athena, Redshift, SQL, QuickSight, ADW</p>
            `
        },
        "automation-fte": {
            title: "Automation & FTE Savings",
            summary: "Consistently focused on automation to drive efficiency.",
            details: `
                <p>A consistent theme across projects has been a focus on automation and simplification to save time and resources.</p>
                <ul>
                    <li><strong>Auto Reporter Tool:</strong> Automated the generation of reports, saving manual effort.</li>
                    <li><strong>Hazmat Classification:</strong> Optimized dangerous goods (DG) Hazmat processes to classify 15K ASINs in bulk using SQL/Excel functions.</li>
                    <li><strong>CTI Onboarding:</strong> Standardized CTI onboarding for EU-3 MPs, reducing complexity and time.</li>
                </ul>
                <p><strong>Impact:</strong> These and other projects contributed to a total savings of over 50 FTEs.</p>
                <p><strong>Technologies:</strong> SQL, Excel VBA, DataNet</p>
            `
        }
    };

    const testimonials = [
        {
            quote: "A core strength; constantly looks for refinement in processes, naturally seeking automation and reducing manual touch points. Able to 'simplify the amount of tasks required' by using multiple technologies.",
            author: "Manager @ Amazon"
        },
        {
            quote: "Possesses vast knowledge of all that Amazon has to offer. Is the go-to person for difficult technical issues and has deep database expertise combined with Amazonian processes knowledge.",
            author: "Peer @ Amazon"
        },
        {
            quote: "Highly collaborative and very responsive to new requirements, ensuring alignment when working with stakeholders. Known for working with a smile and calm demeanor, even under stress or pressure.",
            author: "Stakeholder @ Amazon"
        },
        {
            quote: "Quick to act, deliver results, and implement solutions, often finding workarounds to time-critical blockers.",
            author: "Manager @ Amazon"
        }
    ];

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
