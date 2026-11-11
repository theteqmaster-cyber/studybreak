# SCS 2211: Software Project Management — Consolidated Knowledge Vault (`~/Zwanane`)

> **Compiled from `~/Zwanane`** across **Notak** (`notes`, `lecture_logs`, `sync_events`, `~/Zwanane/notes/`), **Ulwazi** (`documents`, `~/Zwanane/library/`), and **Okum** (`tasks`, `focus_tasks`, `focus_logs`, `~/Zwanane/tasks/`).
>
> **Course:** `SCS 2211` — Software Project Management (NUST Computer Science Part 2.2)  
> **Lecturers Listed in Zwanane:** Mr Bhuru (`l_fb84c61e`), Dr S Dube (`l_e26ed931`)

---

## Table of Contents
1. [Section 1: Notak — Lecture Notes & LTrack Logs](#section-1-notak--lecture-notes--ltrack-logs)
2. [Section 2: Okum — Tasks, Quick Notes & Focus Logs](#section-2-okum--tasks-quick-notes--focus-logs)
3. [Section 3: Ulwazi — Library Slides, Study Guides & Textbooks](#section-3-ulwazi--library-slides-study-guides--textbooks)
   - [3.1 `Scs2211 Introduction to Software Project Management.pdf`](#31-scs2211-introduction-to-software-project-managementpdf)
   - [3.2 `SCS_2211_What_is_Software_Project_Management_Study_Guide.docx`](#32-scs_2211_what_is_software_project_management_study_guidedocx)
   - [3.3 `SCS_2211_Cost_Benefit_Analysis_Study_Guide.docx`](#33-scs_2211_cost_benefit_analysis_study_guidedocx)
   - [3.4 `DCAP304_DCAP515_SOFTWARE_PROJECT_MANAGEMENT.pdf` (14-Unit Reference)](#34-dcap304_dcap515_software_project_managementpdf-14-unit-reference)
   - [3.5 `Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf` (Part 4: Software Management)](#35-software-engineering-9th-edition-by-ian-sommervillepdf-part-4-software-management)
   - [3.6 Additional Reference (`SSPM.pdf` Screenshot)](#36-additional-reference-sspmpdf-screenshot)
4. [Section 4: Consolidated Formulas, Worked Examples & Exam Blueprint](#section-4-consolidated-formulas-worked-examples--exam-blueprint)

---

## Section 1: Notak — Lecture Notes & LTrack Logs

### 1.1 LTrack Lecture Logs (`lecture_logs` table)

| Date | Course | Topic | Venue | Lecturer | Scope / Logged Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-10-12 06:03 | `SCS 2211` | What is Software Project Management | `part2 lab` | Mr Bhuru | introduction, what is software project management, role of a software project manager, difference between a software project and ordinary project |
| 2026-10-13 06:01 | `SCS 2211` | Cost Benefit Analysis | `slt2` | Mr Bhuru | when does a project fail, cost benefit analysis, role of a software project manager |
| 2026-11-09 13:59 | `SCS 2211` | SPI BAC TCPI | `delta dark area` | Bhuru | spi, bac, evm, cpi |
| 2026-11-10 14:01 | `SCS 2211` | Lecture towards the end EVM | `g22b changed new venue` | Bhuru | *(Linked to full note `b4c5c2bd` below)* |

---

### 1.2 Notak Note: `Lecture2` (`9302db6e` / `Lecture2.md`)
- **Course:** `SCS 2211` | **Lecturer:** Bhuru | **Tags:** `["softprojmangmnt"]` | **Date:** 2026-10-12

**Raw Lecture Note:**
```text
project activities
methodologies  apply them 
project analysis tools
quality risk 
lead and participate in projects 

=continue with projects 
=or get new ones

-what is software project management 
-how does it differ from other physical project management 
-nature of deliverables differ
-bn
-dont use funny examples 

->5 october to 6 november 
learnign window 

-what do software project managers 
scope and requirements
schedule and estimation
people and resources
risk and quality 
communication 

write a charter 
project charter 

maintanance has money 

how does increasing scope affect project management 

mwO7w35m
mw07w35m
```

---

### 1.3 Notak Note: `lecture` (`e979f129` / `lecture.md`)
- **Course:** `SCS 2211` | **Topic:** `g91` | **Lecturer:** Bhuru | **Date:** 2026-11-02

**Raw Lecture Note:**
```text
-recap work of breakdown structure,

-
for today 

pert
cpm
evm
```

---

### 1.4 Notak Note: `schsduling` (`fef14fac` — recovered full content from `sync_events`)
- **Course:** `SCS 2211` | **Topic:** `g91` | **Lecturer:** Bhuru | **Date:** 2026-11-02  
*(Note: The latest row in `notes` was accidentally overwritten with `⁵⁵`; the full lecture content was preserved in `zwanane.db` `sync_events`.)*

**Raw Lecture Note (Recovered):**
```text
pert
cpm
evm

projects
basis of argument
schedule
basis of argument

pert
uses time estimates
its probabilistics
probability
most optimistic time ,
most exteme pessimistic end most optimistic end 
output is an expected date ,

used for uncertain work

cpm
is deteministic
we know wat we are looking at ,we have expereince,
pert vs cpm 
pert.uncertain worlk
relaistic deadljnes
caters for risk

cpm is different
try to find critical tasks and less critical tasks

now moving to statistics
queatiom
calculate duration of a task 
with neighbour 
come upwith network

durations
pert
wat happens wen we deviate from the plan
its in the exam eprt,cpm,ebm the tak

a weird table with grids is in ...
late start late finish
calculate standard deviation for every task there

wat matters
sometimes
sometimes at hackathon solve,
what is your ask?

end value mamagement
calculate all ,in terms of money
time
not too fast 
not too slow
```

---

### 1.5 Notak Note: `evm` (`23e20eaa` / `evm.md`)
- **Course:** `SCS 2211` | **Topic:** `delta dark area` | **Lecturer:** Bhuru | **Tags:** `["spi bac tcpi"]` | **Date:** 2026-11-09

**Raw Lecture Note + Worked School Portal Problem:**
```text
recap

evm
brings sanity to software projects

earned value (end value)
actual cost (AC)
planned value (PV)
earned value (EV)
budgeted cost of work 

variance:
how far are we from the plan

schedule variance (SV):
(our gantt chart says)
SV = EV - PV

cost variance (CV):
a certain amount of money allocated, how far are we
CV = EV - AC

indexes after the variances:

SPI (Schedule Performance Index):
SPI = EV / PV
if SPI > 1 we are ahead of schedule

CPI (Cost Performance Index):
CPI = EV / AC

BAC (Budget at Completion)

EAC (Estimate at Completion):
- Typical variance:
  when we are past cost efficiency, things are out of hand and continue out of hand
  EAC = BAC / CPI

- Atypical variance:
  the overall, we went overboard, but overall was once off, remaining task can execute at planned rate
  EAC = AC + BAC - EV

- Exam situation (using both SPI and CPI to measure cost at completion):
  EAC = AC + (BAC - EV) / (CPI * SPI)   [logged in class note as: (ac + bac) / cpi * spi — verify standard formula: AC + (BAC - EV)/(CPI*SPI)]

- Bottom-up approach:
  EAC = AC + new budget to complete   [logged as: bac + new budget to complete]

ETC (Estimate to Complete):
ETC = EAC - AC
how much is left to spend

VAC (Variance at Completion):
VAC = BAC - EAC
if negative? we are using too much money

!! use your head, some will be mathematical
!! questions like what does that mean, explain the results
!! what it means for you as a project manager

how do we calculate estimated duration:
Estimated Duration = Planned Duration / SPI

TCPI (To-Complete Performance Index):
if CPI is below 1, above 1
TCPI = (BAC - EV) / (BAC - AC)

RECAP SUMMARY:
- SV (Schedule Variance): are we ahead or are we behind schedule?
- CV (Cost Variance): are we under or over budget?
- SPI: are we behind schedule or ahead of schedule?
- CPI: are we above or below budget? how much value are we getting for every dollar?
- EAC: what will it cost in total? at the end how much are we losing?
- ETC: how much is left to spend?
- VAC: at the end of the day, did we save or overspend?
- TCPI: how efficient must we be now?

--------------------------------------------------
WORKED EXAMPLE: SCHOOL PORTAL
A customer portal takes 10 months to build. At month number 5:
- BAC = 400k
- PV  = 200k
- EV  = 160k
- AC  = 180k

1. Schedule Variance (SV) & SPI:
   SV = 160 - 200 = -40k
   -> Behind schedule by $40,000 worth of work.
   SPI = 160 / 200 = 0.8
   -> Project is progressing at 80% of planned rate, behind schedule.

2. Cost Variance (CV) & CPI:
   CV = EV - AC = 160 - 180 = -20k
   -> Over budget by $20,000.
   CPI = EV / AC = 160 / 180 = 0.889
   -> Getting $0.89 of value for every $1 spent; we are over budget.

3. Estimate at Completion (EAC):
   EAC = 400 / 0.8889 = 400 * (180 / 160) = $450,000
   -> $450,000 forecasted total project cost.

4. Estimate to Complete (ETC):
   ETC = EAC - AC = 450k - 180k = $270,000
   -> $270,000 left to spend to finish the project.

5. Variance at Completion (VAC):
   VAC = BAC - EAC = 400k - 450k = -$50,000
   -> Forecasted to finish $50,000 over budget.

6. To-Complete Performance Index (TCPI):
   TCPI = (BAC - EV) / (BAC - AC) = (400 - 160) / (400 - 180) = 240 / 220 = 1.091
   -> Must achieve $1.09 of value per dollar spent on remaining work to stay within original budget.

7. Estimated Time to Complete:
   Estimated Duration = 10 / 0.8 = 12.5 months

!! Learn all EACs, things might go south.
!! If they don't say which variance, always use typical (EAC = BAC / CPI).
Good practice in EVM: don't speculate things.

--------------------------------------------------
INTRO TO PROJECT QUALITY MANAGEMENT:
- What is quality? If it meets the requirements, and it's fit for use.
- What is grade?
- How do we measure it? How can we tell if it's quality?
```

---

### 1.6 Notak Note: `lecture towards the end  evm` (`b4c5c2bd`)
- **Course:** `SCS 2211` | **Topic:** `g22b changed new venue` | **Lecturer:** Bhuru | **Date:** 2026-11-10

**Raw Lecture Note:**
```text
g22 new venue

recap:
we looked at quality
what is quality?
we said quality is not grade
there is a difference between grade and quality
we said quality = if it meets requirements and is fit for use

- finish on quality
- then we look on ishikawa

EVM, a problem you might not know about
Exam structure / difficulty breakdown:
- 1 easy
- 1 moderate
- 1 hard
- 1 very hard
- 1 impossible

- the hard one / moderate one (lesson before)
- quality is found on hard one
- calculations were on the hard one
- questions follow the course outline: easy ----> hard stuff content
- we are about to finish the course outline
- quality: easy stuff
- lecture tomorrow / test tomorrow

Why quality matters:
- maintain reputation
- compliance
- maintainability
- as long as it meets user requirements and is fit for use it's top quality
- grade is at feature level (low grade, high grade)

Quality and the Triple Constraints:
- scope, time, cost (quality stands at the centre of it all)
- it's a pyramid scheme
- what happens when scope, time and cost tighten?
  people always look for someone to blame. [analogy]
- what are test cases
- shortcuts create technical debt, raises costs in end
- quality is not inspected later; it must be checked throughout
- quality is built over time
- quality planning, managing quality

What do we take into consideration:
- ISO standards, IEC
- sustainability, security, maintainability
- defect density: per every 1k lines of code, how many defects are there
- algorithmic efficiency: measure responsiveness
- test coverage: how did they test the systems

Cost of Quality:
- appraisal
- cost of conformance vs cost of non-conformance

Quality Control (reactive) vs Quality Assurance (proactive):
- prevent defects: Quality Assurance (proactive) -> e.g., audits
- detect and correct defects: Quality Control (reactive)

Test Pyramid

Change Management:
- don't allow changes without proper documentation
- put them under future work unless they are inevitable

Ishikawa Diagram (Fishbone Diagram):
- focuses on project failure: why do projects fail
- keep fish simple
- 6 Categories (6Ms):
  Top bones:    Technology   |   Resources   |   Measurements
  Spine:        >--------------------------------------------|> (Project Failure)
  Bottom bones: Environment  |   Methods     |   Manpower
- HAVE AT LEAST 3 CAUSES FOR EACH!

Tomorrow's Test / Course Focus Topics (2 questions):
- Software methodologies
- CPM
- WBS
- Quality control / Ishikawa
- Risk management
- EVM
```

---

### 1.7 Related Project Management Notes from `SCS 2214` (Rev K Chilumani)
- **`lecture project plan gazebo installation` (`03a98262`, 2026-10-15):**
  - Project Plan, Work Breakdown Structure (WBS), Gantt chart ("who does what when"), Project Charter by Project Manager.
  - **CASE Tools:**
    - *Lower CASE tools* (coding & implementation: VS Code, CodeBlocks, PyCharm, Gazebo)
    - *Upper CASE tools* (documentation & modeling: Slack, Git, OMG/UML tools, Figma)
  - **Specification Approaches:**
    - *Object-Oriented* (OMG UML: Use case diagram, Use case description table, Class diagram, Sequence diagram, Collaboration diagram, State diagram, Package diagram, Deployment diagram)
    - *Structured Approach* (Context diagram, DFD Level 0/1/2, Flowcharts, Jackson Structured Programming / Jackson diagram)
  - SRS document (Software Requirements Specification).
- **`project` (`9f73eb56`, 2026-10-16):**
  - **How do software projects fail? (Spec / Time / Money):**
    1. Delivering an implementation that does not meet the specification.
    2. Going beyond allocated time (Moore's Law: computing power doubles rapidly — don't take too long with projects or technology changes).
    3. Going beyond the budget (cost overrun -> project failure).

---

## Section 2: Okum — Tasks, Quick Notes & Focus Logs

From `~/Zwanane/zwanane.db` (`tasks`, `focus_tasks`, `focus_logs`) and `~/Zwanane/tasks/`:

1. **`quick_lecture bhuru.md` (`fe91cad4`, Quick Note, 2026-11-02):**
   - Current content: `pert`, `cpm`, `evm`
   - Earlier `sync_events` draft:
     ```text
     pert, cpm, evm
     projects -> basis of argument
     schedule -> basis of argument
     pert: uses time estimates, it's probabilistic, probability,
           most optimistic time, most extreme pessimistic and most optimistic end,
           output is an expected date
     ```
2. **`task_bhuru assignment.md` (`8fddd132`, Task & Focus Task — Status: `completed`, Satisfaction: `90%`, 2026-10-13):**
   - Focus Logs:
     - `handwritten assignment`
     - `submitted`
3. **`task_get bhuru course material.md` (`53effa09`, Task — Status: `in_progress`, Satisfaction: `80%`, 2026-11-10):**
   - Title: `get bhuru course material`

---

## Section 3: Ulwazi — Library Slides, Study Guides & Textbooks

### 3.1 `Scs2211 Introduction to Software Project Management.pdf`
- **File:** `Scs2211 Introduction to Software Project Management.pdf` (13 slides | `bf31af0a590c...`)

**Slide-by-Slide Content:**
1. **Title:** Introduction to Software Project Management — *Projects, challenges, stakeholders and the project lifecycle*
2. **Definitions:**
   - **Project:** A temporary effort with a defined start and end, undertaken to create a unique product, service or result.
   - **Software Project Management:** Planning, organizing and leading people, time and resources to deliver working software that meets agreed goals.
3. **Characteristics of a Project (4):**
   - *Temporary:* A definite start and end; the team disbands when the work is done.
   - *Unique output:* Each system differs in users, technology or context, unlike routine operations.
   - *Goal-driven:* Success is judged against agreed objectives and acceptance criteria.
   - *Constrained:* Limited by time, budget, people and technology.
4. **What Software Project Managers Do (5 Areas):**
   - *Scope and requirements:* Gather, prioritize and baseline requirements
   - *Schedule and estimation:* Break work down, estimate effort, set milestones
   - *People and resources:* Build the team, assign tasks, secure tools
   - *Risk and quality:* Identify risks, plan testing and reviews
   - *Communication:* Run meetings, report status, manage expectations
5. **Key Challenges in Managing Software Projects (6):**
   - *Changing requirements:* Needs evolve as users see the product.
   - *Estimation:* Effort is hard to predict for work never done before.
   - *Intangibility:* Progress in code is hard to see and measure.
   - *Technical risk:* New tools, integrations and unknown defects.
   - *Communication:* Many people, and often distributed teams.
   - *Quality:* Deadlines and budgets pressure testing.
6. **Project Stakeholders and Roles (6):**
   - *Sponsor:* Funds the project and approves major decisions
   - *Project manager:* Plans, coordinates, tracks risks and reports progress
   - *Client / customer:* Defines needs and accepts deliverables
   - *Development team:* Designs, builds and integrates the software
   - *QA / testers:* Verify quality against requirements
   - *End users:* Use the product and give feedback
7. **Engaging Stakeholders by Power and Interest (Power-Interest Matrix):**
   - High Power + High Interest → **Manage closely** (e.g., sponsor, client)
   - High Power + Low Interest → **Keep satisfied** (e.g., senior executives)
   - Low Power + High Interest → **Keep informed** (e.g., end users, team)
   - Low Power + Low Interest → **Monitor** (e.g., other departments)
8. **Software Project Lifecycle: Five Process Groups:**
   1. *Initiation:* Define the idea, goals and feasibility.
   2. *Planning:* Scope, schedule, budget and risks.
   3. *Execution:* Design, build and test the software.
   4. *Monitoring & Control:* Track progress, manage change.
   5. *Closure:* Hand over, review lessons learned.
9. **Initiation and Planning in Detail:**
   - *Initiation:* Identify business need -> Run feasibility study -> Name PM and sponsor -> Approve project charter.
   - *Planning:* Define scope and requirements -> Create WBS -> Estimate effort, schedule and budget -> Plan risks, quality and communication.
10. **Execution, Control and Closure in Detail:**
    - *Execution:* Design and code -> Integrate and test -> Coordinate the team.
    - *Monitoring & Control:* Compare progress to plan -> Handle change requests -> Track risks and defects.
    - *Closure:* Obtain client acceptance -> Deploy and hand over -> Review lessons learned.
11. **The Triple Constraint:** Scope (what software must do), Time (schedule/deadlines), Cost (budget for people/tools/infra). Changing one constraint affects the others; quality suffers when squeezed.
12. **Triple Constraint Trade-offs:**
    - Add features (more scope) → Extend the schedule or increase the budget
    - Deliver sooner (less time) → Cut scope or add people at extra cost
    - Spend less (lower cost) → Reduce scope or accept a longer schedule
    - *Rule of thumb:* Use change control so every trade-off is agreed and recorded.
13. **Deliverables & Documentation at Each Stage:**
    - *Initiation:* Business case, feasibility study | **Doc:** Project charter
    - *Planning:* Schedule, budget, risk plan | **Doc:** Requirements spec, project plan
    - *Execution:* Designs, code, tested builds | **Doc:** Design documents, test cases
    - *Monitoring & Control:* Status reports, change decisions | **Doc:** Progress and change logs
    - *Closure:* Final product, client sign-off | **Doc:** User manual, lessons learned

---

### 3.2 `SCS_2211_What_is_Software_Project_Management_Study_Guide.docx`
- **File:** `SCS_2211_What_is_Software_Project_Management_Study_Guide.docx` (`f7bd92a6fcb5...`)
- **Lecturer:** Mr Bhuru | **Venue:** Part 2 Lab | **Logged:** Mon, Oct 12, 2026

#### Core Theory & Textbooks Cited
- **Hughes & Cotterell** (*Software Project Management*, Ch 1) & **Fred Brooks** (*No Silver Bullet*).
- **3 Core Stages of the SPM Control Cycle:** (1) Project Feasibility & Planning, (2) Project Execution & Monitoring, (3) Project Control & Closure.
- **Categorizing Software Projects:** Information Systems vs. Embedded/Industrial Systems; Product-Driven vs. Objective-Driven; In-House bespoke vs. Outsourced/Contracted.

#### Software Projects vs. Ordinary Physical Engineering Projects (**ICCF**)

| Characteristic | Ordinary Physical Project (Bridge / Building) | Software Engineering Project | Management Implication for Software PM |
| :--- | :--- | :--- | :--- |
| **1. Invisibility** | Progress is physically visible (foundation poured, walls rising). | Software is intangible; "90% complete" code looks identical on disk to "50% complete" code. | PM must create artificial visibility via WBS milestones, prototypes, burn-down charts, deliverables. |
| **2. Complexity** | Follows predictable physical laws; standardized repetitive components. | Per dollar spent, software contains far more discrete states, branching paths, and interactions. | PM must enforce modular architecture, formal specifications, code reviews, automated testing. |
| **3. Conformity** | Governed by immutable laws of physics and material science. | Software must conform to inconsistent human institutions, legacy DBs, tax laws, user whims. | PM must invest heavily in requirements elicitation, domain modeling, stakeholder validation. |
| **4. Flexibility** | Physical structures are hard to modify once built. | Easy to edit in text files, so clients constantly demand late changes. | **Flexibility is a trap!** Demands strict Change Control & configuration management to stop scope creep. |

#### Exam Traps
- **Treating Flexibility as purely an advantage:** In Hughes & Cotterell, flexibility is a **major management challenge** causing scope creep and architectural decay.
- **Confusing routine operations with a project:** "Running weekly payroll" is operational; "Building and deploying a new automated payroll system by Dec 2026" is a project.
- **Confusing coding with project management:** PM plans, estimates, schedules, manages risks, communicates, and coordinates rather than coding solo.
- **Forgetting Conformity:** Always remember **ICCF** (*Invisibility, Complexity, Conformity, Flexibility*).

#### 5 High-Frequency NUST Exam Questions & Marking Guides (Lecture 1)
1. **Define 'Project' and 'Software Project Management', and explain 4 distinguishing characteristics separating a project from routine work. [10 Marks]** -> Unique non-routine deliverable; defined start/end (temporary); multi-disciplinary interdependence; strict resource/budget/time constraints.
2. **Discuss 4 fundamental ways software projects differ from ordinary physical projects and explain the management challenge of each. [12 Marks]** -> Invisibility, Complexity, Conformity, Flexibility (ICCF) + exact PM challenges.
3. **Describe the 3 main stages of activities covered by SPM (Feasibility, Planning, Execution/Control) and how they interact. [9 Marks]** -> Feasibility (technical/economic/operational) -> Planning (scope/WBS/effort/schedule/risk) -> Execution, Monitoring & Control (closed-loop feedback cycle until closure).
4. **Outline core roles and responsibilities of a Software Project Manager. [9 Marks]** -> Scope & requirements governance; estimation & scheduling; resource & team leadership; risk & quality assurance; stakeholder communication & reporting.
5. **Explain the Triple Constraint (Iron Triangle) and illustrate how a change in one constraint impacts the others. [10 Marks]** -> Scope, Time, Cost coupled around Quality; expanding Scope requires extending Time or increasing Cost (noting **Brooks's Law**: adding people to a late software project makes it later); cutting Time forces descoping or quality collapse.

**Curated Academic Resources:**
- Hughes & Cotterell (5th Ed.) PDF: `https://dl.icdst.org/pdfs/files3/310c72a377ea5290e8a5d00a7517c909.pdf`
- Hughes & Cotterell (2nd Ed.) PDF: `https://www.kornev-online.net/itil/mcgraw.hill.software_project_management_2nd_edition.pdf`
- BRIDGE Process Models & Project Failure paper: `https://www.researchgate.net/publication/294428517_Identifying_the_Reasons_for_Software_Project_Failure_and_Some_of_their_Proposed_Remedial_through_BRIDGE_Process_Models`

---

### 3.3 `SCS_2211_Cost_Benefit_Analysis_Study_Guide.docx`
- **File:** `SCS_2211_Cost_Benefit_Analysis_Study_Guide.docx` (`e1c1708b0129...`)
- **Lecturer:** Mr Bhuru | **Venue:** SLT2 | **Logged:** Tue, Oct 13, 2026

#### Project Failure & Standish Group CHAOS Taxonomy
1. **Successful:** On time, on budget, with all specified features and functions.
2. **Challenged:** Completed and operational, but over budget, over time estimate, and/or fewer features than specified.
3. **Impaired / Failed:** Cancelled before delivery, or delivered and never used.
- **4 Dimensions of Failure:** Fails user/business requirements; severe cost overruns exceeding lifetime benefits; missed market/regulatory deadlines; catastrophic production quality/reliability defects.
- **Root Causes:** Incomplete/changing requirements (scope creep), lack of executive/user involvement, unrealistic schedules & optimistic estimates, poor risk management, inadequate WBS, technical incompetence / poor tech selection, gold-plating.

#### Costs & Benefits Classification
- **Costs:**
  1. *Development / Direct Costs:* Developer salaries, workstations, IDE licenses.
  2. *Setup / Conversion Costs:* Data migration, parallel running, initial training.
  3. *Operational / Maintenance Costs:* Cloud/server hosting, ongoing support, annual licenses.
- **Benefits:**
  1. *Direct Benefits:* Immediate measurable cash savings or revenue (e.g., saving $15k/yr in stationery/overtime).
  2. *Assessable Indirect Benefits:* Secondary efficiency gains estimable in money (e.g., 40% fewer errors saving 10 hrs/wk rework).
  3. *Intangible Benefits:* Hard to monetize accurately (brand image, customer satisfaction, morale).

#### CBA Quantitative Evaluation Metrics

| Metric | Formula | Decision Rule | Key Exam Limitation |
| :--- | :--- | :--- | :--- |
| **Net Profit** | $\text{Total Benefits} - \text{Total Costs}$ | Accept if $> 0$ | Ignores size of initial outlay AND timing of cash flows (time value of money). |
| **Payback Period** | $\text{Year before recovery} + \frac{\text{Unrecovered Cost}}{\text{Inflow in recovery year}}$ | Prefer shorter payback | Ignores all cash flows AFTER breakeven date AND ignores time value of money. |
| **ROI / ARR** | $\left(\frac{\text{Average Annual Profit}}{\text{Total Investment}}\right) \times 100\%$ | Accept if $>$ target / bank rate | Uses simple averages; ignores exact timing and compounding discount rates. |
| **Net Present Value (NPV)** | $\sum_{t=1}^{n} \frac{\text{Net Cash Flow}_t}{(1+r)^t} - \text{Initial Cost}_0$ | Accept if $> 0$; pick highest NPV | Sensitive to choice of discount rate $r$; doesn't express relative scale of outlay. |
| **IRR** | Discount rate $r$ where $\text{NPV} = 0$ | Accept if $\text{IRR} > \text{hurdle rate}$ | Assumes intermediate cash flows are reinvested at IRR; can yield multiple roots if cash flows flip signs. |

#### Worked 15-Mark Exam Problem: Project Alpha vs. Project Beta
- **Parameters:** 3-year life, **10% discount rate** (Year 1 = `0.9091`, Year 2 = `0.8264`, Year 3 = `0.7513`). Initial Cost (Year 0) = `$100,000` for both.
  - **Project Alpha inflows:** `$50,000` (Yr 1), `$50,000` (Yr 2), `$30,000` (Yr 3)
  - **Project Beta inflows:** `$10,000` (Yr 1), `$30,000` (Yr 2), `$100,000` (Yr 3)
- **Calculations:**
  1. **Net Profit:** Alpha = $(50k + 50k + 30k) - 100k = \mathbf{\$30,000}$ | Beta = $(10k + 30k + 100k) - 100k = \mathbf{\$40,000}$
  2. **Payback Period:** Alpha = $50k + 50k = 100k$ -> **2.0 years** | Beta = $10k + 30k = 40k$ by Yr 2, $60k$ left out of $100k$ in Yr 3 -> $2 + (60k/100k) = \mathbf{2.6\text{ years}}$
  3. **ROI:** Alpha Avg Profit = $30k/3 = 10k \Rightarrow \mathbf{10\%}$ | Beta Avg Profit = $40k/3 = 13.33k \Rightarrow \mathbf{13.33\%}$
  4. **NPV (at 10%):**
     - Alpha PV = $50k(0.9091) + 50k(0.8264) + 30k(0.7513) = 45,455 + 41,320 + 22,539 = \$109,314 \Rightarrow \text{NPV}_{\text{Alpha}} = \mathbf{+\$9,314}$
     - Beta PV = $10k(0.9091) + 30k(0.8264) + 100k(0.7513) = 9,091 + 24,792 + 75,130 = \$109,013 \Rightarrow \text{NPV}_{\text{Beta}} = \mathbf{+\$9,013}$
- **Decision:** Although Beta has higher raw Net Profit ($40k vs $30k) and ROI (13.33% vs 10%), **select Project Alpha** because it has a **higher NPV ($9,314 vs $9,013)** and a **faster Payback Period (2.0 yrs vs 2.6 yrs)** due to earlier cash inflows.

#### Exam Traps (CBA)
- **Year 0 Discount Factor:** Always $1/(1+r)^0 = 1.0000$ (occurs today — never divide Year 0 by $(1+r)$!).
- **Ranking by Net Profit alone:** Always make final financial recommendation using **NPV**.
- **ROI Formula:** Explicitly state $\text{ROI} = (\text{Average Annual Profit} / \text{Total Investment}) \times 100\%$.
- **Strategic Fit:** Regulatory compliance, cybersecurity, or strategic platform enablement may justify a lower-NPV project.

**Curated Academic Resources:**
- Capital Budgeting Comparison Paper: `https://www.researchgate.net/publication/373513794_Comparison_of_capital_budgeting_methods_NPV_IRR_PAYBACK_PERIOD`

---

### 3.4 `DCAP304_DCAP515_SOFTWARE_PROJECT_MANAGEMENT.pdf` (14-Unit Reference)
- **File:** `DCAP304_DCAP515_SOFTWARE_PROJECT_MANAGEMENT.pdf` (`7f44a53d4dfc...`, 289 pages, Lovely Professional University / Excel Books, Ed. Mandeep Kaur — follows Hughes & Cotterell closely).

**Complete 14-Unit Structure & Key Content:**
1. **Unit 1: Introduction to Software Project Management** — 8 SPM tasks (Problem ID, Definition, Planning, Organization, Resource Allocation, Scheduling, Tracking/Control, Termination); Project properties (Sequence of activities, Unique/Complex/Connected, One Goal, Specified Time, Within Budget, According to Spec); Software Projects vs. Construction, Research, Reengineering, Procurement, Business Implementation projects; Thick methodologies (RUP, SSADM, PRINCE2) vs. Thin methodologies (XP, Scrum, Crystal Clear); Laws of estimation (**Parkinson's Law**, **Brooks' Law**, **Weinberg's Zeroth Law of Reliability**); Milestone Trend Analysis (MTA).
2. **Unit 2: Step-Wise Project Planning** — Scope planning & definition, Verification, Objectives (DISCO framework), Project Infrastructure & Governance, Characteristics, Effort Estimation, Risk Identification (Qualitative: Assumptions Analysis, Checklists, Prompt Lists, Brainstorming, Facilitated Workshops, Interviews).
3. **Unit 3: Work Breakdown Structure (WBS)** — Hierarchical decomposition into activities, tasks, and work packages; 4 uses (Thought process, Architectural design, Planning, Status reporting); Top-down vs. Bottom-up approaches; Six completeness criteria; Joint Project Planning (JPP); Noun-type vs. Verb-type vs. Organizational WBS approaches.
4. **Unit 4: Programme Management & Project Evaluation** — Programme management ("The Golden Thread"), Resource allocation across programmes, Technical assessment, Cost-Benefit Analysis, Risk evaluation.
5. **Unit 5: Project Approach & Process Models** — Technical plans & documentation; Choice of Process Models: Waterfall, V-Process Model, Spiral Model, Prototyping, Incremental Delivery.
6. **Unit 6: Effort Estimation** — Why estimation is called a "black art"; 3 phases (Initial SWAG, Tracking Estimate-to-Quantity Factor / EQF, Using EQF to manage project concerns); **Albrecht Function Point Analysis (FPA)**:
   - 5 Components (`EI` External Inputs, `EO` External Outputs, `EQ` External Inquiries, `ILF` Internal Logical Files, `EIF` External Interface Files) weighted by Simple / Average / Complex:
     - Inputs (A): 3 / 4 / 6
     - Outputs (B): 4 / 5 / 7
     - Inquiries (C): 3 / 4 / 6
     - External / Permanent Files (D): 7 / 10 / 15
     - Internal / Temporary Files (E): 5 / 7 / 10
   - $\text{UFC (UAF)} = \text{Weighted Sum}$; **14 General System Characteristics (GSCs)** rated $0\text{–}5$; $\text{FP} = \text{UAF} \times \text{VAF}$ (Rule of thumb noted: $1\text{ FP} \approx 2\text{ days}$).
   - **Mark II FPA (Symons, ISO/IEC 20968)**; **COCOMO (Barry Boehm)**: Basic, Intermediate, Detailed levels; equation $\text{Effort} = c \times \text{Size}^k$ (person-months, KDSI); 3 Modes: *Organic* (small, experienced, flexible reqs), *Semi-detached* (medium, mixed experience/reqs), *Embedded* (tight hardware/software/operational constraints).
7. **Unit 7: Activity Planning** — Aim of activity planning, Schedule inputs, Scheduling tools (Action plans, Gantt charts, Network Analysis), Project review.
8. **Unit 8: Network Planning Model** — Precedence Diagramming Method (PDM) / AOA; 4 Dependencies (*FS* Finish-to-Start, *SS*, *FF*, *SF*); 4 Constraints (Technical, Management, Interproject, Date); Lead & Lag times; Forward Pass (**ES, EF**) and Backward Pass (**LS, LF**); **Total Slack / Float** vs. **Free Slack**; Critical Path = zero-slack / longest duration path; Schedule Compression (**Crashing** = adding resources/cost vs. **Fast-Tracking** = running sequential tasks in parallel, increasing risk); Management Reserve.
9. **Unit 9: CPM / PERT & Critical Chain (CCPM)** — 6-step CPM/PERT network framework; PERT probabilistic 3-point estimation ($a$ optimistic, $m$ most likely, $b$ pessimistic); **Critical Chain Project Management (CCPM)**: resource-constrained path, eliminating student syndrome/multitasking padding, replacing with **Project Buffers**, **Feeding Buffers**, and **Resource Buffers** (triggered by 1st-third / middle-third / final-third buffer penetration).
10. **Unit 10: Risk Management** — Qualitative & Quantitative techniques (Decision Trees, Influence Diagrams, Monte Carlo Simulation); Risk categories & Prompt Lists (External, Financial, Activity, Technological, Human Resources); 7-step continuous cycle (Establish context, Identify, Analyze, Evaluate, Treat, Monitor/Review, Communicate); Schedule Risk Assessment & PERT; Risk Exposure ($P \times \text{Impact}$); Metrics for personnel shortfall & schedule risks.
11. **Unit 11: Resource Allocation** — Identifying people/equipment requirements, Resource Leveling / Smoothing, Resource Schedule & Cost Schedule, 4 stages of resource scheduling.
12. **Unit 12: Monitoring & Control** — Creating reporting frameworks, Data collection, Slip charts & Timeline/Progress reports, Cost Monitoring / Variances (EVM), Change Control & Metadata, Status & Problem Management meetings.
13. **Unit 13: Software Quality** — Product vs. Process Quality Management; **ISO 9126-1 Quality Model** (6 characteristics: *Functionality, Reliability, Usability, Efficiency, Maintainability, Portability*); Software Measures & Metrics; External Standards (ISO 9001, CMM/SEI).
14. **Unit 14: Small Projects** — Managing small projects without excessive overhead, Common problems with student projects, Essential contents of a small project plan.

---

### 3.5 `Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf` (Part 4: Software Management)
- **File:** `Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf` (`1c454dd4b7bb...`)
- **Chapters 22–25 Key Points:**
  - **Ch 22 (Project Management):** Software is intangible; Risk management (identifying probability & consequences, planning avoidance/mitigation/contingency); People motivation (interaction, peer/management recognition, personal development); Group size, structure, cohesion, and communication channels.
  - **Ch 23 (Project Planning):** Pricing vs. cost (pricing-to-win); Plan-driven development vs. Agile planning (XP planning game adjusts scope rather than delaying increment); Milestones (predictable progress checkpoints) vs. Deliverables (customer work products); Bar/Gantt charts; Experience-based & Algorithmic estimation (COCOMO II).
  - **Ch 24 (Quality Management):** Ensuring low defect density and adherence to standards (ISO 9001 quality manual); Process vs. Product quality; Reviews & Program Inspections (peer reviews detecting errors/omissions systematically); Software Measurement & Metrics.
  - **Ch 25 (Configuration Management):** Version control, System building, Change management, Release management.

---

### 3.6 Additional Reference (`SSPM.pdf` Screenshot)
- **Source:** `Screenshot_20261019_040718_Drive.jpg` (`a15f726eeda0...` in `~/Zwanane/library/`)
- **Book Shown:** *Project Management for Small Projects* by Sandra F. Rowe (Chapter 4: *Pre-Project Activities* — Project Request, Business Need, Strategic Objective alignment).

---

## Section 4: Consolidated Formulas, Worked Examples & Exam Blueprint

### 4.1 Complete Formula Sheet (Exam Ready)

#### A. Cost-Benefit Analysis (CBA)
- $\text{Net Profit} = \sum \text{Benefits} - \sum \text{Costs}$
- $\text{Payback Period} = (\text{Year before full recovery}) + \frac{\text{Unrecovered Cost at start of recovery year}}{\text{Cash Inflow during recovery year}}$
- $\text{ROI} = \frac{\text{Average Annual Profit}}{\text{Total Investment}} \times 100\%$, where $\text{Average Annual Profit} = \frac{\text{Net Profit}}{\text{Number of Years}}$
- $\text{NPV} = \sum_{t=1}^{n} \frac{\text{Net Cash Flow}_t}{(1+r)^t} - \text{Initial Outlay}_0$ (Year 0 discount factor $= 1.0000$)
- $\text{IRR} = r$ such that $\text{NPV}(r) = 0$

#### B. Earned Value Management (EVM)
- **Core Inputs:** $\text{PV}$ (Planned Value), $\text{EV}$ (Earned Value), $\text{AC}$ (Actual Cost), $\text{BAC}$ (Budget at Completion)
- **Schedule Variance:** $\text{SV} = \text{EV} - \text{PV}$ ($< 0$ behind schedule; $> 0$ ahead)
- **Cost Variance:** $\text{CV} = \text{EV} - \text{AC}$ ($< 0$ over budget; $> 0$ under budget)
- **Schedule Performance Index:** $\text{SPI} = \frac{\text{EV}}{\text{PV}}$ ($< 1$ behind; $> 1$ ahead)
- **Cost Performance Index:** $\text{CPI} = \frac{\text{EV}}{\text{AC}}$ ($< 1$ over budget / losing value; $> 1$ efficient)
- **Estimate at Completion ($\text{EAC}$):**
  - *Typical variance (default if unspecified):* $\text{EAC} = \frac{\text{BAC}}{\text{CPI}}$
  - *Atypical (one-off) variance:* $\text{EAC} = \text{AC} + (\text{BAC} - \text{EV})$
  - *Combined CPI & SPI variance:* $\text{EAC} = \text{AC} + \frac{\text{BAC} - \text{EV}}{\text{CPI} \times \text{SPI}}$
  - *Bottom-up re-estimate:* $\text{EAC} = \text{AC} + \text{New ETC}$
- **Estimate to Complete:** $\text{ETC} = \text{EAC} - \text{AC}$
- **Variance at Completion:** $\text{VAC} = \text{BAC} - \text{EAC}$ ($< 0$ projected overrun)
- **Estimated Total Duration:** $\text{Estimated Duration} = \frac{\text{Planned Duration}}{\text{SPI}}$
- **To-Complete Performance Index:** $\text{TCPI} = \frac{\text{BAC} - \text{EV}}{\text{BAC} - \text{AC}}$ (efficiency required on remaining work to hit original BAC)

#### C. PERT / CPM Scheduling
- **PERT Expected Task Duration:** $t_e = \frac{a + 4m + b}{6}$ ($a$ = Optimistic, $m$ = Most Likely, $b$ = Pessimistic)
- **Task Standard Deviation & Variance:** $\sigma = \frac{b - a}{6}$, $\sigma^2 = \left(\frac{b - a}{6}\right)^2$
- **Path Standard Deviation:** $\sigma_{\text{path}} = \sqrt{\sum \sigma_i^2}$ (sum of variances along the critical path)
- **Critical Path Slack / Float:** $\text{Float} = \text{LS} - \text{ES} = \text{LF} - \text{EF}$ (Critical activities have $\text{Float} = 0$)

#### D. Effort Estimation & Risk
- **Function Point Count:** $\text{FP} = \text{UAF} \times \text{VAF}$
- **Basic COCOMO:** $\text{Effort} = c \times (\text{KDSI})^k$ (Person-Months)
- **Risk Exposure:** $\text{RE} = P(\text{Risk}) \times \text{Impact (Loss)}$
- **Defect Density:** $\text{Defects} / \text{KLOC}$ (defects per 1,000 lines of code)

---

### 4.2 Ishikawa (Fishbone) Diagram — Why Software Projects Fail (6Ms)
Mr Bhuru's Exam Requirement: *"Keep fish simple — have at least 3 causes for each branch."*
- **Top Branches:**
  1. **Technology:** Immature tools/frameworks, incompatible legacy integration, rapid obsolescence / wrong tech stack.
  2. **Resources:** Insufficient budget, inadequate developer workstations/environments, server/cloud bottlenecks.
  3. **Measurements:** Faulty effort/cost estimation (optimistic SWAG), lack of EVM/progress tracking, missing quality metrics (defect density / test coverage).
- **Bottom Branches:**
  4. **Environment:** Changing market/regulatory laws, organizational politics / lack of executive support, power/connectivity disruptions.
  5. **Methods:** Unclear/changing requirements (scope creep), absence of formal Change Control, inadequate WBS / choosing wrong SDLC model.
  6. **Manpower:** Personnel shortfall / high turnover, skill gaps or inexperience, poor team communication & conflict.

---

### 4.3 Quality Assurance vs. Quality Control & Exam Blueprint
- **Quality vs. Grade:** *Quality* = meets requirements & fit for use; *Grade* = category/rank of feature richness (low grade can still be high quality if bug-free and fit for use; high grade with bugs is low quality).
- **QA (Proactive):** Prevents defects through process audits, standards (ISO 9001, ISO 9126), reviews, and planning.
- **QC (Reactive):** Detects and corrects defects in deliverables via test pyramid (unit, integration, system, acceptance testing) and inspections.
- **Cost of Quality:** Cost of Conformance (Prevention + Appraisal) vs. Cost of Non-Conformance (Rework, technical debt, reputation loss, warranty failures).
- **Mr Bhuru's Exam & Test Structure:**
  - Exam tiers follow the course outline from easy to hard: `1 Easy`, `1 Moderate`, `1 Hard` (Quality + EVM calculations), `1 Very Hard`, `1 Impossible`.
  - Core focus areas: Software Methodologies, WBS, CBA (Net Profit, Payback, ROI, NPV), CPM/PERT, Risk Management, EVM (SV, CV, SPI, CPI, EAC, ETC, VAC, TCPI), Quality Control & Ishikawa Diagram.

