# RESTful API Activity - [John Harold Revilloza]

## Best Practices Implementation

**1. Environment Variables:**

- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: To separate configuration from code. This allows you to switch between environments without modifying the source code.

  **2. Resource Modeling:**

- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer: Pluralization is a RESTful standard that improves predictability. It clearly distinguishes between a collection (/dishes) and a specific resource (/dishes/1).

  **3. Status Codes:**

- When do we use `201 Created` vs `200 OK`?
- Answer: Use 201 Created specifically after a successful resource creation (POST). Use 200 OK for successful requests that don't create new data, like fetching (GET) or updating (PUT/PATCH).

- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: Precision. A 404 explicitly tells the client the specific resource doesn't exist. An empty array can be ambiguous, implying the resource was found but has no data.

**4. Testing:**

- (Paste a screenshot of a successful GET request here)

<img width="1366" height="738" alt="Screenshot 2026-01-28 154945" src="https://github.com/user-attachments/assets/bee58140-4171-4816-87df-cde5592203a1" />

**1.Why did I choose to Embed Reviews?**
-Answer: I embedded reviews because they are only relevant to a specific dish and are always fetched together. 
This "one-to-few" model optimizes performance by retrieving all data in a single query and prevents orphaned data.

**2.Why did I choose to Reference the Chef?**
Answer: I referenced the chef to maintain a "single source of truth." This avoids data redundancy,
allowing me to update a chef's info in one place rather than in every dish they create, keeping the database clean and scalable


