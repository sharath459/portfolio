document.addEventListener('DOMContentLoaded', function() {
    const experience = [
        {
            date: "Mar 2025 – Present",
            role: "Engineering Manager, CitiusTech (Client: Kyruus Health)",
            accomplishments: "Managed an 8-person data team (DEs/BIEs). Accelerated 5 critical data projects within 3 months, involving DBT model building (Redshift), GitHub integration, and Looker dashboard creation."
        },
        {
            date: "2022 – 2024",
            role: "Individual Trader and Freelancing Mentor",
            accomplishments: "Managed over six derivative trading portfolios exceeding ₹3 crore, achieving 20% CAGR. Developed four time-based option strategies with multi-year back testing, achieving 50% CAGR."
        },
        {
            date: "2020 – 2022",
            role: "Sr. BIE, Amazon Alexa",
            accomplishments: "Spearheaded data architecture and customer-facing dashboards for the Connected Device organization across 15+ teams. Established a robust data infrastructure (Redshift, data pipelining) and built self-service products like QuickSight Dashboards and a Query Bank for FAQs, reducing data access time from two weeks to less than an hour."
        },
        {
            date: "2018 – 2020",
            role: "Sr. BIE, Amazon Ads",
            accomplishments: "Designed and implemented the Head Count Tracking (HCT) Tool for Amazon Ads using SharePoint forms, Redshift, and QuickSight dashboards, freeing up approximately 50% of a financial analyst's bandwidth. Delivered Retargeting metrics (WBR) by creating joined queries on Athena tables."
        },
        {
            date: "2016 – 2018",
            role: "Sr. BIE, Amazon Compliance",
            accomplishments: "Developed a denormalized table unifying data from over 90 unrelated sources into a comprehensive table with 100+ columns, enabling faster reporting cycles and the creation of over 300 metrics dashboards. Involved in collaboration with COPS to spin up a 4-node Redshift cluster and provide Tableau licenses."
        },
        {
            date: "2012 – 2016",
            role: "SME / Business Analyst, Amazon India",
            accomplishments: "Delivered high-impact projects in Defect Reduction (e.g., Repeat rate reduction, Barcode reconciliation), saving 32,000 ISS TTs (8 FTE savings). Implemented quality measures using Lean Six Sigma to ensure 100% quality. Automated Hazmat classification using SQL/Excel functions to classify ~15K ASINs in bulk."
        }
    ];

    const projects = [
        {
            title: "HeadCT Tool Implementation",
            details: "Replaced manual headcount tracking with a scalable system using SharePoint Forms, Redshift, and QuickSight. Reduced manual effort, saving ~50% of a financial analyst's bandwidth.",
            tech: "SharePoint Forms, Redshift, HR BI, QuickSight, DataNet ETL"
        },
        {
            title: "Compliance Data Unification",
            details: "Unified data from 90+ sources into a single denormalized table to accelerate reporting and provide end-to-end visibility. Enabled faster analysis for key metrics.",
            tech: "Redshift, SQL, ETL development"
        },
        {
            title: "DSP/SDP Reporting",
            details: "Built data pipelines and queries for Single Display Product (SDP) and Sponsored Display metrics. Ensured WBR reporting could continue under intense time pressure.",
            tech: "Athena, Redshift, SQL, QuickSight, ADW"
        },
        {
            title: "Automation & FTE Savings",
            details: "Consistently focused on automation. Projects include the Auto Reporter tool, optimizing DG Hazmat processes, and standardization of CTI onboarding.",
            tech: "SQL, Excel VBA, DataNet"
        }
    ];

    const testimonials = [
        {
            quote: "A core strength; constantly looks for refinement in processes, naturally seeking automation and reducing manual touch points. Able to 'simplify the amount of tasks required' by using multiple technologies.",
            author: "Invent & Simplify"
        },
        {
            quote: "Possesses vast knowledge of all that Amazon has to offer. Is the go-to person for difficult technical issues and has deep database expertise combined with Amazonian processes knowledge.",
            author: "Dive Deep & Expertise"
        },
        {
            quote: "Highly collaborative and very responsive to new requirements, ensuring alignment when working with stakeholders. Known for working with a smile and calm demeanor, even under stress or pressure.",
            author: "Earn Trust & Collaboration"
        },
        {
            quote: "Quick to act, deliver results, and implement solutions, often finding workarounds to time-critical blockers.",
            author: "Bias for Action / Deliver Results"
        }
    ];

    const timelineContainer = document.querySelector('.timeline');
    experience.forEach((item, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item', side);
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.role}</h3>
                <span>${item.date}</span>
                <p>${item.accomplishments}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    const projectsContainer = document.querySelector('.project-cards');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.details}</p>
            <p><strong>Tech:</strong> ${project.tech}</p>
        `;
        projectsContainer.appendChild(card);
    });

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
});
