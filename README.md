# RESTful API Activity - [Your Name]

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
