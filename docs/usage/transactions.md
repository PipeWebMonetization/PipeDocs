---
sidebar_position: 2
---

# Transactions

## Fetching transactions

```javascript title="GET https://api.pipewebmonetization.com/transactions"
let response = await fetch(
  "https://api.pipewebmonetization.com/transactions?type=all&pluginId=test-plugin-id",
  {
    method: "GET",
  }
);

let data = await response.text();
console.log(data);
```

### Required params

The transactions GET method requires the following **query parameters**:

- **type**
  - all: fetch all transactions statistics
  - perMonth: fetch transactions statistics per Month
  - perDayOfYear: fetch transactions statistics per Day of Year
  - perDayOfWeek: fetch transactions statistics per Day of Week
- **pluginId**: The user Wordpress pluginId

### Responses

The expected reponse contains an **items array.**

Depending on the selected type, the array may contain weekData, monthData and yearData arrays.

Each of these arrays contain an object per year. The object contains the day or month keys, a paymentPointer key and a pluginId key.

All indices start at zero.

```json title="Expected response for perMonth request"
{
  "items": [
    {
      "4": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ]
}
```

In the above example, the object represents the year of 2022, as verified through the paymentPointer suffix "-2022".
The month 4 is May (remember indices start at zero), followed by its total value.

### Examples

#### All

```javascript title="GET https://api.pipewebmonetization.com/transactions"
let response = await fetch(
  "https://api.pipewebmonetization.com/transactions?type=all&pluginId=test-plugin-id",
  {
    method: "GET",
  }
);

let data = await response.text();
console.log(data);
```

```json title="Expected response"
{
  "weekData": [
    {
      "0": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ],
  "monthData": [
    {
      "4": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ],
  "yearData": [
    {
      "135": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ]
}
```

#### Per Month

```javascript title="GET https://api.pipewebmonetization.com/transactions"
let response = await fetch(
  "https://api.pipewebmonetization.com/transactions?type=perMonth&pluginId=test-plugin-id",
  {
    method: "GET",
  }
);

let data = await response.text();
console.log(data);
```

```json title="Expected response"
{
  "items": [
    {
      "4": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ]
}
```

#### Per Day Of Year

```javascript title="GET https://api.pipewebmonetization.com/transactions"
let response = await fetch(
  "https://api.pipewebmonetization.com/transactions?type=perDayOfYear&pluginId=test-plugin-id",
  {
    method: "GET",
  }
);

let data = await response.text();
console.log(data);
```

```json title="Expected response"
{
  "items": [
    {
      "135": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ]
}
```

#### Per Day Of Week

```javascript title="GET https://api.pipewebmonetization.com/transactions"
let response = await fetch(
  "https://api.pipewebmonetization.com/transactions?type=perDayOfWeek&pluginId=test-plugin-id",
  {
    method: "GET",
  }
);

let data = await response.text();
console.log(data);
```

```json title="Expected response"
{
  "items": [
    {
      "0": 246246,
      "paymentPointer": "test-payment-pointer-2022",
      "pluginId": "test-plugin-id"
    }
  ]
}
```
