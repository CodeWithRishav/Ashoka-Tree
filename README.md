# Ashoka Tree Memorial

A nature-themed interactive website dedicated to the Ashoka Tree (*Saraca asoca*), featuring animated introductions, a member registry of those who planted it, and educational information about its significance in Ayurveda and culture.

## Features

*   **Responsive Design**: Built with Tailwind CSS for mobile and desktop.
*   **Animations**: Smooth scroll-based reveals and transitions using Framer Motion.
*   **Interactive Gallery**: A carousel showcasing the tree's beauty.
*   **Glassmorphism UI**: Modern aesthetic with blur effects and soft gradients.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open your browser at `http://localhost:5173`.

## Deployment to Vercel

This project is configured to use **Vite**, which Vercel supports out of the box.

### Steps

1.  **Push to GitHub**:
    Ensure your project code is pushed to a repository on your GitHub account.

2.  **Log in to Vercel**:
    Visit [vercel.com](https://vercel.com) and sign up or log in using your GitHub account.

3.  **Add New Project**:
    *   Click the **"Add New..."** button on your dashboard.
    *   Select **"Project"**.
    *   Import your `ashoka-tree-memorial` repository.

4.  **Configure Project**:
    Vercel should automatically detect the framework settings:
    *   **Framework Preset**: `Vite`
    *   **Root Directory**: `./` (default)
    *   **Build Command**: `npm run build` (or `vite build`)
    *   **Output Directory**: `dist`

5.  **Deploy**:
    Click **"Deploy"**. Vercel will install dependencies, build the project, and assign a live URL.

### Troubleshooting

*   If you encounter build errors regarding missing modules, ensure you have run `npm install` locally to generate a valid `package-lock.json` before pushing to GitHub.
*   This project uses `cdn.tailwindcss.com` for styling in `index.html` to keep configuration simple. This works perfectly in production without additional build steps for CSS.
