# Authentication Flow Documentation

## Introduction

This document explains how the login and dashboard authentication works in my Next.js project. I am a beginner, so I have tried to write each step as clearly as possible. This covers:

- How the user logs in with a username and password
- How the session is managed
- How the protected dashboard page works
- How the user logs out

I also added the link to a YouTube video I used to learn and implement this flow.

---

## Project Structure

Kraftedx/ └── document/ └── authentication-flow.md └── public/ └── images/ ├── Authentication.jpg └── interactive-background.png └── src/ ├── app/ │ ├── auth/ │ │ └── login/page.js │ ├── dashboard/page.js │ └── interactive/page.js └── component/ └── SessionWrapper.js └── src/pages/api/ └── auth/ └── [...nextauth]/route.js



- **login/page.js**: The login form where the user enters credentials.  
- **dashboard/page.js**: The dashboard page that only logged‑in users can see.  
- **[...nextauth]/route.js**: The NextAuth API route with the `CredentialsProvider`.  
- **SessionWrapper.js**: Wraps the entire app so we can use `useSession()` everywhere.  
- **interactive/page.js**: The page with the interactive background (not covered here but in separate docs).

---

## 1. User Visits Login Page

- **URL**: `/auth/login`  
- **File**: `src/app/auth/login/page.js`  
- **What happens**:  
  - The user sees two input boxes: **Username or Email** and **Password**.  
  - There is a **Sign In** button below the inputs.

---

## 2. User Enters Credentials

- The user types their username (for example, `admin`) and password (`password123`).  
- When the user clicks **Sign In**, the page calls:

  ```js
  signIn("credentials", {
    redirect: false,
    username: identifier,
    password
  });

3. NextAuth Checks Credentials

File: src/pages/api/auth/[...nextauth]/route.js

Provider: CredentialsProvider

authorize() function:

  1. Gets the username and password.

  2. Checks if they match our demo user (admin / password123).

  3. Returns a user object ({ id, name, email }) if correct.

  4. Returns null if incorrect (causes an error message).

4. Successful Login → Redirect to Dashboard

If credentials are valid:

   NextAuth issues a JSON Web Token (JWT).

   The browser stores the JWT in an HTTP‑only cookie.

   The code calls router.push("/dashboard").

5. Session Management

File: src/app/component/SessionWrapper.js

Wraps the app in <SessionProvider>.

Anywhere in the app we can use:

      const { data: session, status } = useSession();

status can be:

"loading": still checking session

"authenticated": user is logged in

"unauthenticated": no valid session

6. Protected Dashboard Page

URL: /dashboard

File: src/app/dashboard/page.js

On load:

  1. If status === "unauthenticated", redirect to /auth/login.

  2. If status === "loading", show a Loading… message.

  3. If status === "authenticated", show:


   Welcome, <user name or email>!
   [Sign Out button]

7. Sign Out

When the user clicks Sign Out:

  1. The code calls signOut({ redirect: false }).

  2. NextAuth clears the session cookie.

  3. We then router.push("/auth/login"), sending the user back to the login page.


Diagrams

Authentication Flow Diagram:- ![Authentication Flow Diagram](/image/Authentication.jpg)

If image link not work then follow the steps:

        public -> image -> Authentication.jpg


(Note: Diagrams are hand‑drawn and scanned to show my understanding.)

References

I followed this YouTube tutorial to learn how to set up NextAuth with credentials and custom pages:

YouTube Video: https://youtu.be/2JnEq3ZmLH0?si=jEL5CxWmpGDeKS-R



***End OF Documentation***
