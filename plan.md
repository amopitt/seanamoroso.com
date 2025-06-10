# Plan for seanamoroso.com Portfolio Site

## Project Structure
```
/mnt/e/Code/seanamoroso.com/
├── .github/
│   └── workflows/
│       └── main.yaml
├── src/
│   ├── app.html
│   ├── app.css
│   ├── routes/
│   │   └── +page.svelte
│   └── lib/
├── static/
│   └── favicon.ico
├── .env.example
├── .env.local
├── .env.prod
├── .gitignore
├── Dockerfile
├── docker-compose.local.yaml
├── docker-compose.prod.yaml
├── nginx.conf
├── package.json
├── svelte.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Key Implementation Details

### 1. Technology Stack
- SvelteKit (latest version)
- Tailwind CSS for styling
- TypeScript support
- Yarn as package manager
- Vite as build tool
- Docker for containerization
- Nginx for production serving
- Cloudflare Tunnel for deployment

### 2. Docker Setup
- **Local**: Simple development container with hot reload
- **Production**: Multi-stage build with Nginx serving static files
- No separate dev environment

### 3. GitHub Actions Workflow
- Deploy on push to main branch
- Self-hosted runner (same as amorepo)
- Cloudflare tunnel integration
- Environment variables for production

### 4. Files to Create

**package.json**
- SvelteKit dependencies
- Tailwind CSS and PostCSS
- Development scripts (dev, build, preview)
- Yarn as package manager

**Dockerfile**
- Multi-stage build (base, dev, builder, prod)
- Node 22 Alpine base image
- Nginx for production
- Optimized for minimal image size

**docker-compose.local.yaml**
- Simple development setup
- Volume mounting for hot reload
- Port 3000

**docker-compose.prod.yaml**
- Production deployment
- Cloudflare tunnel integration
- Nginx serving on port 80

**GitHub Actions Workflow**
- Deploy to production on main branch push
- Uses self-hosted runner
- Cloudflare tunnel token from secrets

**SvelteKit Configuration**
- Adapter-static for static site generation
- Tailwind CSS integration
- TypeScript support

### 5. Initial Content
- Simple "Hello World" landing page
- Basic layout with Tailwind styling
- Placeholder for future portfolio content
- Reference to changeinatmosphere.com

### 6. Environment Variables
- Local: Basic development settings
- Production: Cloudflare tunnel token only

### 7. SEO and Meta Tags
- Basic meta tags for portfolio site
- Open Graph tags
- Favicon setup

## Implementation Steps

1. Create directory structure at `/mnt/e/Code/seanamoroso.com/`
2. Initialize SvelteKit project with TypeScript
3. Set up Tailwind CSS
4. Create Docker configuration files
5. Set up GitHub Actions workflow
6. Create basic Hello World page with styling
7. Configure production deployment with Cloudflare

## Manual GitHub Repository Setup Instructions

After the project files are created, follow these steps to initialize and push to GitHub:

### 1. Initialize Git Repository
```bash
cd /mnt/e/Code/seanamoroso.com
git init
git add .
git commit -m "Initial commit: SvelteKit portfolio site with Docker and Cloudflare deployment"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `seanamoroso.com`
3. Description: `Personal portfolio website built with SvelteKit`
4. Set to Public
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 3. Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/seanamoroso.com.git
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Secrets for Deployment
1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add the following secret:
   - Name: `TUNNEL_TOKEN`
   - Value: Your Cloudflare tunnel token

### 5. Set Up Self-Hosted Runner (if using)
1. Go to Settings → Actions → Runners
2. Click "New self-hosted runner"
3. Follow the setup instructions for your operating system
4. Ensure the runner has Docker installed and running

### 6. Verify Deployment Workflow
- Push any change to the main branch
- Check the Actions tab to see if the deployment workflow runs successfully
- The site should be accessible via your Cloudflare tunnel URL

### 7. Update Cloudflare Tunnel Configuration
Ensure your Cloudflare tunnel is configured to point to the Docker container running on port 80.