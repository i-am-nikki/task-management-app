# Task Management App

This is a task management app built with React and Next.js. It allows users to add, edit, delete, mark tasks as completed, and sort tasks by priority. The app also includes a search feature to filter tasks by title or description.

## Features

- Add new tasks with title, description, and priority levels (high, medium, low).
- Edit existing tasks.
- Mark tasks as completed (with strikethrough).
- Delete tasks.
- Search tasks by title or description.
- Sort tasks by priority.
- Responsive design for different screen sizes.
- Data persistence using `localStorage`.

## Tech Stack

- **Frontend:** React, Next.js, CSS
- **State Management:** React Hooks
- **Styling:** CSS
- **Storage:** localStorage (for task persistence)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository from GitHub:
    ```bash
    git clone https://github.com/i-am-nikki/task-management-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd task-management-app
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the App

1. After installing the dependencies, you can start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

To build the app for production:

```bash
npm run build
