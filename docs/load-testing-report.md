# Load Testing Report

## Project

AWS Production DevOps Assignment

---

# Objective

Evaluate the application's performance under concurrent user requests and observe system behavior using Amazon CloudWatch.

---

# Load Testing Tool

- Tool: k6
- Test Type: HTTP Load Test
- Target Application: Node.js Express Application
- Deployment Platform: AWS EC2 (Ubuntu)

---

# Test Scenario

The test was designed to simulate multiple users accessing the application endpoints.

Endpoints:

- GET /
- GET /health
- GET /status
- GET /version

Example k6 stages:

```javascript
stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 0 },
]
```

---

# Performance Metrics Monitored

Using Amazon CloudWatch:

- CPU Utilization
- Memory Utilization
- Disk Usage
- Network In
- Network Out

---

# Monitoring Dashboard

The CloudWatch Dashboard was configured to visualize:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- CloudWatch Logs

---

# Observations

- The application remained accessible throughout deployment.
- CPU utilization remained low due to the lightweight Express application.
- Memory usage remained stable during monitoring.
- Network activity increased during application access and deployment.
- CloudWatch successfully collected metrics and application logs.
- CloudWatch Alarm and Amazon SNS notifications were configured for operational monitoring.

---

# Performance Analysis

The deployed application demonstrated stable performance under normal usage.

The monitoring dashboard confirmed:

- Low CPU utilization
- Stable memory consumption
- Minimal disk usage increase
- Consistent network traffic

No application crashes or unexpected service interruptions were observed during testing.

---

# Bottlenecks

Potential bottlenecks for higher workloads include:

- Single EC2 instance deployment
- No Load Balancer
- No Auto Scaling Group
- Single application server architecture

---

# Recommended Improvements

- Configure an Application Load Balancer (ALB)
- Enable Auto Scaling
- Implement Docker-based deployment
- Use Terraform for Infrastructure as Code
- Enable HTTPS using ACM or Let's Encrypt
- Add Redis caching
- Configure centralized log aggregation

---

# Conclusion

The application was successfully deployed and monitored on AWS using production-oriented DevOps practices.

Monitoring, alerting, deployment automation, backup automation, and infrastructure configuration were successfully implemented.

The project provides a strong foundation for production deployment and can be further enhanced with scaling, containerization, and infrastructure automation.