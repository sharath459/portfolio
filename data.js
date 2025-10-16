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
    },
    "sr-bie-compliance": {
        title: "Sr. BIE, Amazon Compliance",
        date: "2016 – 2018",
        summary: "Developed a denormalized table unifying data from over 90 sources.",
        details: `
            <ul>
                <li>Developed a denormalized table unifying data from over 90 unrelated sources into a comprehensive table with 100+ columns.</li>
                <li>This enabled faster reporting cycles and the creation of over 300 metrics dashboards.</li>
                <li>Collaborated with COPS to spin up a 4-node Redshift cluster and provide Tableau licenses.</li>
            </ul>
        `
    },
    "sme-analyst-india": {
        title: "SME / Business Analyst, Amazon India",
        date: "2012 – 2016",
        summary: "Delivered high-impact projects in Defect Reduction, saving 8 FTEs.",
        details: `
            <ul>
                <li>Delivered high-impact projects in Defect Reduction (e.g., Repeat rate reduction, Barcode reconciliation), saving 32,000 ISS TTs (equivalent to 8 FTEs).</li>
                <li>Implemented quality measures using Lean Six Sigma to ensure 100% quality.</li>
                <li>Automated Hazmat classification using SQL/Excel functions to classify ~15K ASINs in bulk.</li>
            </ul>
        `
    }
};

const projectData = {
    "agentic-ai-migration": {
        title: "Agentic AI Workflow for dbt Migration",
        summary: "Automated the migration of 500 Matillion jobs to dbt models using an Agentic AI workflow, saving 90% of manual development effort.",
        details: `
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
                <li><strong>Databricks GenAI Chatbot:</strong> Built a Proof-of-Concept chatbot using Databricks's GenAI capabilities (via its API) to accelerate internal information retrieval for data teams.</li>
                <li><strong>Custom Data Ingestion API:</strong> Developed a custom Python API script to automate reliable, structured data ingestion from a proprietary service, including the auto-generation of a seed table.</li>
                <li><strong>Power BI to React Dashboard Replication:</strong> Re-created a Power BI dashboard in React.js to eliminate licensing costs and provide a platform for flexible, custom feature development.</li>
            </ul>
            <p><strong>Impact:</strong> These projects showcased a full-stack data delivery perspective and the ability to leverage modern AI tools to improve efficiency and reduce costs.</p>
            <p><strong>Technologies:</strong> Python, Gen AI, Databricks, APIs, React.js</p>
        `
    },
    "mdx-data-engineering": {
        title: "MDX Data Engineering",
        summary: "Onboarded 6 datasets for the MDX Targeting team to support WBR, enabling more insights by joining targeting tables with existing data.",
        details: `
            <p><strong>Problem:</strong> The MDX Targeting team needed to onboard multiple datasets to their Redshift cluster to drive more insights for their Weekly Business Review (WBR).</p>
            <p><strong>Solution:</strong> Onboarded 6 datasets, 4 via Datanet jobs and 2 from S3 using Redshift Spectrum. To handle multi-region data, set up two new Redshift clusters in the EU and FE regions.</p>
            <p><strong>Impact:</strong> Enabled the BI team to completely automate WBRs and create insightful dashboards, saving approximately 0.5 days of manual effort per week, per WBR.</p>
            <p><strong>Technologies:</strong> Redshift, Datanet, Redshift Spectrum, S3</p>
        `
    },
    "gdpr-implementation": {
        title: "GDPR Compliance Implementation",
        summary: "Implemented a Datanet solution to ensure GDPR compliance for the data cluster, eliminating dependencies on upstream teams.",
        details: `
            <p><strong>Problem:</strong> With the scaling of the cluster storage and the addition of new tables, ensuring GDPR compliance became a critical requirement.</p>
            <p><strong>Solution:</strong> Implemented a Datanet solution to handle data compliance directly within the cluster, moving away from relying on upstream teams to provide full data loads.</p>
            <p><strong>Impact:</strong> This gave the team complete ownership of cluster compliance and eliminated dependencies, ensuring the platform adhered to GDPR guidelines.</p>
            <p><strong>Technologies:</strong> Datanet, Redshift, GDPR</p>
        `
    },
    "multi-agent-analytics": {
        title: "Multi-Agent Analytics (MAA)",
        summary: "Created an automated, Excel-based weekly business review (WBR) to provide cross-program analytics for the 'Powered by Alexa' developer program.",
        details: `
            <p><strong>Problem:</strong> The 'Powered by Alexa' program lacked cross-program analytics, with individual programs having their own one-off dashboards.</p>
            <p><strong>Solution:</strong> Designed and built an Excel-based WBR, automatically generated and distributed via email. This report measures customer usage, economic value, and agent quality across different agents.</p>
            <p><strong>Impact:</strong> Provided a unified view of the program's performance, enabling stakeholders to measure business impact and identify areas for improvement.</p>
            <p><strong>Technologies:</strong> Excel, SQL, DataMart</p>
        `
    },
    "s3-to-redshift-poc": {
        title: "S3 to Redshift Data Onboarding POC",
        summary: "Conducted a proof-of-concept (POC) to identify the most optimal and cost-effective pipeline for ingesting data from AWS S3 to Redshift.",
        details: `
            <p><strong>Problem:</strong> For planned dashboards, data was not available in existing BI sources and needed to be ingested from non-BI sources like S3.</p>
            <p><strong>Solution:</strong> Conducted a POC evaluating multiple data ingestion approaches based on cost, effectiveness, and maintenance. The team concluded that the S3 > Cradle > EDX > Datanet > Redshift pipeline was the optimal approach.</p>
            <p><strong>Impact:</strong> Established a standardized, replicable, and efficient pattern for all future projects requiring data ingestion from S3, saving time and reducing complexity.</p>
            <p><strong>Technologies:</strong> AWS S3, Cradle, EDX, Datanet, Redshift</p>
        `
    },
    "multi-device-udr": {
        title: "Multi-Device Unified Defect Rate (UDR)",
        summary: "Developed a new SQL-based UDR metric for multi-device Alexa customers, uncovering key insights into customer behavior.",
        details: `
            <p><strong>Problem:</strong> The existing Unified Defect Rate (UDR) metric only accounted for single-device customers, leaving a gap in analytics for multi-device users.</p>
            <p><strong>Solution:</strong> Created a new UDR metric for multi-device customers by writing a SQL query based on logic defined with the product team.</p>
            <p><strong>Impact:</strong> The analysis revealed that multi-device customers had a lower UDR, leading to the insight that these more tenured customers are more 'trained' on how to interact with Alexa effectively.</p>
            <p><strong>Technologies:</strong> SQL</p>
        `
    },
    "registry-health-dashboard": {
        title: "Registry Health Dashboard",
        summary: "Built a self-service dashboard to monitor key registry data, de-risking the Device Deduplication project and enabling proactive issue identification.",
        details: `
            <p><strong>Problem:</strong> The Device Deduplication project required a comprehensive overview of registry data, including composition and growth trends, to inform and de-risk the project.</p>
            <p><strong>Solution:</strong> Created the Registry Health dashboard, a self-service tool for PMs, SDMs, and BDSAs to monitor data such as unique identifier coverage and duplicate metrics.</p>
            <p><strong>Impact:</strong> The dashboard allowed the project team to proactively identify and resolve data irregularities ahead of launch, ensuring a smoother project execution.</p>
            <p><strong>Technologies:</strong> QuickSight, SQL</p>
        `
    },
    "sde-intake-dashboard": {
        title: "SDE Intake Dashboard",
        summary: "Automated the manual SDE intake reporting process by creating a dashboard to track intake volume, processing timelines, and other key metrics.",
        details: `
            <p><strong>Problem:</strong> CDO TPMs were manually reporting on SDE intake data monthly, a time-consuming process with limited analytical capabilities.</p>
            <p><strong>Solution:</strong> Created the CDO Intake dashboard to automate reporting and provide real-time insights into intake volume, accept/reject rates, key customers, and processing timelines.</p>
            <p><strong>Impact:</strong> Enabled TPMs and SDMs to monitor the effectiveness of developer velocity investments and make data-driven decisions on where to invest further.</p>
            <p><strong>Technologies:</strong> QuickSight, SQL</p>
        `
    },
    "lap-adoption-dashboard": {
        title: "LAP Adoption Dashboard",
        summary: "Developed a QuickSight dashboard to track the adoption and impact of the Local Adapter Protocol (LAP) launch.",
        details: `
            <p><strong>Problem:</strong> The LAP launch required a way to track local adoption, including the number of customers and devices that would benefit from LAP-enabled local control.</p>
            <p><strong>Solution:</strong> Created a QuickSight dashboard with about 20 key metrics (planned to expand to 50) to monitor adoption and customer experience edge cases.</p>
            <p><strong>Impact:</strong> The dashboard helps product and tech teams monitor how frequently customers experience known CX edge cases, allowing them to take action if metrics move beyond estimated thresholds.</p>
            <p><strong>Technologies:</strong> QuickSight, SQL</p>
        `
    },
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
    },
    "rpc-bi-arch": {
        title: "BI Data Architecture for RPC",
        summary: "Designed and implemented a new data architecture using Tableau.",
        details: `
            <p><strong>Problem:</strong> The RPC team required a more robust and scalable BI solution to support their reporting and analytics needs.</p>
            <p><strong>Solution:</strong> Designed a new BI data architecture from the ground up. This involved creating new data models and ETL processes to feed into a Tableau-based reporting system.</p>
            <p><strong>Impact:</strong> Provided the RPC team with a powerful and flexible BI platform, enabling them to generate insights and make data-driven decisions more effectively.</p>
            <p><strong>Technologies:</strong> Tableau, SQL, ETL, Data Modeling</p>
        `
    },
    "defect-reduction": {
        title: "Defect Reduction Initiatives",
        summary: "Led high-impact projects at Amazon India focused on defect reduction.",
        details: `
            <p><strong>Problem:</strong> A number of operational processes had high defect rates, leading to wasted resources and increased costs.</p>
            <p><strong>Solution:</strong> Led several initiatives focused on identifying the root causes of defects and implementing solutions. This included process automation, implementing Lean Six Sigma quality measures, and developing new reconciliation tools.</p>
            <p><strong>Impact:</strong> These initiatives resulted in significant improvements, including a reduction of 32,000 ISS TTs, which is equivalent to saving 8 FTEs.</p>
            <p><strong>Technologies:</strong> SQL, Excel, Lean Six Sigma</p>
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
