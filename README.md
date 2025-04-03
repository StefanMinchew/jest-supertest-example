# 🛠 API Testing with Jest, Supertest & PostgreSQL

This project contains API integration tests using **Jest**, **Supertest**, and **PostgreSQL**.

---

## 📌 Features

- ✅ API testing with **Jest** & **Supertest**
- ✅ Database integration testing with **PostgreSQL**
- ✅ Uses **ts-jest** for TypeScript support
- ✅ Automatic test data cleanup after tests
- ✅ Reuses authentication tokens for faster test runs
- ✅ Configurable via `.env` file

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/StefanMinchew/jest-supertest-example.git
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder with the following content:

```ini
API_URL=http://localhost:3000
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>

TEST_USER_EMAIL=user@example.com
TEST_USER_PASSWORD=userpassword

TEST_ADMIN_EMAIL=admin@example.com
TEST_ADMIN_PASSWORD=adminpassword
```

---

## 🔧 Project Structure

```
├── src/
│   ├── db/
│   │   ├── userDb.ts       # User database queries
│   ├── services/
│   │   ├── UserService.ts  # User service
│   ├── tests/
│   │   ├── user.test.ts    # API integration tests
│   ├── types/
│   │   ├── roles.ts        # Roles types
│   ├── utils/
│   │   ├── apiClient.ts    # Setup API roles
│   │   ├── authHelper.ts   # Authentication helper
│   ├── config.ts           # Configuration
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
