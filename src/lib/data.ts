import { Experience, Project, Testimonial } from './types';

export const experienceData: Experience[] = [
    {
        title: "Engineering Manager, Data",
        company: "CitiusTech (for Kyruus Health)",
        date: "Mar 2025 – Present",
        summary: "Leading an 8-person data team to accelerate 5 critical data projects in under 3 months, driving the migration of 500+ Matillion jobs to a modern dbt and Redshift stack.",
        details: [
            "Lead and mentor a high-performing team of 8 Data and BI Engineers, fostering a culture of excellence and rapid delivery.",
            "Orchestrated the acceleration of 5 mission-critical data projects, achieving key milestones within the first 90 days.",
            "Spearheaded the migration from Matillion to a modern data stack, leveraging dbt, Redshift, and GitHub for a version-controlled, scalable architecture.",
            "Deliver actionable insights to stakeholders through the development of intuitive Looker dashboards and robust data models."
        ]
    },
    {
        title: "Quantitative Trader & Mentor",
        company: "Self-Employed",
        date: "2022 – 2024",
        summary: "Engineered and managed derivative portfolios exceeding ₹3 crore, achieving a 20% CAGR through proprietary, back-tested trading strategies.",
        details: [
            "Managed a diverse portfolio of over six derivative trading accounts with a combined AUM of over ₹3 crore, delivering a consistent 20% Compound Annual Growth Rate (CAGR).",
            "Designed, back-tested, and deployed four novel, time-based options strategies that yielded a 50% CAGR over multi-year trading periods.",
            "Recruited, trained, and mentored a team of interns and junior traders, instilling disciplined, data-driven trading principles."
        ]
    },
    {
        title: "Senior Business Intelligence Engineer",
        company: "Amazon (Alexa)",
        date: "Feb 2020 – May 2022",
        summary: "Pioneered the data architecture for the Alexa Connected Device organization. Hired and led a team of 4, and architected a self-service BI platform that cut data access time from weeks to hours.",
        details: [
            "Architected and delivered the foundational data infrastructure and customer-facing dashboards for the entire Alexa Connected Device organization, serving over 15 partner teams.",
            "Developed a 3-year data and analytics roadmap, secured leadership buy-in, and hired a 4-person BI team to execute the vision.",
            "Built a scalable, self-service BI ecosystem using Redshift and data pipelining. Launched QuickSight dashboards and SQL query banks that reduced ad-hoc data request times from 2 weeks to under 1 hour."
        ]
    },
    {
        title: "Business Intelligence Engineer",
        company: "Amazon (Ads)",
        date: "May 2018 – Jan 2020",
        summary: "Delivered high-impact automation tools, including the HeadCT, which saved 50% of a financial analyst's bandwidth and became a critical pre-roster system.",
        details: [
            "Recognized in performance reviews for exceptional resourcefulness and problem-solving, successfully delivering the Head Count Tracking (HeadCT) tool through technical expertise and cross-functional persuasion.",
            "Engineered the HeadCT tool from the ground up, automating a manual, error-prone process and freeing up ~50% of a dedicated financial analyst's time.",
            "Owned and delivered critical retargeting metrics for the Weekly Business Review (WBR) by building robust data pipelines against petabyte-scale Athena data for DSP/SDP campaigns.",
            "Led other key initiatives including a high-visibility Refund Analysis Project and the automation of SDP revenue reporting."
        ]
    },
    {
        title: "Business Intelligence Engineer",
        company: "Amazon (Compliance - HS3C)",
        date: "Aug 2016 – May 2018",
        summary: "Promoted to BIE, unified data from over 90 disparate sources for two major business units, enabling automated, large-scale reporting for the first time.",
        details: [
            "Promoted to BIE in May 2017, taking ownership of the BI strategy for the RPC & COPS businesses within the HS3C (Health, Safety, Sustainability, Security, and Compliance) organization.",
            "Architected and built a foundational denormalized data layer that unified over 90 disparate data sources, enabling the creation of 300+ automated metrics and dashboards.",
            "Successfully provisioned a 4-node Redshift cluster and Tableau licenses for the COPS team, delivering a full project plan to automate all WBR, MBR, and QBR reporting.",
            "Developed critical product classification tables that were instrumental for the successful launch of two new business lines in 2017."
        ]
    },
    {
        title: "Business Analyst / SME",
        company: "Amazon (India)",
        date: "Sep 2012 – Aug 2016",
        summary: "Progressed from Catalog Associate to Business Analyst, delivering projects that saved 8 FTEs and earning an 'Outstanding' rating for exceeding goals by 200%.",
        details: [
            "Promoted from Catalog Associate (2012) to Subject Matter Expert (2013) and then Business Analyst (2015) based on consistent high performance.",
            "Achieved an 'Outstanding' performance rating (2014-2015) for delivering ~18 high-impact projects that resulted in a 3 FTE savings—double the organizational target.",
            "Led a flagship defect reduction project (Barcode Reconciliation) that eliminated 32,000 manual trouble tickets annually, saving the equivalent of 8 full-time employees.",
            "Automated the Hazmat classification process using SQL and advanced Excel, and developed the 'Auto Reporter' tool and a UK Retail Dashboard to drive operational efficiency.",
            "Championed data literacy by training over 150 associates and managers in BI analytics and Grasshopper, fostering a data-driven culture."
        ]
    }
];

export const projectData: Project[] = [
    {
        title: "Agentic AI-Powered dbt Migration Engine",
        summary: "Engineered an Agentic AI workflow that automated the migration of 500 Matillion jobs to dbt, cutting manual development effort by 90% and dramatically accelerating the project timeline.",
        details: "<p><strong>Challenge:</strong> Manually converting over 500 legacy Matillion jobs to modern dbt models was projected to be a monumental, error-prone effort that would stall critical data initiatives.</p><p><strong>Solution:</strong> I architected and built a sophisticated Agentic AI workflow using Python and the Claude API. This system intelligently parsed the old Matillion jobs, understood the business logic, and automatically generated production-ready SQL and YAML files for the new dbt models on our Redshift platform.</p><p><strong>Impact:</strong> The AI-powered engine achieved a 90% reduction in manual development time, transforming a year-long migration project into a matter of weeks. This unlocked immediate value and allowed the team to focus on new, high-impact data products.</p>",
        technologies: ["Python", "Claude API", "Agentic AI", "dbt", "Redshift", "SQL"]
    },
    {
        title: "Full-Stack Generative AI Solutions",
        summary: "Developed a suite of GenAI tools—including a Databricks chatbot and a custom data ingestion API—to solve key business problems, demonstrating end-to-end data delivery and AI implementation.",
        details: "<p>This series of projects showcased the practical application of Generative AI to drive business value:</p><ul><li><strong>Databricks GenAI Chatbot:</strong> Built and deployed a Proof-of-Concept chatbot that connected to our internal knowledge base, enabling employees to get instant, accurate answers and accelerating information retrieval across the company.</li><li><strong>Automated Data Ingestion API:</strong> Developed a robust Python API script to automate the ingestion of structured data from a third-party service that lacked a proper API, ensuring data freshness and reliability.</li><li><strong>Power BI to React Dashboard Replication:</strong> Re-architected and replicated a critical Power BI dashboard in React.js. This move eliminated significant licensing costs and created a flexible, proprietary platform for future feature development and customization.</li></ul><p><strong>Impact:</strong> These initiatives demonstrated a full-stack approach to data, from ingestion and processing to user-facing AI applications, ultimately improving efficiency and reducing operational costs.</p>",
        technologies: ["Python", "Generative AI", "Databricks", "REST APIs", "React.js", "Pandas"]
    },
    {
        title: "Alexa Self-Service BI Platform",
        summary: "Architected the data ecosystem for the Alexa Connected Device org, launching a self-service platform that empowered 15+ teams and slashed data access time from two weeks to under one hour.",
        details: "<p><strong>Challenge:</strong> The rapidly growing Alexa Connected Device organization, with over 15 teams, was crippled by a lack of centralized data architecture. Data requests were manual, slow, and inconsistent, taking weeks to fulfill.</p><p><strong>Solution:</strong> I took full ownership of the data strategy, designing and implementing a comprehensive data architecture from scratch using Redshift and scalable data pipelines. The cornerstone of this initiative was a self-service BI platform, featuring a suite of interactive QuickSight Dashboards and a curated Query Bank for frequently asked questions.</p><p><strong>Impact:</strong> The platform was a game-changer, reducing the average data access time from two weeks to less than an hour. This empowered product and engineering teams with real-time, actionable insights, fostering a culture of data-driven decision-making and freeing up valuable BI resources for more strategic work.</p>",
        technologies: ["Redshift", "AWS QuickSight", "SQL", "Data Pipelining", "Data Architecture", "ETL"]
    },
    {
        title: "Head Count Tracking (HeadCT) Automation Tool",
        summary: "Designed and launched the HeadCT tool for Amazon Ads, a critical system that automated headcount tracking and saved 50% of a dedicated financial analyst's bandwidth.",
        details: "<p><strong>Challenge:</strong> Headcount tracking for the Amazon Ads finance team was a highly manual and inefficient process, relying on a tangled web of emails and spreadsheets. This led to frequent errors and consumed significant analyst time.</p><p><strong>Solution:</strong> I developed an end-to-end automated system. The workflow began with user-friendly SharePoint forms for data entry, which fed into a robust DataNet ETL process. The cleaned data was stored in a centralized Redshift database, and a 'Missing PID Audit' dashboard in QuickSight provided immediate visibility into data gaps.</p><p><strong>Impact:</strong> The HeadCT tool became the single source of truth for headcount and was adopted as the critical stop-gap solution before the next-generation Amazon Roster system was ready. It successfully saved approximately 50% of a financial analyst's time, allowing them to focus on higher-value analysis.</p>",
        technologies: ["SharePoint", "Redshift", "AWS QuickSight", "DataNet ETL", "SQL"]
    }
];

export const testimonials: Testimonial[] = [
    {
        quote: "He is a very resourceful person and has very good knowledge of the systems and tools. He has the ability to solve problems and deliver results, even in ambiguous situations.",
        author: "Manager @ Amazon Ads"
    },
    {
        quote: "Sharath is a BI powerhouse. He has exceptional talent in not only understanding the business problem but also providing a scalable solution. His ability to think big and his problem-solving skills are remarkable.",
        author: "Manager @ Amazon Ads"
    },
    {
        quote: "A core strength is his ability to constantly look for refinement in processes. He naturally seeks automation and is able to 'simplify the amount of tasks required' by using multiple technologies.",
        author: "Manager @ Amazon"
    },
    {
        quote: "He has been a great asset to the team. His deep dives and data-driven approach have helped us make informed decisions. He is always ready to help and goes the extra mile.",
        author: "Sr. Manager @ Amazon"
    },
    {
        quote: "Sharath possesses vast knowledge of all that Amazon has to offer. He is the go-to person for difficult technical issues and has deep database expertise combined with Amazonian processes knowledge.",
        author: "Peer @ Amazon"
    },
    {
        quote: "He is highly collaborative and very responsive to new requirements, ensuring alignment when working with stakeholders. He is known for working with a smile and calm demeanor, even under stress.",
        author: "Finance Manager @ Amazon"
    }
];
