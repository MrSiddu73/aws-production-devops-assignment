# Deployment Guide

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
cd app
npm install
```

## Start Application

```bash
pm2 start ecosystem.config.js
```

## Configure Nginx

```bash
sudo systemctl restart nginx
```

## CI/CD

Push to the main branch to trigger GitHub Actions deployment.