# 🚀 Full-Stack Practice Application

A modern, full-stack web application built for continuous learning and practical implementation of technologies across frontend web development, state management, and robust API backends.

---

## 📌 Project Overview

This repository serves as a practical sandbox to experiment with, build, and master new web technologies and architectural patterns. The project bridges a dynamic client-side single-page application (SPA) with a secure, scalable relational backend.

### 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | [React 19](https://react.dev/) | Declarative, component-based UI library |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) | Predictable, centralized state container with RTK Query |
| **Backend** | [Django](https://www.djangoproject.com/) & [Django REST Framework](https://www.django-rest-framework.org/) | Python web framework & RESTful API builder |
| **Authentication** | JWT (JSON Web Tokens) | Secure stateless token-based auth |
| **Database** | PostgreSQL / SQLite | Relational database storage |
| **Styling** | Modern CSS / Styled Components | Responsive UI design |

---

## ✨ Key Features & Learnings

### 💻 Frontend (React + Redux)
- **Modular Component Design**: Clean layout architectures using reusable functional components and custom hooks.
- **Global State Management**: Redux Toolkit slices for predictable mutations and simplified reducer logic.
- **Data Fetching & Caching**: RTK Query (or Axios integration) for handling asynchronous API requests, loading states, and automatic cache invalidation.
- **Client-Side Routing**: `react-router-dom` v6 with protected routes and navigation guards.

### ⚙️ Backend (Django + DRF)
- **RESTful API Architecture**: Decoupled endpoints leveraging DRF ViewSets and Serializers.
- **User Authentication & Permissions**: JWT implementation (`djangorestframework-simplejwt`) for user registration, login, and access control.
- **Database Modeling**: Relational ORM models with custom managers, query optimization, and migrations.
- **CORS & Middleware Setup**: Cross-Origin Resource Sharing configured for secure frontend-backend communication.

---

## 🏗 Architecture & Project Structure

```text
root/
├── backend/                  # Django project directory
│   ├── manage.py
│   ├── config/               # Settings and core URL routing
│   └── api/                  # Main application logic
│       ├── models.py         # Database ORM schema
│       ├── views.py          # DRF API ViewSets
│       ├── serializers.py    # Data transformation layer
│       └── urls.py           # Endpoint routing
│
└── frontend/                 # React application directory
    ├── package.json
    └── src/
        ├── app/              # Redux store setup
        ├── features/         # Feature-based Redux slices & components
        ├── components/       # Shared UI components
        ├── routes/           # Protected & public routes
        └── App.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) & npm
- Python (v3.10+)
- Virtualenv (`pip install virtualenv`)

---

### 1. Backend Setup (Django)

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment**:
   ```bash
   # On macOS/Linux:
   python3 -m venv venv
   source venv/bin/activate

   # On Windows:
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
   ```

4. **Run database migrations**:
   ```bash
   python manage.py migrate
   ```

5. **Start the Django development server**:
   ```bash
   python manage.py runserver
   ```
   > The API server will be available at `http://127.0.0.1:8000/`.

---

### 2. Frontend Setup (React + Redux)

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install node dependencies**:
   ```bash
   npm install
   ```

3. **Start the Vite/React development server**:
   ```bash
   npm run dev
   ```
   > The application will be running at `http://localhost:5173/` (or `http://localhost:3000/`).

---

## 🧪 Future Enhancements & Tech Roadmap

- [ ] **State Persistence**: Integrate `redux-persist` to maintain session states across page reloads.
- [ ] **Real-time WebSockets**: Add Django Channels / Socket.io for live updates and notifications.
- [ ] **Caching Layer**: Integrate Redis to cache backend responses and manage session states.
- [ ] **Containerization**: Add `Docker` and `docker-compose` setup for standardized deployment.
- [ ] **CI/CD Pipeline**: Setup GitHub Actions for automated unit testing and build checks.

---

## 📝 License

This project is open-source and created for personal learning and educational practice.