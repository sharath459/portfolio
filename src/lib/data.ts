import { Experience, Project, Testimonial } from './types';

export const experienceData: Experience[] = [
    {
        title: "Engineering Manager",
        company: "CitiusTech (Kyruus Health)",
        date: "Mar 2025 – Present",
        summary: "Managing an 8-person data team, accelerating 5 critical data projects in 3 months and streamlining development workflows.",
        details: [
            "Manage a team of 8 data professionals (Data Engineers & BI Engineers).",
            "Accelerated 5 critical data projects within the first 3 months of joining.",
            "Key activities include building dbt models in Redshift, integrating GitHub for version control, and creating Looker dashboards for visualization."
        ]
    },
    {
        title: "Individual Trader & Mentor",
        company: "Self-Employed",
        date: "2022 – 2024",
        summary: "Managed derivative portfolios over ₹3 crore, achieving 20% CAGR while mentoring new traders.",
        details: [
            "Managed over six derivative trading portfolios with a total value exceeding ₹3 crore, achieving a consistent 20% Compound Annual Growth Rate (CAGR).",
            "Developed and back-tested four time-based option strategies that achieved a 50% CAGR over multi-year periods.",
            "Recruited, trained, and mentored interns and mentees in trading principles and strategies."
        ]
    },
    {
        title: "Sr. BIE, Amazon Alexa",
        company: "Amazon",
        date: "Feb 2020 – May 2022",
        summary: "Spearheaded data architecture for the Connected Device organization, hiring a team of 4 and reducing data access time from weeks to hours.",
        details: [
            "Led the creation of a comprehensive data architecture and customer-facing dashboards for the Alexa Connected Device organization, supporting over 15 teams.",
            "Developed a 3-year data roadmap and hired a BI team of 4 to execute it.",
            "Established a robust data infrastructure using Redshift and data pipelining, building self-service products (QuickSight Dashboards, Query Banks) that reduced data access time from two weeks to less than an hour."
        ]
    },
    {
        title: "BIE, Amazon Ads",
        company: "Amazon",
        date: "May 2018 – Jan 2020",
        summary: "Delivered high-impact tools like the HeadCT, saving significant manual effort for the finance team.",
        details: [
            "Praised in performance reviews for resourcefulness, problem-solving, and delivering the HeadCT project through persuasion and technical skill.",
            "Designed and implemented the Head Count Tracking (HeadCT) Tool, which automated headcount tracking and freed up ~50% of a financial analyst's bandwidth.",
            "Delivered critical retargeting metrics for Weekly Business Reviews (WBR) by building data pipelines and queries against Athena data for DSP/SDP campaigns.",
            "Led other key initiatives including a Refund Project and SDP revenue reporting."
        ]
    },
    {
        title: "BIE, Amazon Compliance (HS3C)",
        company: "Amazon",
        date: "Aug 2016 – May 2018",
        summary: "Managed BI for two major businesses (RPC & COPS), unifying data from over 90 sources and enabling automated reporting.",
        details: [
            "Promoted to BIE in May 2017, managing major pieces of the HS3C (Health, Safety, Sustainability, Security, and Compliance) business.",
            "Developed a foundational denormalized table unifying data from over 90 sources, enabling faster reporting and the creation of 300+ metrics dashboards.",
            "Collaborated with the COPS team to spin up a 4-node Redshift cluster and provide Tableau licenses, creating a project plan to automate WBR, MBR, and QBR dashboards.",
            "Built critical classification tables that allowed two different business teams to launch in 2017."
        ]
    },
    {
        title: "SME / Business Analyst",
        company: "Amazon India",
        date: "Sep 2012 – Aug 2016",
        summary: "Rose from Catalog Associate to Business Analyst, delivering projects that saved 8 FTEs and earning an 'Outstanding' performance review.",
        details: [
            "Promoted from Catalog Associate (2012) to SME (2013) and then Business Analyst (2015).",
            "Received an 'Outstanding' performance rating (2014-2015) for completing ~18 projects, saving 3 FTEs (double the target), and mentoring associates.",
            "Led high-impact defect reduction projects (e.g., Barcode reconciliation) that saved 32,000 trouble tickets, equivalent to 8 FTEs.",
            "Automated Hazmat classification using SQL/Excel, and developed the 'Auto Reporter' tool and UK Retail Dashboard.",
            "Conducted BI analytics and Grasshopper training for over 150 associates and managers to promote data-driven decisions."
        ]
    }
];

export const projectData: Project[] = [
    {
        title: "Agentic AI Workflow for dbt Migration",
        summary: "Automated the migration of 500 Matillion jobs to dbt models using an Agentic AI workflow, saving 90% of manual development effort.",
        details: "<p><strong>Context:</strong> As part of the work at CitiusTech for Kyruus Health.</p><p><strong>Problem:</strong> Manually migrating 500 Matillion jobs to dbt models was a time-consuming and error-prone process.</p><p><strong>Solution:</strong> Engineered a high-efficiency Agentic AI workflow using Python and Claude to automate the migration. The system auto-generated the necessary SQL and YAML (metadata) files for the dbt models on Redshift MCPs.</p><p><strong>Impact:</strong> This automation resulted in a 90% saving in manual development effort, dramatically accelerating the migration project.</p>",
        technologies: ["Python", "Claude", "Agentic AI", "dbt", "Redshift"]
    },
    {
        title: "Gen AI Implementations",
        summary: "Developed a Databricks chatbot, a custom data ingestion API, and replicated a Power BI dashboard in React to showcase full-stack data delivery.",
        details: "<p>A series of projects demonstrating capabilities in applying Generative AI to solve business problems:</p><ul><li><strong>Databricks GenAI Chatbot:</strong> Built a Proof-of-Concept chatbot using Databricks's GenAI capabilities to accelerate internal information retrieval.</li><li><strong>Custom Data Ingestion API:</strong> Developed a Python API script to automate structured data ingestion from a proprietary service.</li><li><strong>Power BI to React Dashboard Replication:</strong> Re-created a Power BI dashboard in React.js to eliminate licensing costs and provide a platform for flexible feature development.</li></ul><p><strong>Impact:</strong> These projects showcased a full-stack data delivery perspective and the ability to leverage modern AI tools to improve efficiency and reduce costs.</p>",
        technologies: ["Python", "Gen AI", "Databricks", "APIs", "React.js"]
    },
    {
        title: "Alexa Data Architecture & Self-Service BI",
        summary: "Led the data architecture for the Alexa Connected Device org, reducing data access time from 2 weeks to under an hour.",
        details: "<p><strong>Context:</strong> During the role as Sr. BIE for Amazon Alexa (2020-2022).</p><p><strong>Problem:</strong> Over 15 teams lacked a central data architecture, leading to slow, manual data retrieval processes that took weeks.</p><p><strong>Solution:</strong> Spearheaded the creation of a comprehensive data architecture using Redshift and data pipelining. Developed self-service products including QuickSight Dashboards and a Query Bank for FAQs.</p><p><strong>Impact:</strong> Reduced data access time from two weeks to less than an hour, empowering teams with real-time insights and freeing up BI resources.</p>",
        technologies: ["Redshift", "QuickSight", "SQL", "Data Pipelining", "Data Architecture"]
    },
    {
        title: "Head Count Tracking (HeadCT) Tool",
        summary: "Designed and implemented the HeadCT tool for Amazon Ads, automating headcount tracking and saving 50% of a financial analyst's bandwidth.",
        details: "<p><strong>Context:</strong> During the role as Sr. BIE for Amazon Ads (2018-2020).</p><p><strong>Problem:</strong> Manual headcount tracking via emails and spreadsheets was inefficient, error-prone, and not scalable.</p><p><strong>Solution:</strong> Developed an integrated system using SharePoint forms for input, HR BI data (via DataNet ETL), and a Redshift database. Visualized results in a 'Missing PID audit' QuickSight dashboard.</p><p><strong>Impact:</strong> The tool was launched as a critical stop-gap before the next generation of Amazon Roster, saving approximately 50% of a financial analyst's bandwidth and providing a single source of truth for headcount.</p>",
        technologies: ["SharePoint Forms", "Redshift", "QuickSight", "DataNet ETL"]
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
