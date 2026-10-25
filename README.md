<div align="center">

# 🏛️ Enterprise NestJS Core Architecture — Modular Services & Pipes
### *Assignment 19 — Scalable Micro-Architecture, Custom Validation Pipes & Vitest Engine*

[![NestJS](https://img.shields.io/badge/Framework-NestJS%2012-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ESM%206-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Testing-Vitest%204-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?style=for-the-badge)](https://oxc-project.github.io/)

<p align="center">
Architectural transition to the <b>NestJS Framework</b>, establishing a scalable inversion-of-control (IoC) backend featuring modular domain segregation, custom data transformation pipes, typed configuration management, and lightning-fast Vitest test suites.
</p>

---

</div>

## 🧩 Architectural Highlights

```
┌────────────────────────────────────────────────────────┐
│                   AppModule (Root)                     │
└───────────┬──────────────┬─────────────┬───────────────┘
            │              │             │
    ┌───────▼──────┐ ┌─────▼──────┐ ┌────▼────────┐
    │  UserModule  │ │ PostModule │ │ ChatModule  │
    └───────┬──────┘ └─────┬──────┘ └────┬────────┘
            │              │             │
            └──────────────┼─────────────┘
                           │
                    ┌──────▼────────┐
                    │ MessageModule │
                    └───────────────┘
```

- **Inversion of Control (IoC)**: Pure dependency injection eliminating tight module couplings.
- **Custom Pipes**: Handcrafted validation and transformation pipes (`MyPipe`) validating queries and DTO bodies prior to controller handling.
- **Strict Configuration Engine**: `ConfigModule.forRoot` dynamically loading typed environment keys with schema validation options.
- **High-Velocity Tooling**: Oxlint for instant AST linting alongside Vitest for unit and end-to-end testing without Jest bottlenecks.

---

## 🗂️ Domain Modules Breakdown

| Module | Core Responsibility | Key Endpoints / Features |
| :--- | :--- | :--- |
| **`UserModule`** | Identity, registration DTOs & query parameter validation | `GET /users` with custom query validation schema |
| **`PostModule`** | Feed creation, interactions, and content services | Post orchestration and service injection |
| **`ChatModule`** | Real-time channel and room controller orchestration | Chat room routing and gateway infrastructure |
| **`MessageModule`**| Direct message payload formatting and handling | Message processing and dispatch |
| **`Common`** | Reusable infrastructure pipes, decorators, and interceptors | Custom `MyPipe` parameter transformation |

---

## 🔬 Testing & Code Quality

This project replaces legacy testing workflows with **Vitest** and **Oxlint**:

```bash
# Run unit test suite
npm run test

# Run interactive watch mode
npm run test:watch

# Execute end-to-end (e2e) tests with Supertest
npm run test:e2e

# Generate comprehensive test coverage report
npm run test:cov

# Run high-performance Oxlint code audit
npm run lint
```

---

## 📁 Source Tree

```bash
Assignment-19/
├── src/
│   ├── chat/                  # Chat module & controller
│   ├── common/
│   │   └── pipes/             # Reusable custom validation & transform pipes
│   ├── message/               # Message handling & delivery services
│   ├── post/                  # Post domain controllers and modules
│   ├── user/
│   │   ├── DTO/               # Data Transfer Objects
│   │   ├── user.controller.ts # Route declarations
│   │   ├── user.module.ts     # Dependency injection graph
│   │   ├── user.service.ts    # Business logic layer
│   │   └── user.validation.ts # Zod/Joi validation schemas
│   ├── app.controller.ts      # Health check controller
│   ├── app.module.ts          # Root dependency injection container
│   ├── app.service.ts         # Base application service
│   └── main.ts                # Application bootstrap entry point
├── test/
│   └── app.e2e-spec.ts        # Vitest end-to-end tests
├── nest-cli.json              # NestJS workspace configuration
├── oxlint.json                # Linter configuration
├── vitest.config.ts           # Vitest unit test configuration
└── vitest.config.e2e.ts       # Vitest e2e configuration
```

---

## 🚀 Execution Instructions

### 1. Installation
```bash
cd Assignment-19
npm install
```

### 2. Configure Environment
Create `config/.env`:
```env
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/nest_app
```

### 3. Launch Development Server
```bash
# Watch mode with auto-rebuild
npm run start:dev

# Production build & run
npm run build
npm run start:prod
```

---

<div align="center">

### 👨‍💻 Architect & Author

<br/>

**Jason Hany**  
*NestJS & Enterprise TypeScript Architect*

[![NestJS Expert](https://img.shields.io/badge/Architecture-Clean%20%26%20Modular-E0234E?style=flat-square)](#)

<sub>Engineered for enterprise modularity, resilient dependency injection, and scalable microservices.</sub>

</div>
