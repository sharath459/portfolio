import { Experience, Project, Testimonial, Accolade } from './types';

export const heroData = {
  pitch: "I'm a proven data leader with <strong>13 years of experience</strong> transforming complex data challenges into high-impact business solutions. My work has driven <strong>$2.3MM+ in annual value</strong>, <strong>saved 30+ FTE positions</strong> through automation, and <strong>reduced critical data access times from weeks to hours</strong>. I don't just build dashboards—I architect <strong>scalable data ecosystems</strong>, pioneer <strong>AI-driven automation</strong> (like my 90% efficiency gain in dbt migration using Agentic AI), and deliver solutions that directly impact revenue and strategic growth. I'm a <strong>T-shaped professional</strong>: deep expertise in data engineering and BI, with broad knowledge spanning AI/ML, quantitative finance, product management, and full-stack development.",
  philosophy: "I believe in four core principles: <strong>T-Shaped Learning & Rapid AI Mastery</strong>—I maintain deep vertical expertise in data/BI while continuously expanding horizontal knowledge across AI, trading, and product domains. My recent pivot to AI (Agentic workflows, GenAI chatbots, LLM fine-tuning) demonstrates how I rapidly become expert through hands-on building, not just theory. <strong>Measurable Impact Over Activity</strong>—every solution must deliver quantifiable business value (FTE savings, dollar impact, time reduction). <strong>Automation as a Strategic Advantage</strong>—if it's manual and repetitive, it should be automated; if it's automated but slow, it should be AI-powered. <strong>Data as a Decision Engine</strong>—transform raw data into actionable insights that empower everyone from executives to analysts. I combine deep technical expertise with business acumen to build systems that scale, simplify, and drive measurable results."
};

export const experienceData: Experience[] = [
    {
        title: "Engineering Manager, Data",
        company: "CitiusTech (for Kyruus Health)",
        date: "Mar 2025 – Present",
        summary: "Managing an 8-person data team to accelerate delivery of 5 critical data projects ($1.2MM total cost, 10x ROI expected) within 3 months, driving the migration of 500+ Matillion jobs to modern dbt and Redshift stack.",
        details: [
            "Engineered a groundbreaking Agentic AI workflow using Python and Claude API that automated the migration of 500 Matillion jobs to dbt models—auto-generating SQL and YAML files and achieving 90% reduction in manual development time, transforming what would have been a year-long project into weeks.",
            "Led an 8-person team of dbt Data Engineers and Looker BI Engineers to accelerate 5 long-stalled, critical data projects within 3 months, with total project cost of $1.2MM and expected 10x return on investment (ROI).",
            "Streamlined development lifecycle by implementing a robust QA framework and coaching the team on best practices, significantly enhancing project quality and operational efficiency.",
            "Built a Databricks GenAI chatbot POC to accelerate internal information retrieval, developed a custom Python API for automated data ingestion from proprietary services, and replicated a Power BI dashboard in React.js to eliminate licensing costs while enabling flexible custom feature development."
        ]
    },
    {
        title: "Quantitative Trader & Mentor",
        company: "Self-Employed",
        date: "Jun 2022 – Dec 2024",
        summary: "Managed derivative portfolios exceeding ₹3 crore with 20% CAGR by developing and deploying four proprietary time-based options strategies, demonstrating strong quantitative analysis and risk management capabilities.",
        details: [
            "Managed over six derivative trading portfolios with combined AUM exceeding ₹3 crore, delivering a consistent 20% Compound Annual Growth Rate (CAGR) through disciplined execution and data-driven strategies.",
            "Designed, rigorously back-tested, and deployed four novel time-based options strategies at 1-minute scale granularity, achieving an exceptional 50% CAGR over multi-year trading periods.",
            "Recruited, trained, and supervised 2 interns to execute trades and maintain detailed account records, while mentoring 2 paid mentees and 10 trial mentees on trading principles and technical analysis.",
            "Applied lean thinking, quantitative analysis, and technical analysis methodologies to identify market opportunities and manage portfolio risk effectively."
        ]
    },
    {
        title: "Senior Business Intelligence Engineer",
        company: "Amazon (Alexa)",
        date: "Feb 2020 – May 2022",
        summary: "Pioneered the data architecture for the Alexa Connected Device organization (260+ individuals, 15+ teams). Architected a self-service BI platform that reduced data access time from 2 weeks to <1 hour, driving $2.3MM in estimated annual impact.",
        details: [
            "As the first and only BIE within the Alexa Connected Devices & Orchestration (CDO) organization, architected and delivered the foundational data infrastructure for an organization of 260+ individuals across 15+ partner teams.",
            "Developed a comprehensive 3-year data and analytics roadmap, secured leadership buy-in, and built a 4-person BI team to execute the vision—establishing data infrastructure critical to Alexa's AI-based voice assistance serving millions of customers.",
            "Built a transformative self-service BI ecosystem using Redshift, data pipelining, QuickSight dashboards, and SQL Query Banks that reduced average data request fulfillment time from 2 weeks to under 1 hour—unlocking real-time insights for product and engineering teams.",
            "Delivered 5 QuickSight dashboards (Registry Health, SDE Intake, LAP Adoption, Multi-Device UDR, MDX Engagement), onboarded 10+ critical data tables, completed 35+ ad-hoc analyses, and implemented GDPR-compliant data deletion mechanisms—all while managing an estimated $2.3MM annual impact on Amazon's business."
        ]
    },
    {
        title: "Senior Business Intelligence Engineer",
        company: "Amazon (Ads)",
        date: "May 2018 – Jan 2020",
        summary: "Delivered the HeadCT (Head Count Tracking) tool saving 50% of a financial analyst's bandwidth (~$200K/month value) and established real-time retargeting metrics infrastructure for Amazon's multi-billion dollar Ads business.",
        details: [
            "Engineered the end-to-end HeadCT (Head Count Tracking) tool for the 6,000+ person Amazon Ads organization—integrating SharePoint forms, HR data pipelines via DataNet ETL, Redshift database, and QuickSight dashboards to automate headcount tracking that previously consumed 50% of a dedicated financial analyst's time (representing $200K/month in opportunity cost).",
            "Overcame significant technical and organizational challenges through resourcefulness and problem-solving, persuading cross-functional partners and designing a scalable solution using simple yet powerful technology that became the stop-gap tool before Amazon's next-generation Roster system.",
            "Established critical retargeting metrics infrastructure by building data pipelines from Athena (petabyte-scale data), creating joined queries for DSP/SDP campaigns, and delivering WBR (Weekly Business Review) metrics under tight deadlines—enabling strategic decisions for a multi-billion dollar advertising business.",
            "Led Refund Analysis Project, automated SDP revenue reporting by creating scalable pipelines from ADW to Redshift (replacing manual uploads), and drove agency reporting automation—transforming a 2-day manual process into a click-of-a-button solution."
        ]
    },
    {
        title: "Business Intelligence Engineer",
        company: "Amazon (Compliance - HS3C)",
        date: "Aug 2016 – May 2018",
        summary: "Promoted to BIE in May 2017. Unified data from 90+ disparate sources into a comprehensive denormalized table enabling 300+ automated metrics and dashboards for RPC & COPS businesses.",
        details: [
            "Promoted to BIE in May 2017, taking full ownership of the BI strategy for the RPC (Restricted Products Compliance) and COPS businesses within the HS3C (Health, Safety, Sustainability, Security, and Compliance) organization.",
            "Architected and built a foundational denormalized data layer that unified over 90 disparate data sources into a comprehensive table with 100+ columns, enabling the creation of 300+ automated metrics and dashboards—dramatically accelerating decision-making for compliance operations.",
            "Successfully provisioned a 4-node Redshift cluster and Tableau licenses for the COPS team, collaborated with HS3C BI & A team to onboard necessary tables, and delivered a full project plan to automate all WBR, MBR, and QBR reporting.",
            "Developed critical product classification tables that were instrumental for the successful launch of two new business lines in 2017, demonstrating deep technical expertise in Amazon-specific data systems."
        ]
    },
    {
        title: "Business Analyst / SME",
        company: "Amazon (India)",
        date: "Sep 2012 – Aug 2016",
        summary: "Progressed from Catalog Associate (2012) to SME (2013) to Business Analyst (2015). Achieved 'Outstanding' performance rating, delivering 18 high-impact projects that saved 8 FTEs—double the organizational target.",
        details: [
            "Achieved 'Outstanding' performance rating (2014-2015) for delivering approximately 18 high-impact projects including CTI onboarding for EU-3 MPs, CS CTIs standardization, Auto Reporter tool, UK Retail Dashboard, and Barcode Reconciliation—resulting in 3 FTE savings, double the organizational target of 1.5 FTEs.",
            "Led flagship Barcode Reconciliation project that eliminated 32,000 manual trouble tickets annually, saving the equivalent of 8 full-time employees and significantly reducing operational burden.",
            "Automated the Hazmat classification process using SQL and advanced Excel to classify ~15,000 ASINs in bulk, developed the 'Auto Reporter' tool to streamline reporting workflows, and created comprehensive BI dashboards to drive operational efficiency.",
            "Championed data literacy by conducting training sessions for over 150 associates and managers on BI Analytics and Grasshopper, fostering a data-driven culture across the organization.",
            "Partnered with ASCS engineering team to build detailed analysis models, conducted deep dives on false positive/false negative rates for regulatory compliance, and contributed to critical initiatives including DG classifier optimization and cross-border compliance risk modeling."
        ]
    }
];

export const projectData: Project[] = [
    {
        title: "Agentic AI-Powered dbt Migration Engine",
        category: "AI & Automation",
        summary: "Engineered an Agentic AI workflow that automated the migration of 500 Matillion jobs to dbt, cutting manual development effort by 90% and dramatically accelerating the project timeline.",
        details: "<p><strong>Challenge:</strong> Manually converting over 500 legacy Matillion jobs to modern dbt models was projected to be a monumental, error-prone effort that would stall critical data initiatives.</p><p><strong>Solution:</strong> I architected and built a sophisticated Agentic AI workflow using Python and the Claude API. This system intelligently parsed the old Matillion jobs, understood the business logic, and automatically generated production-ready SQL and YAML files for the new dbt models on our Redshift platform.</p><p><strong>Impact:</strong> The AI-powered engine achieved a 90% reduction in manual development time, transforming a year-long migration project into a matter of weeks. This unlocked immediate value and allowed the team to focus on new, high-impact data products.</p>",
        technologies: ["Python", "Claude API", "Agentic AI", "dbt", "Redshift", "SQL"]
    },
    {
        title: "Full-Stack Generative AI Solutions",
        category: "AI & Automation",
        summary: "Developed a suite of GenAI tools—including a Databricks chatbot and a custom data ingestion API—to solve key business problems, demonstrating end-to-end data delivery and AI implementation.",
        details: "<p>This series of projects showcased the practical application of Generative AI to drive business value:</p><ul><li><strong>Databricks GenAI Chatbot:</strong> Built and deployed a Proof-of-Concept chatbot that connected to our internal knowledge base, enabling employees to get instant, accurate answers and accelerating information retrieval across the company.</li><li><strong>Automated Data Ingestion API:</strong> Developed a robust Python API script to automate the ingestion of structured data from a third-party service that lacked a proper API, ensuring data freshness and reliability.</li><li><strong>Power BI to React Dashboard Replication:</strong> Re-architected and replicated a critical Power BI dashboard in React.js. This move eliminated significant licensing costs and created a flexible, proprietary platform for future feature development and customization.</li></ul><p><strong>Impact:</strong> These initiatives demonstrated a full-stack approach to data, from ingestion and processing to user-facing AI applications, ultimately improving efficiency and reducing operational costs.</p>",
        technologies: ["Python", "Generative AI", "Databricks", "REST APIs", "React.js", "Pandas"]
    },
    {
        title: "Sponsored Display Product (SDP) WBR/MBR Infrastructure",
        category: "Top Project",
        summary: "Delivered comprehensive WBR/MBR reporting infrastructure for Amazon's Sponsored Display product within 3 months under pressure, unifying multiple disparate data sources and enabling strategic reporting for SVP Paul Kotas.",
        details: "<p><strong>Challenge:</strong> Sponsored Display (SD), a new advertising product, lacked the in-depth, business-friendly data required for Weekly Business Reviews (WBR) and Monthly Business Reviews (MBR) with SVP Paul Kotas. Multiple escalations demanded deeper-level data beyond what the ML team was producing. Data resided across disparate sources: CPC performance metrics in Athena (petabyte-scale, no native scheduling), CPC campaign data in the ACH Redshift cluster (billions of records across 8+ dimension/fact tables), CPM metrics in the ADW Redshift cluster (complex queries with frequent failures), and Salesforce data in the Disad Redshift cluster.</p><p><strong>Solution:</strong> I unified all data sources into a single Redshift cluster to enable scalable dashboards and reporting. Each source presented unique engineering challenges: for Athena (which lacked data publisher and scheduler mechanisms), I built a custom pipeline using SQL Workbench, S3, and Datanet copy commands; for the ACH cluster's billions of records, I created transformation jobs to combine 8+ tables and extract only required datasets; for ADW's complex CPM queries, I optimized SQL to ensure reliable daily execution. I then developed comprehensive QuickSight dashboards displaying ROAS, Revenue, CPC, Gross Margin, Impressions, Clicks, Attributed OPS, Units Sold, and other critical performance metrics. Additionally, I integrated SD data into URR reporting and partnered with Product Finance and SD teams to conduct advertiser-level analyses and identify billing code bugs missed during engineering code reviews.</p><p><strong>Impact:</strong> Within just 3 months, I demonstrated full-stack data engineering and BI capabilities, enabling Finance, Product, and Sales teams to access WBR/MBR reports on time with deep data insights. This empowered faster, data-driven decisions to scale the product effectively, transforming a high-visibility escalation into a strategic success.</p>",
        technologies: ["Athena", "Redshift", "AWS QuickSight", "DataNet ETL", "SQL", "S3", "ADW", "ACH"]
    },
    {
        title: "Head Count Tracking (HeadCT) Automation Tool",
        category: "Top Project",
        summary: "Designed and launched the HeadCT tool for Amazon Ads' 6,000+ employee organization, automating headcount tracking and saving 50% of a dedicated financial analyst's bandwidth—representing $200K/month in opportunity cost.",
        details: "<p><strong>Challenge:</strong> The Advertising FP&A team was managing headcounts for a rapidly growing 6,000+ person organization using manual Excel spreadsheets, relying on emails, Chimes, and hallway conversations. This process consumed 50% of a dedicated financial analyst's time and was highly error-prone due to multiple variables (Butts in Seats, Pending Starts, Requisitions in various stages, Backfills, On Leave, and internal/external transfers).</p><p><strong>Solution:</strong> I architected and delivered an end-to-end automated system integrating SharePoint input forms for standardized data collection, DataNet ETL pipelines to ingest HR data, a Redshift database for centralized storage and transformation logic (auto-assigning Position IDs based on complex business rules), and QuickSight dashboards for leadership visibility. Beyond technology, I redesigned the underlying business process, defining clear roles, responsibilities, and audit mechanisms to proactively catch data mapping errors. I also identified and resolved upstream HR data quality issues (missing requisition IDs, duplicate mappings) that impacted Amazon-wide operations.</p><p><strong>Impact:</strong> HeadCT eliminated manual tracking inefficiencies, delivered ~50% bandwidth savings for one financial analyst (equivalent to $200K/month in opportunity cost), became the critical stop-gap solution before Amazon's next-generation Roster system, and is now used by multiple VPs to regularly monitor team headcounts. The tool provided scalability for a fast-growing organization, significantly improved headcount reconciliation accuracy, and enabled all stakeholders to eliminate offline tracking and reconciliation time.</p>",
        technologies: ["SharePoint", "Redshift", "AWS QuickSight", "DataNet ETL", "SQL", "Excel VBA"]
    },
    {
        title: "Agency Reporting Automation & Display Ads Revenue Suite",
        category: "Top Project",
        summary: "Re-architected agency reporting (multi-billion dollar business) from a 2-day manual process to a click-of-a-button solution, and built comprehensive revenue dashboard suite for Sales, Finance, and Leadership.",
        details: "<p><strong>Challenge:</strong> Agency reporting for Amazon's multi-billion dollar advertising business was a major pain point—clunky, manual, error-prone, and required 2 full business days to complete. Teams were losing stakeholder trust due to inaccurate reporting, and corrections meant redoing entire reports or making manual Excel changes. Additionally, the Display Ads Finance team needed a comprehensive suite of dashboards to provide instant revenue access (at the lowest grain), campaign-level deep-dives, and predictive analytics for Sales, Finance, and Leadership.</p><p><strong>Solution:</strong> I designed and executed a bold plan to completely automate the agency reporting process. I created staging tables that ran over weekends, integrated data from disparate sources into a single consolidated output (previously requiring manual downloads and merges), and scheduled final jobs to run daily—enabling Finance managers to generate reports at the click of a button. Where automation challenges existed, I built unique upload tools for Finance leaders, remaining relentless in pursuit of full automation. I also eliminated massive Excel files (100MB+) prone to crashes by migrating to lightweight, simplified business review documents. For the revenue dashboards, I built YoY and MoM growth contributor analyses (bridge charts), advertiser-level deep-dive capabilities, and predictive models to identify advertisers at risk of attrition and forecast month-end/quarterly projections.</p><p><strong>Impact:</strong> What previously took 2 days now takes hours. Agency reporting is now accurate, scalable, and trusted. The revenue dashboard suite provides Sales, Finance, and Leadership with instant, granular insights across multiple dimensions, enabling faster strategic decisions and better sales targeting. The time-series forecasting models improved predictive accuracy beyond the previous single-data-point approach, directly supporting Amazon's multi-billion dollar advertising growth.</p>",
        technologies: ["Redshift", "AWS QuickSight", "SQL", "DataNet ETL", "ADW", "S3", "Excel Automation"]
    },
    {
        title: "HS3C Compliance Data Unification (RPC & COPS)",
        category: "AI & Automation",
        summary: "Unified 90+ disparate compliance data sources into a comprehensive denormalized table with 100+ columns, enabling 300+ automated metrics/dashboards and supporting the launch of two new business lines.",
        details: "<p><strong>Challenge:</strong> The Health, Safety, Sustainability, Security, and Compliance (HS3C) organization's Restricted Products Compliance (RPC) and COPS businesses relied on over 90 fragmented data sources scattered across Amazon's infrastructure. This created massive inefficiencies—business analysts and legal teams couldn't easily query critical compliance data, WBR/MBR/QBR reporting was entirely manual, and launching new business lines required months of data preparation. Amazon was also migrating from Oracle Data Warehouse to in-house Redshift as part of a company-wide cost-saving and scalability initiative.</p><p><strong>Solution:</strong> I architected and built a foundational relational database from scratch using Redshift, VIRT Dashboard, ETLM, S3, and EDX. I onboarded 50+ required tables from multiple upstream sources (Selection Classification data, DW Booker, DW VIRT), created fact tables to simplify querying, and engineered a comprehensive denormalized table with 100+ columns that unified all critical RPC/COPS data. This single table enabled anyone with basic SQL knowledge to query compliance data efficiently. I provisioned a 4-node Redshift cluster and Tableau licenses for the COPS team, delivered a full project plan to automate all WBR, MBR, and QBR reporting, and partnered with the ASCS engineering team to ensure data structures met business and legal requirements. I also developed critical product classification tables instrumental for launching two new business lines in 2017.</p><p><strong>Impact:</strong> The unified data layer enabled the creation of 300+ automated metrics and dashboards, dramatically accelerating compliance decision-making. Non-technical stakeholders gained self-service access to data without needing SQL expertise (via Tableau/QuickSight), scaling data analysis capabilities across the organization. The infrastructure supported faster, data-driven compliance decisions, increased regulatory compliance, reduced illegal product listings, and enabled Amazon to launch two new business lines on schedule—demonstrating the strategic value of well-architected data systems.</p>",
        technologies: ["Redshift", "Tableau", "SQL", "ETLM", "S3", "EDX", "VIRT Dashboard", "DataNet ETL"]
    },
    {
        title: "Quantitative Trading System",
        category: "Side Project",
        summary: "Built a sophisticated passive trading system managing ₹3 crore+ AUM with 7-10% monthly returns (20% CAGR overall), achieving 97% win rate on Iron Condor strategies and 300-1400% CAGR on zero-day expiry options strategies using Option Omega platform.",
        details: "<p><strong>Initiative:</strong> An entrepreneurial venture demonstrating data-driven decision-making and systematic risk management in live financial markets. Built entirely passive, time-based strategies that require no market analysis or directional prediction—purely mathematical approaches exploiting theta decay patterns identified through rigorous 5-minute granularity backtesting on year-to-date (YTD) data.</p><p><strong>Technical Approach:</strong> Developed proprietary data models analyzing intraday volatility patterns at 5-minute intervals for each day of the week (Monday, Tuesday, etc.), identifying optimal time windows for non-directional options strategies. Primary strategies include: <strong>Iron Condor on Shabiti (IC)</strong> with 97% win percentage achieving 300% CAGR on ₹20K capital, <strong>Iron Fly on Friday (IF)</strong> achieving 1400% CAGR on ₹10K capital over Aug 2022-Aug 2023, and <strong>Reverse Iron Condor (RIC)</strong> for morning volatility patterns. All trades are zero-day-to-expiry (0DTE) day trades—no overnight positions. Execution is fully templatized in Option Omega platform: one-click order placement with automated stop-loss and profit-taking orders pre-configured based on backtested criteria.</p><p><strong>Strategy Philosophy:</strong> These are 'passive' strategies—no technical analysis, chart reading, or market watching required. Traders simply check predefined criteria at specific times (e.g., Monday 10 AM, Friday 2 PM), and if conditions are met (volatility thresholds, price ranges from data model), place the templatized order and walk away. The system makes money from time decay (theta), not price direction—profiting when markets stay range-bound within predicted boundaries. Rigorous risk management and money management rules exclude high-volatility days (FOMC speakers, CPI data releases) to maintain smooth equity curves.</p><p><strong>Impact & Results:</strong> Achieved consistent 7-10% monthly returns (with exceptional months reaching 8-9%), translating to 20% overall CAGR across diversified portfolio of ₹3 crore+ AUM. Individual strategies delivered 300-1400% CAGR depending on market conditions and capital allocation. Monday/Tuesday trades show nearly 100% win rates, enabling strategic capital scaling on those days. Managed entire trading lifecycle including execution, detailed bookkeeping/reporting, and mentoring 2 interns (trade execution and record maintenance) plus 2 paid mentees and 10 trial mentees on systematic trading principles. Demonstrated strong quantitative analysis, disciplined risk management, and entrepreneurial capabilities in volatile, high-stakes environments outside traditional corporate settings.</p>",
        technologies: ["Quantitative Analysis", "Options Trading", "Zero-Day Expiry (0DTE)", "Option Omega", "Iron Condor", "Iron Fly", "Theta Decay Strategies", "Risk Management", "Python", "Backtesting", "Data Modeling"]
    },
    {
        title: "RelationMatch: AI-Powered Non-Romantic Relationship Matching",
        category: "AI & Automation",
        summary: "Conceptualized and designed an innovative AI-driven matching platform that extends the 'swipe' paradigm beyond dating to meaningful non-romantic relationships—connecting mentors/mentees, siblings, parent-child bonds, and professional partnerships.",
        details: "<p><strong>Problem Statement:</strong> While dating apps have revolutionized romantic connections, there's a massive unmet need for structured, intelligent matching in non-romantic relationships. People struggle to find quality mentors, compatible workout partners, study buddies, or even surrogate family connections (elder brother figures, father-son type bonds). Traditional social networks don't solve this because they rely on existing connections rather than intelligent matching based on compatibility, values, goals, and interaction preferences.</p><p><strong>Vision:</strong> RelationMatch applies AI-powered matching algorithms (similar to dating apps like Tinder) to facilitate meaningful non-romantic relationships across multiple categories: <strong>Mentorship</strong> (career guidance, skill development), <strong>Familial Bonds</strong> (surrogate elder brother/younger brother, father-son connections for those lacking family support), <strong>Fitness & Wellness Partners</strong> (gym buddies, running partners, accountability partners), <strong>Learning Companions</strong> (study groups, skill-sharing, language exchange), and <strong>Professional Networking</strong> (co-founders, collaborators, accountability partners for side projects).</p><p><strong>Technical Approach:</strong> The platform would use machine learning models trained on user profiles (goals, values, communication styles, availability, interests) combined with collaborative filtering and natural language processing of user-written bios to generate compatibility scores. Users create detailed profiles specifying what type of relationship they're seeking, swipe through AI-recommended matches, and upon mutual interest, are connected through structured conversation starters and goal-setting prompts to ensure meaningful interactions. Advanced features could include sentiment analysis of chat conversations to flag mismatches early and reinforcement learning to continuously improve matching accuracy based on relationship outcomes.</p><p><strong>Impact Potential:</strong> This concept addresses loneliness, lack of mentorship access, and social isolation—particularly relevant in post-pandemic society where traditional community structures have weakened. Could democratize access to mentorship for underrepresented groups, provide social support systems for people without strong family networks, and create accountability structures for personal development goals. The platform could monetize through premium features (unlimited swipes, advanced filters, verified profiles) while maintaining free access to core matching functionality.</p>",
        technologies: ["Machine Learning", "Natural Language Processing", "Collaborative Filtering", "Mobile App Development", "Sentiment Analysis", "Recommendation Systems", "React Native", "Python", "AI/ML Algorithms"]
    },
    {
        title: "KundliAI: Comprehensive Vedic Astrology Intelligence Platform",
        category: "AI & Automation",
        summary: "Designing an AI-powered Vedic astrology application that generates detailed Kundli (birth charts) with advanced features including Ashtakavarga analysis, house lord placements, planetary element mapping, and Dasha timeline predictions with intelligent insights.",
        details: "<p><strong>Problem Statement:</strong> Traditional Kundli generation tools are either overly simplistic (basic chart images with no interpretation) or require consultation with expensive astrologers who may lack consistency. Users struggle to understand complex astrological concepts like Ashtakavarga scores, house lordships, planetary strengths/weaknesses, and how Dasha periods will impact their life. There's no accessible, comprehensive, and intelligent platform that combines accurate astronomical calculations with AI-driven interpretations in user-friendly language.</p><p><strong>Vision:</strong> KundliAI is an end-to-end Vedic astrology platform that goes far beyond basic chart generation. It provides: <strong>Comprehensive Birth Chart (Kundli)</strong> with precise planetary positions using Swiss Ephemeris calculations, <strong>Ashtakavarga Analysis</strong> showing benefic/malefic point distribution across all houses and planets, <strong>House Lord Details</strong> explaining which planets rule which houses and their significance, <strong>Elemental Analysis</strong> (Fire, Earth, Air, Water distribution) showing personality traits and life themes, <strong>Dasha Timeline Visualization</strong> (Vimshottari Dasha system) with interactive timeline showing past, current, and future planetary periods, and <strong>AI-Powered Insights</strong> that interpret complex combinations in plain language (e.g., 'Saturn in 10th house during its Dasha suggests career challenges requiring discipline').</p><p><strong>Technical Approach:</strong> Backend uses Swiss Ephemeris library for astronomical accuracy, Python for Vedic astrology calculations (Ashtakavarga, divisional charts, strength calculations), and machine learning models trained on classical texts (BPHS, Jataka Parijata) to generate natural language interpretations. The AI component uses a combination of rule-based systems (for well-established astrological principles) and LLMs fine-tuned on astrological corpus to provide contextual, personalized insights. Frontend visualizations use D3.js or similar libraries for interactive charts, timeline representations, and intuitive UI/UX that makes complex concepts accessible. Data privacy is paramount—all sensitive birth data encrypted, calculations done locally where possible.</p><p><strong>Advanced Features:</strong> <strong>Compatibility Analysis</strong> (Kundli matching for relationships/marriages), <strong>Transit Predictions</strong> (how current planetary movements affect the natal chart), <strong>Remedial Measures</strong> (gemstone recommendations, mantras, charitable acts based on planetary weaknesses), <strong>Life Events Correlation</strong> (user inputs major life events and AI identifies which Dasha/transit periods correlated), and <strong>Multi-Language Support</strong> (Hindi, Tamil, Telugu, etc.) to reach broader Indian diaspora audience.</p><p><strong>Impact Potential:</strong> Democratizes access to quality astrological guidance for millions who can't afford expensive consultations. Preserves and digitizes ancient Vedic knowledge with modern AI interpretation. Could build community features where users discuss insights, share experiences, and validate predictions. Monetization through premium features (detailed reports, priority support, advanced divisional charts) while keeping core Kundli generation free. Market potential is massive—India's astrology market is estimated at $10B+ and growing with younger, tech-savvy generations seeking digital solutions.</p>",
        technologies: ["Python", "Swiss Ephemeris", "Machine Learning", "Natural Language Processing", "LLM Fine-tuning", "Vedic Astrology Algorithms", "D3.js", "Data Visualization", "React", "Mobile App Development", "Astronomy Calculations"]
    },
];

export const accolades: Accolade[] = [
    {
        title: "Outstanding Performance Rating at Amazon India",
        description: "Achieved the highest possible performance rating for delivering ~18 high-impact projects that resulted in 3 FTE savings—double the organizational target of 1.5 FTEs. Projects included Barcode Reconciliation (8 FTE savings), CTI onboarding for EU-3 MPs, CS CTIs standardization, Auto Reporter tool, and UK Retail Dashboard.",
        year: "2015"
    },
    {
        title: "Flagship Barcode Reconciliation Project",
        description: "Led the flagship defect reduction project that eliminated 32,000 manual ISS trouble tickets annually, saving the equivalent of 8 full-time employees and significantly reducing operational burden across Amazon India.",
        year: "2015"
    },
    {
        title: "Promotion to Business Analyst",
        description: "Promoted from Subject Matter Expert (SME) to Business Analyst in recognition of strong analytical skills, consistent high-impact project delivery, and data-driven problem-solving capabilities.",
        year: "2015"
    },
    {
        title: "Promotion to Business Intelligence Engineer",
        description: "Promoted from Business Analyst to Business Intelligence Engineer, taking on full ownership of BI strategy for RPC & COPS businesses within the HS3C organization and leading large-scale data architecture initiatives.",
        year: "2017"
    },
    {
        title: "Promotion to Senior Business Intelligence Engineer",
        description: "Promoted to Senior BIE, leading data architecture and team-building initiatives for the Alexa Connected Device organization. Built a 4-person BI team and established foundational data infrastructure serving 260+ individuals across 15+ partner teams.",
        year: "2020"
    },
    {
        title: "NIE Letter Recognition - $2.3MM Annual Impact",
        description: "Recognized in National Interest Exception (NIE) letter for driving an estimated $2.3MM annual impact on Amazon's business through transformative data infrastructure, self-service BI platform, and strategic automation initiatives.",
        year: "2021"
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
