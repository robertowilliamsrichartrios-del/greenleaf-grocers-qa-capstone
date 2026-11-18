markdown
# GreenLeaf Grocers – End-to-End QA Portfolio Project

## 📌 Project Overview
This repository showcases a complete Quality Assurance lifecycle for the **GreenLeaf Grocers** e-commerce platform, covering requirement analysis, manual test design, API validation, SQL backend auditing, and UI test automation.

## 🛠️ Tech Stack & Tools
* **UI Automation:** Playwright, TypeScript, Node.js
* **API Testing:** Postman (HTTP `GET` / `POST` requests & status validation)
* **Test Management & Defect Tracking:** Jira Cloud, Zephyr
* **Database Auditing:** SQLite, SQL (`SELECT`, `JOIN`, `WHERE`, `ORDER BY`)
* **Mobile & Exploratory Testing:** Chrome DevTools (`390x844` mobile viewport emulation)

## 🧪 Test Coverage & Key Findings
* **Traceable Test Cases (Jira & Zephyr):** Authored structured test cases from user stories covering guest checkout, form validations, and promotional codes.
* **Automated E2E Flows (Playwright):** Automated a 3-step user registration and authentication workflow using resilient `data-testid` selectors and dynamic test data (`Date.now()`).
* **Critical Mobile UI Defect:** Isolated a button overlap bug on mobile viewport (`390x844`) during checkout.
* **Backend API Defect:** Identified and documented an **HTTP 500 Internal Server Error** via direct endpoint testing on `POST /api/promo/validate`.
* **Data Integrity Verification:** Executed SQL queries in SQLite to audit order creation and account balance updates.

## 📁 Repository Structure
* `/tests` – Automated end-to-end Playwright scripts (`.spec.ts`).
* `/api-testing` – Exported Postman collection (`.json`) for endpoint validation.
* `/database-queries` – SQL scripts (`.sql`) used for backend data verification.
* `/docs-and-evidence` – Bug reports with reproduction steps and screenshots.

## ▶️ Setup & Execution Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Run the Playwright test suite:
   ```bash
   npx playwright test
   ```
