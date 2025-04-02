# 🛠 API Testing with Jest, Supertest & PostgreSQL

This project contains API integration tests using **Jest**, **Supertest**, and **PostgreSQL**.

---

## 📌 Features

- ✅ API testing with **Jest** & **Supertest**
- ✅ Database integration testing with **PostgreSQL**
- ✅ Uses **ts-jest** for TypeScript support
- ✅ Automatic test data cleanup after tests
- ✅ Configurable via `.env` file

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder with the following content:

```ini
API_URL=http://localhost:3000
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>
DB_USER=<DB_USER>
DB_PASS=<DB_PASSWORD>
DB_HOST=<DB_HOST>
DB_PORT=<DB_PORT>
DB_NAME=<DB_NAME>

TEST_USER_EMAIL=user@example.com
TEST_USER_PASSWORD=userpassword

TEST_ADMIN_EMAIL=admin@example.com
TEST_ADMIN_PASSWORD=adminpassword
```

---

## 🔧 Project Structure

```
├── src/
│   ├── tests/
│   │   ├── user.test.ts    # API integration tests
│   ├── utils/
│   │   ├── authHelper.ts   # Authentication helper
│   │   ├── apiClient.ts    # Setup API roles authentications
│   ├── config.ts           # API configuration
│   ├── db.ts               # Database connection
│   ├── setupTests.ts       # Setup Authentication tokens
│── .env.example            # Example environment variables
│── jest.config.ts          # Jest configuration
│── tsconfig.json           # TypeScript configuration
│── package.json            # Dependencies & scripts
│── README.md               # Documentation
```

---

## 🛠 Running Tests

To run the tests, use:

```sh
npm test
```

If you encounter issues with imports, make sure `esModuleInterop` is set to `true` in `tsconfig.json`.

---

## 📂 Jest Configuration (`jest.config.ts`)

```ts
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
```

---

## 📌 Technologies Used

- **Jest** – JavaScript testing framework
- **Supertest** – HTTP request testing
- **PostgreSQL** – Database
- **TypeScript** – Static typing
- **ts-jest** – Jest TypeScript support

---
