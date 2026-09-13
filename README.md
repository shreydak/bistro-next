# Bistro Next

**A contextual personalisation concept for making the next food-ordering decision easier — without assuming the customer wants the same thing again.**

> **Remember, don't assume.**

[View Live Case Study](https://bistro-next.netlify.app/)

---

## Overview

Bistro Next is an independent UX/product concept exploring how **Bistro by Blinkit** could make repeat ordering more relevant for returning customers.

Instead of treating a previous order as a permanent preference, the concept combines useful signals from previous experiences with what matters for the customer's **current order**.

The goal is not simply to make reordering faster. It is to help returning customers make their **next food decision with greater confidence and less unnecessary decision effort**.

---

## The Challenge

> **You ordered something once. How might we create a better reason and easier path for that customer to order again?**

**Business objective:** Increase repeat ordering and order frequency.

Rather than starting with:

> "How can we improve the reorder button?"

the project started by investigating:

- Who should return?
- Why would they return?
- What changes between one order and the next?
- What should the product remember?
- When does previous behaviour help?
- When can previous behaviour become irrelevant?

---

## Target User

The initial target group is:

**Returning college students living in hostels or PGs who already use online food delivery.**

### Job to be done

> When I need to order food again, help me confidently find something that fits this occasion without making me start my decision from zero.

The next order can depend on context such as:

- urgency
- budget
- mood
- who the customer is ordering with
- whether they want something familiar or something new
- suitability for the current occasion

---

## Core Insight

### Past experience creates confidence.  
### Current context determines relevance.

A previous order contains potentially useful signals, but it was also made under a particular context.

That led to the working insight:

> **Past orders remember what users bought, not necessarily what will be relevant next.**

---

## Problem Diagnosis

Returning Bistro customers are trying to make a confident next food choice, but the experience can become harder when they must interpret many options without enough help connecting what worked previously with what matters in their current situation.

### How Might We

> **How might Bistro use relevant signals from a customer's previous experiences to help them make a more confident next choice, while adapting to their current context rather than simply repeating the past?**

---

## The Product Direction

The project focuses on:

> **Helping returning Bistro customers carry forward what worked from previous experiences while adapting it to what matters in their current ordering context.**

The experience follows a simple model:

```text
Past signals
     +
Current intent
     ↓
Relevant options
     ↓
Explanation
     ↓
Customer decides
```

Personalisation assists the decision.

It does not make the decision for the customer.

---

# Bistro Next

**Bistro Next** is the primary proactive personalisation experience.

When a returning customer opens Bistro, they can indicate what matters for the current order using lightweight intent signals such as:

- Quick
- Budget
- Familiar
- Something new

Bistro can then combine that current intent with relevant signals from previous activity to provide a more useful starting point.

Rather than showing only:

> "Recommended for you"

the concept also explains **why** an option may be relevant.

Examples of signal types include:

**Current intent**  
What the customer explicitly selected for this order.

**Observed history**  
Useful signals from previous Bistro activity.

**Explicit product/account state**  
For example, the customer's active Veg mode.

This makes personalisation more understandable and keeps the customer in control.

---

# Bistro Assist

**Bistro Assist** is the secondary recovery experience.

Bistro Next helps proactively.

Bistro Assist helps when the customer still appears to be struggling with the decision.

Instead of automatically opening a chatbot after an arbitrary amount of time, the concept considers potential decision-struggle signals such as repeated browsing, back navigation, search changes or comparison behaviour.

Bistro then **offers** assistance rather than forcing it.

> **Still deciding? I can help narrow things down.**

If accepted, Bistro Assist uses information already provided for the current order and asks only for additional context when useful.

The principle is:

> **AI narrows. AI explains. The customer decides.**

---

## Product Principles

**1. Remember, don't assume.**  
Previous behaviour is evidence, not identity.

**2. Adapt, don't blindly repeat.**  
What worked before may not fit the current occasion.

**3. Support repetition and discovery.**  
Sometimes customers want the familiar. Sometimes they want something new.

**4. Preserve user control.**  
Personalisation should support decisions rather than silently make them.

**5. Optimise for decision confidence.**  
The objective is not merely reducing clicks.

---

## Value Exchange

The customer allows Bistro to learn from previous interactions and, where appropriate, provides current intent.

In return, Bistro uses that information to make the next ordering decision more relevant and easier without treating past behaviour as a permanent preference.

```text
Customer provides
Behavioural signals + current intent
              ↓
Bistro provides
Relevant continuity + reduced uncertainty
              ↓
Customer retains
Final decision authority
```

---

## Research Note

The discovery exercise used **five simulated user interviews** because real participants were unavailable during this learning exercise.

These interviews were used for:

- practising research synthesis
- identifying behavioural patterns
- generating hypotheses
- developing product reasoning

They **must not be interpreted as validated user research or evidence of real customer behaviour**.

The resulting insights and product hypotheses require validation with real Bistro or food-delivery users.

---

## Hypothesis

> **If Bistro helps returning customers reach a relevant choice with greater confidence and less unnecessary decision effort, then they will be more likely to complete another order because deciding what works for them becomes easier.**

This remains a hypothesis, not a proven causal relationship.

---

## Measuring Success

### Business outcome

Primary metric:

**Repeat Order Rate among returning customers**

Supporting business signals could include:

- return-session order conversion
- orders per customer over time

### Prototype-level measures

Before measuring long-term business impact, the concept should be tested for:

- decision confidence
- perceived relevance
- decision effort
- perceived control

---

## Customer & Business Value

| Customer value | Potential business value |
|---|---|
| Less decision uncertainty | Higher return-session conversion |
| More relevant starting point | Increased repeat ordering |
| Less unnecessary comparison | Increased order frequency |
| Freedom to repeat or explore | Better use of first-party behavioural signals |
| Greater control over personalisation | Stronger returning-customer experience |

Business outcomes above are hypotheses to validate, not claimed results.

---

## What the Prototype Does Not Prove

A working prototype is not evidence that the product direction will improve repeat ordering.

Important limitations include:

- simulated rather than real user interviews
- unvalidated decision-struggle signals
- unknown recommendation/data feasibility
- untested comfort with contextual personalisation
- no demonstrated causal impact on repeat-order behaviour
- no production recommendation or ML system

### Next validation steps

```text
Real user interviews
        ↓
Bistro Next usability testing
        ↓
Bistro Assist trigger testing
        ↓
Data and technical feasibility
        ↓
Controlled product experiment
        ↓
Repeat-order measurement
```

---

## Prototype Scope

The prototype intentionally focuses on the diagnosed decision problem.

It includes:

- returning-customer experience
- current-intent selection
- Bistro Next recommendations
- explanation of personalisation
- simulated decision struggle
- optional Bistro Assist
- contextual narrowing of options

It intentionally does **not** attempt to rebuild the entire Bistro product, payment system, authentication, backend infrastructure or production recommendation engine.

The prototype uses predefined data and interaction logic to test the **product experience**, not the underlying ML system.

The demo experience is vegetarian-only, with Veg mode active throughout.

---

## Tech Stack

The prototype is intentionally lightweight:

- Semantic HTML
- CSS
- Vanilla JavaScript
- Node.js build scripts
- Netlify
- Git & GitHub

The implementation prioritises a working, responsive product prototype over unnecessary technical complexity.

---

## Run Locally

### Requirements

- Node.js 20+
- Node.js 22 recommended
- npm 10+

Clone the repository:

```bash
git clone git@github.com:shreydak/bistro-next.git
cd bistro-next
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:4173
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Deployment

The `main` branch is connected to Netlify through continuous deployment.

```text
Local development
      ↓
Git commit
      ↓
GitHub — main
      ↓
Netlify build
      ↓
Production
```

**Live project:**  
https://bistro-next.netlify.app/

---

## Independent Project Disclaimer

This is an **independent UX/product concept created as a learning exercise**.

It is not affiliated with, commissioned by, or endorsed by Bistro or Blinkit.

Product names and visual references are used only to contextualise the redesign exercise.

---

## Closing Thought

> **The goal isn't to make Bistro choose for you.  
> It's to make your next choice easier to make.**