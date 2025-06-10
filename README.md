# Sean Amoroso Portfolio

A modern portfolio website built with SvelteKit, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: Yarn
- **Build Tool**: Vite
- **Containerization**: Docker
- **Web Server**: Nginx (production)
- **Deployment**: Cloudflare Tunnel

## Development

### Prerequisites

- Node.js 22+
- Yarn
- Docker (optional)

### Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The site will be available at `http://localhost:5173`

### Docker Development

```bash
# Start development environment
docker-compose -f docker-compose.local.yaml up
```

The site will be available at `http://localhost:3000`

## Production

### Docker Production Build

```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yaml up -d --build
```

### Environment Variables

Create `.env.prod` with:

```
NODE_ENV=production
TUNNEL_TOKEN=your_cloudflare_tunnel_token
```

## Deployment

The site deploys automatically via GitHub Actions when pushing to the main branch. The workflow:

1. Builds the Docker production image
2. Deploys using docker-compose
3. Configures Cloudflare tunnel for external access

## Project Structure

```
├── .github/workflows/    # GitHub Actions
├── src/
│   ├── routes/          # SvelteKit routes
│   ├── lib/             # Shared components
│   ├── app.html         # HTML template
│   └── app.css          # Global styles
├── static/              # Static assets
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.*.yaml # Docker configurations
├── nginx.conf           # Production web server config
└── package.json         # Dependencies and scripts
```