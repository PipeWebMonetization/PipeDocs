---
sidebar_position: 3
---

# Database

## DynamoDB

PipeWebMonetization leverages DynamoDB as primary storage

## Tables

There is a total of **6 tables** that store user info, transactions raw data and transactions statistics

- **PipeWebMonetization**: stores Next Auth authentication data for our dashboard
- **pluginIds**: stores the relation between userEmail and pluginId
- **transactions**: stores raw transactions data
- **transactionsPerDayOfWeek**: stores statistics of each day of the week per paymentPointer per pluginId
- **transactionsPerDayOfYear**: stores statistics of each day of the year per paymentPointer per pluginId
- **transactionsPerMonth**: stores statistics of each day of month per paymentPointer per pluginId
