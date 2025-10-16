const experienceData = {
    "eng-manager-citiustech": {
        title: "Engineering Manager, CitiusTech (Kyruus Health)",
        date: "Mar 2025 – Present",
        summary: "Managing an 8-person data team, accelerating 5 critical data projects in 3 months and streamlining development workflows.",
        details: `
            <ul>
                <li>Manage a team of 8 data professionals (Data Engineers & BI Engineers).</li>
                <li>Accelerated 5 critical data projects within the first 3 months of joining.</li>
                <li>Key activities include building dbt models in Redshift, integrating GitHub for version control, and creating Looker dashboards for visualization.</li>
            </ul>
        `
    },
    "trader-mentor": {
        title: "Individual Trader & Mentor",
        date: "2022 – 2024",
        summary: "Managed derivative portfolios over ₹3 crore, achieving 20% CAGR while mentoring new traders.",
        details: `
            <ul>
                <li>Managed over six derivative trading portfolios with a total value exceeding ₹3 crore, achieving a consistent 20% Compound Annual Growth Rate (CAGR).</li>
                <li>Developed and back-tested four time-based option strategies that achieved a 50% CAGR over multi-year periods.</li>
                <li>Recruited, trained, and mentored interns and mentees in trading principles and strategies.</li>
            </ul>
        `
    },
    "sr-bie-alexa": {
        title: "Sr. BIE, Amazon Alexa",
        date: "2020 – 2022",
        summary: "Spearheaded data architecture for the Connected Device organization, hiring a team of 4 and reducing data access time from weeks to hours.",
        details: `
            <ul>
                <li>Led the creation of a comprehensive data architecture and customer-facing dashboards for the Alexa Connected Device organization, supporting over 15 teams.</li>
                <li>Developed a 3-year data roadmap and hired a BI team of 4 to execute it.</li>
                <li>Established a robust data infrastructure using Redshift and data pipelining, building self-service products (QuickSight Dashboards, Query Banks) that reduced data access time from two weeks to less than an hour.</li>
            </ul>
        `
    },
    "sr-bie-ads": {
        title: "Sr. BIE, Amazon Ads",
        date: "May 2018 – 2020",
        summary: "Delivered high-impact tools like the HeadCT, saving significant manual effort for the finance team.",
        details: `
            <ul>
                <li>Praised in performance reviews for resourcefulness, problem-solving, and delivering the HeadCT project through persuasion and technical skill.</li>
                <li>Designed and implemented the Head Count Tracking (HeadCT) Tool, which automated headcount tracking and freed up ~50% of a financial analyst's bandwidth.</li>
                <li>Delivered critical retargeting metrics for Weekly Business Reviews (WBR) by building data pipelines and queries against Athena data for DSP/SDP campaigns.</li>
                <li>Led other key initiatives including a Refund Project and SDP revenue reporting.</li>
            </ul>
        `
    },
    "bie-compliance": {
        title: "BIE, Amazon Compliance (HS3C)",
        date: "Aug 2016 – May 2018",
        summary: "Managed BI for two major businesses (RPC & COPS), unifying data from over 90 sources and enabling automated reporting.",
        details: `
            <ul>
                <li>Promoted to BIE in May 2017, managing major pieces of the HS3C (Health, Safety, Sustainability, Security, and Compliance) business.</li>
                <li>Developed a foundational denormalized table unifying data from over 90 sources, enabling faster reporting and the creation of 300+ metrics dashboards.</li>
                <li>Collaborated with the COPS team to spin up a 4-node Redshift cluster and provide Tableau licenses, creating a project plan to automate WBR, MBR, and QBR dashboards.</li>
                <li>Built critical classification tables that allowed two different business teams to launch in 2017.</li>
            </ul>
        `
    },
    "sme-analyst-india": {
        title: "SME / Business Analyst, Amazon India",
        date: "Sep 2012 – Aug 2016",
        summary: "Rose from Catalog Associate to Business Analyst, delivering projects that saved 8 FTEs and earning an 'Outstanding' performance review.",
        details: `
            <ul>
                <li>Promoted from Catalog Associate (2012) to SME (2013) and then Business Analyst (2015).</li>
                <li>Received an "Outstanding" performance rating (2014-2015) for completing ~18 projects, saving 3 FTEs (double the target), and mentoring associates.</li>
                <li>Led high-impact defect reduction projects (e.g., Barcode reconciliation) that saved 32,000 trouble tickets, equivalent to 8 FTEs.</li>
                <li>Automated Hazmat classification using SQL/Excel, and developed the "Auto Reporter" tool and UK Retail Dashboard.</li>
                <li>Conducted BI analytics and Grasshopper training for over 150 associates and managers to promote data-driven decisions.</li>
            </ul>
        `
    }
};

const projectData = {
    "agentic-ai-migration": {
        title: "Agentic AI Workflow for dbt Migration",
        summary: "Automated the migration of 500 Matillion jobs to dbt models using an Agentic AI workflow, saving 90% of manual development effort.",
        details: `
            <p><strong>Context:</strong> As part of the work at CitiusTech for Kyruus Health.</p>
            <p><strong>Problem:</strong> Manually migrating 500 Matillion jobs to dbt models was a time-consuming and error-prone process.</p>
            <p><strong>Solution:</strong> Engineered a high-efficiency Agentic AI workflow using Python and Claude to automate the migration. The system auto-generated the necessary SQL and YAML (metadata) files for the dbt models on Redshift MCPs.</p>
            <p><strong>Impact:</strong> This automation resulted in a 90% saving in manual development effort, dramatically accelerating the migration project.</p>
            <p><strong>Technologies:</strong> Python, Claude, Agentic AI, dbt, Redshift</p>
        `
    },
    "gen-ai-projects": {
        title: "Gen AI Implementations",
        summary: "Developed a Databricks chatbot, a custom data ingestion API, and replicated a Power BI dashboard in React to showcase full-stack data delivery.",
        details: `
            <p>A series of projects demonstrating capabilities in applying Generative AI to solve business problems:</p>
            <ul>
                <li><strong>Databricks GenAI Chatbot:</strong> Built a Proof-of-Concept chatbot using Databricks's GenAI capabilities to accelerate internal information retrieval.</li>
                <li><strong>Custom Data Ingestion API:</strong> Developed a Python API script to automate structured data ingestion from a proprietary service.</li>
                <li><strong>Power BI to React Dashboard Replication:</strong> Re-created a Power BI dashboard in React.js to eliminate licensing costs and provide a platform for flexible feature development.</li>
            </ul>
            <p><strong>Impact:</strong> These projects showcased a full-stack data delivery perspective and the ability to leverage modern AI tools to improve efficiency and reduce costs.</p>
            <p><strong>Technologies:</strong> Python, Gen AI, Databricks, APIs, React.js</p>
        `
    },
    "alexa-data-architecture": {
        title: "Alexa Data Architecture & Self-Service BI",
        summary: "Led the data architecture for the Alexa Connected Device org, reducing data access time from 2 weeks to under an hour.",
        details: `
            <p><strong>Context:</strong> During the role as Sr. BIE for Amazon Alexa (2020-2022).</p>
            <p><strong>Problem:</strong> Over 15 teams lacked a central data architecture, leading to slow, manual data retrieval processes that took weeks.</p>
            <p><strong>Solution:</strong> Spearheaded the creation of a comprehensive data architecture using Redshift and data pipelining. Developed self-service products including QuickSight Dashboards and a Query Bank for FAQs.</p>
            <p><strong>Impact:</strong> Reduced data access time from two weeks to less than an hour, empowering teams with real-time insights and freeing up BI resources.</p>
            <p><strong>Technologies:</strong> Redshift, QuickSight, SQL, Data Pipelining, Data Architecture</p>
        `
    },
    "headct-tool": {
        title: "Head Count Tracking (HeadCT) Tool",
        summary: "Designed and implemented the HeadCT tool for Amazon Ads, automating headcount tracking and saving 50% of a financial analyst's bandwidth.",
        details: `
            <p><strong>Context:</strong> During the role as Sr. BIE for Amazon Ads (2018-2020).</p>
            <p><strong>Problem:</strong> Manual headcount tracking via emails and spreadsheets was inefficient, error-prone, and not scalable.</p>
            <p><strong>Solution:</strong> Developed an integrated system using SharePoint forms for input, HR BI data (via DataNet ETL), and a Redshift database. Visualized results in a "Missing PID audit" QuickSight dashboard.</p>
            <p><strong>Impact:</strong> The tool was launched as a critical stop-gap before the next generation of Amazon Roster, saving approximately 50% of a financial analyst's bandwidth and providing a single source of truth for headcount.</p>
            <p><strong>Technologies:</strong> SharePoint Forms, Redshift, QuickSight, DataNet ETL</p>
        `
    },
    "dsp-sdp-reporting": {
        title: "DSP/SDP Retargeting WBR",
        summary: "Built data pipelines and queries for critical DSP/SDP advertising metrics under intense time pressure for WBR reporting.",
        details: `
            <p><strong>Context:</strong> During the role as Sr. BIE for Amazon Ads (2019).</p>
            <p><strong>Problem:</strong> Retargeting metrics for the Weekly Business Review (WBR) were at risk due to fragmented and unavailable data infrastructure.</p>
            <p><strong>Solution:</strong> Quickly gained access to the DA Athena cluster and developed complex SQL queries joining multiple tables (e.g., sp_campaigns, sp_ads) to define and deliver metrics for active advertisers.</p>
            <p><strong>Impact:</strong> Ensured that critical WBR reporting could continue without interruption, providing vital performance data to the business while long-term data solutions were being developed.</p>
            <p><strong>Technologies:</strong> Athena, Redshift, SQL, QuickSight, ADW</p>
        `
    },
    "compliance-data-unification": {
        title: "Compliance Data Unification & Automation",
        summary: "Unified data from over 90 sources into a single source of truth and enabled automated Tableau reporting for the COPS team.",
        details: `
            <p><strong>Context:</strong> During the role as BIE for Amazon Compliance (2016-2018).</p>
            <p><strong>Problem:</strong> Data was siloed across 90+ unrelated sources, making comprehensive reporting nearly impossible and requiring significant manual effort.</p>
            <p><strong>Solution:</strong> Architected and developed a denormalized Redshift table that unified these sources into a single table with over 100 columns. Spun up a new Redshift cluster and provided Tableau licenses to the team.</p>
            <p><strong>Impact:</strong> Accelerated reporting cycles, provided end-to-end visibility for stakeholders, and enabled the automation of WBR, MBR, and QBR dashboards, saving significant manual effort.</p>
            <p><strong>Technologies:</strong> Redshift, Tableau, SQL, ETL, Data Modeling</p>
        `
    },
    "india-defect-reduction": {
        title: "Defect Reduction & Automation (Amazon India)",
        summary: "Led high-impact projects at Amazon India that saved 32,000 trouble tickets, equivalent to 8 FTEs.",
        details: `
            <p><strong>Context:</strong> During the role as SME/Business Analyst at Amazon India (2013-2016).</p>
            <p><strong>Problem:</strong> A number of operational processes had high defect rates, leading to wasted resources and increased costs.</p>
            <p><strong>Solution:</strong> Led several initiatives focused on identifying and eliminating root causes of defects. Key projects included Barcode Reconciliation, Repeat Rate Reduction, and automating Hazmat classification for ~15K ASINs in bulk.</p>
            <p><strong>Impact:</strong> These initiatives resulted in a reduction of 32,000 ISS trouble tickets, equivalent to saving 8 FTEs, and contributed to an 'Outstanding' performance review.</p>
            <p><strong>Technologies:</strong> SQL, Excel, Lean Six Sigma</p>
        `
    },
    "india-bi-training": {
        title: "BI Training & Dashboarding (Amazon India)",
        summary: "Developed automated dashboards and trained over 150 associates and managers in BI tools to foster a data-driven culture.",
        details: `
            <p><strong>Context:</strong> During the role as SME/Business Analyst at Amazon India (2013-2016).</p>
            <p><strong>Problem:</strong> Business teams lacked the tools and skills for self-service data analysis, creating a bottleneck.</p>
            <p><strong>Solution:</strong> Created multiple dashboards, including the 'Auto Reporter' tool and the UK Retail Dashboard. Conducted extensive training sessions on BI Analytics and Amazon-internal tools like Grasshopper and ETML.</p>
            <p><strong>Impact:</strong> Empowered over 150 team members to self-serve their data needs, eliminating ramp-up time for analyst roles and promoting data-driven decision-making across the organization.</p>
            <p><strong>Technologies:</strong> Excel, SQL, Grasshopper, ETML, Internal BI Tools</p>
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
