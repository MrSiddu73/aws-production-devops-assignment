#!/bin/bash

set -e

echo "======================================="
echo "Starting Deployment..."
echo "======================================="

cd /home/ubuntu/aws-production-devops-assignment

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
cd app
npm install

echo "Restarting application..."
pm2 restart aws-production-devops-assignment

echo "Deployment completed successfully!"