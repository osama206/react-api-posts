# React API Posts Application

This is a small React web application that fetches and displays data from the JSONPlaceholder API. The application allows users to view a list of posts, display details of a selected post, and filter posts by title using a search bar.

## Features

- Fetches a list of posts from the JSONPlaceholder API.
- Displays the list of posts in a user-friendly manner.
- Allows users to click on a post to view its details.
- Displays the post title, body, and a list of comments for the post.
- Implements a search bar to filter posts by title.

## Technologies Used

- React
- CSS

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/osama206/react-api-posts.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-api-posts
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Demo

You can view a live demo of the react-api-posts hosted on GitHub Pages [here](https://osama206.github.io/react-api-posts).

## Project Structure

```
react-api-posts/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── PostDetail.css
│   │   ├── PostDetail.jsx
│   │   ├── PostList.css
│   │   ├── PostList.jsx
│   │   ├── SearchBar.css
│   │   ├── SearchBar.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── package-lock.json
└── README.md
```

### Components

- **App**: Main component that manages state and renders child components.
- **PostList**: Component to display the list of posts.
- **PostDetail**: Component to display the details of a selected post.
- **SearchBar**: Component for the search functionality.

### CSS Files

- **PostDetail.css**: Styles for the PostDetail component.
- **PostList.css**: Styles for the PostList component.
- **SearchBar.css**: Styles for the SearchBar component.
- **App.css**: Global styles for the application.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

---
