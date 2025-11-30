
# 💰 Money Management App (Hackathon Edition)

A smart personal finance & budgeting system that helps users control daily spending, manage goals, track debts, and build saving habits — built using an **AI-First Development Strategy (React + Firebase)**.

---

## 🚀 Why This Exists

Most budgeting apps tell you how much you *already spent*.
This one tells you:

> “How much can I safely spend **today** while still saving & repaying debts?”

Designed & built in a 24-hour hackathon.

---

# ✨ Features

## 🟩 Core Money System

### ✅ 1. Smart Daily “Safe-to-Spend” Limit
Automatically adjusts budget after subtracting:
- Bills  
- Savings goals  
- Debts  
- Fixed expenses  

---

### ✅ 3. Goal-Based Smart Saving
Example: Jeans worth ₹1600:
- Auto-divides savings across days
- Deducts savings from daily budget
- Updates monthly & daily limit

Logic:
> If user has active loans → loan repayment takes priority.

---

### ✅ 4. Rollover Rewards
Spend less today → tomorrow’s budget increases.

---

### ✅ 5. Dashboard + Pie Charts
Shows:
- Ongoing progress
- Expense breakdown
- Categories
- Goal completion

---

### ✅ 6. Smart Alerts & Notifications
Warns user when:
- Near limit
- Overspending
- Debts due
- Friends owe you money

Includes polite “remind friend” message in 1 tap.

---

### ✅ 7. Monthly Insights + Heatmap
Includes:
- Spending streaks
- Overspending days
- Category breakdown
- Monthly comparison

---

### ✅ 8. Late Fee & Courtesy Tracker
Tracks:
- Who pays late
- Reliability score
- Pending dues

---

## 🧠 Hackathon Strategy (AI-First Development)

We use AI to generate components & backend logic fast.

> AI writes logic. We fix UI, flow & business rules.

---

## 👥 Team Members

| Name | Role |
|------|------|
| Shubham | Tech Lead & AI Prompter |
| Rayyan | Frontend UI Architect |
| Vinay | Product & Pitch Lead |
| Nikhil | Firebase Developer |
| Kanav | QA + Database Tester |

---

## 🔧 Tech Stack

- React (Vite)
- Tailwind CSS
- Firebase Authentication + Firestore
- React Router DOM
- AI Assistance (ChatGPT / Gemini)

---

# 🧩 Project Setup

## 1. Clone repo

```bash
git clone <repository-url>
cd money-management
````

## 2. Install dependencies

```bash
npm install
```

## 3. Start development server

```bash
npm run dev
```

---

# 🔥 Firebase Setup (Required)

Create a Firebase project on **firebase.google.com**

### Create a file:

```
src/firebase.js
```

### Paste config:

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const app = initializeApp(firebaseConfig);
```

---

# 📁 Project Structure

```
src/
  components/
  pages/
  firebase.js
  App.jsx
  main.jsx
```

---

# 🧠 How We Build (Workflow)

We generate code via AI prompts such as:

```
Generate Home, Login & Dashboard pages with routing,
Tailwind styling, Firebase auth for login.
```

Then developers style, debug & integrate.

---

# 🔄 Collaboration Rules

## Create a new branch

```bash
git checkout -b branch-name
```

## Switch branch

```bash
git checkout branch-name
```

## Pull latest main

```bash
git checkout main
git pull origin main
git checkout branch-name
git merge main
```

## Commit & push

```bash
git add .
git commit -m "message"
git push origin branch-name
```

## Create PR → main

---

## 🧿 Contribution Rules

✔️ Allowed

* Create branches
* Pull updates before pushing
* Test before merging

❌ Not allowed

* Commit directly to main
* Force push
* Breaking the build

---

# 🛣️ Roadmap

Upcoming features:

* Group expense sharing
* Auto-categorization
* SMS parsing for bills
* UPI/Bank integration
* Voice budget & insights assistant

---

# 📸 Screenshots

(Add later)

---

# ⭐ License

Open-source for learning and hackathon usage.

---

# 💬 Contact

For issues, contributions or ideas:

> Open a PR or raise an issue in this repo.

---




<h2>Git & Collaboration Rules</h2>
<h3>
1. Create a branch:  git checkout -b branch-name
  <br>
2. Switch branch :  git checkout branch-name
  <br>
3. Pull latest main : git checkout main
                      git pull origin main
                      git checkout 
                      git merge main
  <br>
4. Commit : 
            git add .
            git commit -m "message"
   <br>
5.Push :
           git push origin
<br>
6. Create PR to main
<br>

Contributor Rules : 
<br>
DO: create branches, pull main, test code
<br>
DON’T: commit to main, force push, break flow.
</h3>



Made with ❤️ at a 24-hour hackathon.
