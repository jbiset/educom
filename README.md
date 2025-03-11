# Educom - Web

## Requirements

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 23.1.0)
- [npm](https://www.npmjs.com/) for dependency management

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/jbiset/educom.git
cd educom
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the script

This project includes some useful scripts for development and deployment.

#### Development Mode

To start the development server, which includes hot reload and other developer tools, run the following command:

```bash
npm run dev
```

This will start the server on http://localhost:4321.

#### Build for Production

To build the application for production, run:

```bash
npm run build
```

This command will create a dist folder with optimized files ready for deployment.

#### Production Preview

If you want to locally preview the production build, use:

```bash
npm run preview
```

This will start a local server to preview the project in production mode.

## Project Structure

Here’s a quick breakdown of the main folders and files:

- **src/:** Contains the project source files.
- **pages/:** Where the site’s pages are stored.
- **components/:** Reusable components for the project.
- **public/:** Static files, such as images and fonts.
- **astro.config.mjs:** Astro configuration file.

## References

- [Official Astro documentation](https://docs.astro.build/en/getting-started/)
