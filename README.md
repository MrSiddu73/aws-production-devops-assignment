# AWS Production DevOps Assignment

## Overview

This project demonstrates a production-like deployment of a Node.js application on AWS using DevOps best practices, including Infrastructure, CI/CD, Monitoring, Security, Backup, and Automation.

---

## Architecture

```
GitHub
   │
   ▼
GitHub Actions (CI/CD)
   │
   ▼
EC2 (Ubuntu)
 ├── Nginx
 ├── Node.js (Express)
 ├── PM2
 ├── CloudWatch Agent
 └── Backup Script
      │
      ├── Amazon S3
      └── CloudWatch

CloudWatch
 ├── Dashboard
 ├── Log Groups
 ├── Alarm
 └── SNS Notifications
```

---

## Tech Stack

- AWS EC2
- Amazon S3
- IAM
- CloudWatch
- SNS
- GitHub Actions
- Ubuntu
- Nginx
- Node.js
- Express.js
- PM2

---

## Features

- Deploy Node.js application on AWS EC2
- Reverse Proxy using Nginx
- Process Management using PM2
- Automated Deployment using GitHub Actions
- Amazon S3 Backup
- CloudWatch Monitoring
- CloudWatch Dashboard
- CloudWatch Alarm
- SNS Email Notifications
- IAM Least Privilege
- Security Groups Configuration

---

## Project Structure

```
aws-production-devops-assignment/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── app/
│
├── scripts/
│   ├── deploy.sh
│   └── backup.sh
│
├── monitoring/
│
├── load-testing/
│
├── architecture/
│
├── docs/
│
└── README.md
```

---

## Deployment Steps

### Clone Repository

```bash
git clone https://github.com/MrSiddu73/aws-production-devops-assignment.git
```

### Install Dependencies

```bash
cd app
npm install
```

### Start Application

```bash
pm2 start ecosystem.config.js
```

### Configure Nginx

```bash
sudo systemctl restart nginx
```

---

## CI/CD Pipeline

- Push code to GitHub
- GitHub Actions automatically connects to EC2
- Pulls latest code
- Installs dependencies
- Restarts PM2
- Application is updated automatically

---

## Monitoring

CloudWatch monitors:

- CPU Utilization
- Memory Usage
- Disk Usage
- Network In
- Network Out

Logs collected:

- Application Logs
- Nginx Access Logs
- Nginx Error Logs

---

## Backup

Automated backup script uploads compressed application backups to Amazon S3.

---

## Security

- IAM Least Privilege
- EC2 IAM Role
- Security Groups
- Reverse Proxy using Nginx
- No AWS Access Keys stored on the server

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Home |
| GET | /health | Health Check |
| GET | /status | Application Status |
| GET | /system | System Information |
| GET | /time | Current Time |
| GET | /version | Version Information |

---

## Future Improvements

- HTTPS with ACM/Let's Encrypt
- Auto Scaling Group
- Application Load Balancer
- Terraform Infrastructure as Code
- Docker & Kubernetes Deployment

---

## Author

**Siddu S N**

GitHub: https://github.com/MrSiddu73