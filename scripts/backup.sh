#!/bin/bash

set -e

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

BACKUP_NAME="app_backup_$TIMESTAMP.tar.gz"

echo "Creating backup..."

tar -czf $BACKUP_NAME /home/ubuntu/aws-production-devops-assignment

echo "Uploading backup to S3..."

aws s3 cp $BACKUP_NAME s3://siddu-devops-assignment-backup/

echo "Backup uploaded successfully."

rm $BACKUP_NAME