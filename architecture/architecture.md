# AWS DevOps Architecture

## Overview

This project deploys a Node.js application on AWS EC2 using production-oriented DevOps practices.

## Components

- GitHub Repository
- GitHub Actions (CI/CD)
- AWS EC2 (Ubuntu)
- Nginx Reverse Proxy
- Node.js Application
- PM2 Process Manager
- CloudWatch Agent
- Amazon S3 (Backups)
- Amazon CloudWatch
- Amazon SNS

## Deployment Flow

Developer → GitHub → GitHub Actions → EC2 → PM2 Restart

## Monitoring Flow

Application Logs → CloudWatch Agent → CloudWatch → Alarm → SNS

## Backup Flow

Backup Script → Amazon S3