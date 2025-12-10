# Largest BI Project (STAR) — Amazon Alexa CDO BI

## Situation
In 2020–2021, the Alexa CDO organization consolidated BI into a centralized team to deliver self‑service analytics across 24 product areas. Only a subset had instrumented data; many domains lacked BI‑ready sources. We also had to meet GDPR privacy obligations and support multi‑region analytics for Targeting and I/O decoupling use cases.

## Task
- Stand up a scalable, compliant BI platform and deliver high‑value dashboards/WBRs quickly.
- Unblock teams without BI‑ready data by engineering reliable ingestion pipelines.
- Standardize tooling and patterns to reduce time‑to‑insight across programs.

## Actions
- Platform
  - Provisioned CDO‑owned Redshift DW (RA3, 4 nodes) with S3 and QuickSight; set up Spectrum on SSDG S3 for external datasets.
  - Established two additional Redshift clusters in EU and FE regions to support multi‑region data residency and performance.
  - Implemented GDPR delete compliance via Datanet for datasets onboarded to the CDO cluster.
- Data engineering
  - Onboarded 10+ tables to the CDO Redshift; integrated 6 MDX/Targeting datasets (4 via Datanet; 2 via Spectrum on SSDG S3).
  - Ran ingestion approach PoC and standardized on S3 → Cradle → EDX → Datanet → Redshift for cost, maintainability, and reuse.
- Delivery and self‑service
  - Built 5 QuickSight dashboards and 1 de‑normalized analysis table; completed 35+ ad‑hoc analyses.
  - Delivered dashboards/WBRs including Registry Health, SDE Intake, LAP Adoption (20 metrics, roadmap to 50), and MDX adoption.
  - Produced weekly WBRs (e.g., Multi‑Agent Analytics) and set automated distribution to stakeholders (PMs, SDMs, TPMs, BDSAs).
- Governance and adoption
  - Assessed BI readiness across 24 product areas: 4 with dashboards, 3 with WBRs, 8 with active intakes; identified 16 with missing instrumentation and partnered with Tech to land data in DataMart → SSDG → BI.

## Results
- Speed and scale
  - 5 production dashboards and a reusable denormalized table enabled broader self‑service; 35+ deep‑dives accelerated decision‑making.
  - Automated WBR creation saved ~0.5 day/week per WBR (Targeting and I/O decoupling examples), reducing manual effort and errors.
- Multi‑region analytics
  - EU/FE clusters unblocked cross‑region analysis for Targeting and I/O decoupling where data storages differed by region.
- Business impact
  - Registry Health dashboard de‑risked Device Deduplication by surfacing data quality issues pre‑launch.
  - MD UDR analysis revealed lower defect rates vs. single‑device (NA: 16.6 vs 19.69; WW: 16.85 vs 21.08), reframing product assumptions and focus areas.
- Compliance and standards
  - GDPR compliant deletes via Datanet and a documented, repeatable ingest/runbook path for future datasets.

## Relevance to Visa’s BI Manager Role
- Platform ownership and standards: Defined a repeatable ingestion pattern and cross‑region architecture—directly applicable to Visa’s data governance and platform leadership expectations.
- Self‑service at scale: Delivered standardized dashboards and WBR cadences that reduce manual reporting and improve time‑to‑insight.
- Privacy and controls: Built GDPR‑compliant flows and data ownership clarity across producers/consumers—a strong match to regulated environments.
- Cross‑functional delivery: Partnered with Product and Tech to instrument data and align metrics, moving teams from “no BI” to stable, automated reporting.

## Key metrics and facts (from source doc)
- 24 product areas assessed; 4 with dashboards, 3 with WBRs; 8 active intakes; 16 without instrumentation.
- 5 QuickSight dashboards; 1 de‑normalized table; 35+ ad‑hoc analyses; 10+ tables onboarded to CDO cluster.
- Redshift RA3 (4 nodes) primary; added EU and FE clusters for regional needs; Spectrum over SSDG S3 for two datasets.
- Weekly WBR cadence; LAP dashboard at 20 metrics (roadmap to 50).
- Time saved: ~0.5 day/week/WBR via automation.
- MD vs SD UDR: NA 16.6 vs 19.69; WW 16.85 vs 21.08.

## Short interview version (60–90 seconds)
Situation: Centralized BI for Alexa across 24 product areas with big data gaps and GDPR constraints. Task: Build a scalable, compliant BI platform and deliver fast self‑service. Action: Stood up Redshift RA3 with S3/QuickSight, added EU/FE clusters, standardized on S3→Cradle→EDX→Datanet→Redshift, onboarded 10+ tables and 6 MDX datasets (2 via Spectrum), implemented GDPR deletes, and shipped 5 dashboards plus weekly WBRs. Result: Automated WBRs saved ~0.5 day/week, enabled cross‑region analytics, de‑risked Device Dedup via Registry Health, and reframed product strategy via MD UDR insights. This is the same playbook I’d bring to Visa—platform standards, privacy‑first analytics, and self‑service at scale.
