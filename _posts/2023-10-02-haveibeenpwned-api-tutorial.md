---
layout: post
title:  "Elevate Your App's Security Game with the HaveIBeenPwned API"
author: shiva
categories: [ security, application security, nodejs ]
image: assets/images/1.jpg
---

## Introduction

Hey there, tech enthusiasts! Let's talk about the elephant in the room—data breaches. They're the digital world's worst nightmare, but fear not! We've got a guardian angel, and its name is HaveIBeenPwned (HIBP). Developed by cybersecurity expert Troy Hunt, HIBP is your one-stop-shop for checking if you or your users have been compromised in a data breach. Today, we're diving into how to integrate the HaveIBeenPwned API into your Node.js app. So, let's get started!

## What You'll Need

- A dash of Node.js know-how
- An API key from HaveIBeenPwned (It's a game-changer!)

## Setting the Stage

First, you'll need to install the `axios` package. Open your terminal and run:

```bash
npm install axios
```

## The Meat and Potatoes: Checking Emails

Let's cut to the chase. Here's a Node.js function to check if an email has been compromised:

```javascript
const axios = require('axios');

async function checkEmail(email, apiKey) {
  const config = {
    headers: {'hibp-api-key': apiKey}
  };
  const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`;

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      return 'Good news! Email not found in breaches.';
    } else {
      return 'Oops! Something went sideways.';
    }
  }
}

const apiKey = 'your_api_key_here';
const email = 'test@example.com';
checkEmail(email, apiKey).then(result => {
  console.log(result);
});
```

## Batch It Up!

Got a bunch of emails? No sweat! Loop through them like this:

```javascript
const emails = ['test1@example.com', 'test2@example.com'];
emails.forEach(async email => {
  const result = await checkEmail(email, apiKey);
  console.log(`${email}: ${result}`);
});
```

## Secure Those Passwords!

Passwords are the keys to your digital kingdom. Make sure they're secure:

```javascript
async function checkPassword(password, apiKey) {
  const config = {
    headers: {'hibp-api-key': apiKey}
  };
  const prefix = password.slice(0, 5);
  const url = `https://api.pwnedpasswords.com/range/${prefix}`;

  try {
    const response = await axios.get(url, config);
    const hashes = response.data.split('\r\n').map(line => line.split(':'));
    const suffix = password.slice(5).toUpperCase();

    for (const [hash, count] of hashes) {
      if (hash === suffix) {
        return `Yikes! This password has been seen ${count} times before.`;
      }
    }
    return 'Password is good to go!';
  } catch (error) {
    return 'Uh-oh, something\'s fishy.';
  }
}

const password = 'your_password_here';
checkPassword(password, apiKey).then(result => {
  console.log(result);
});
```

## Make It Part of Your App's DNA

Integrate these functions into your app's registration or login process. Imagine the UX boost when you can warn users about compromised passwords or emails!

## Mind the Rate Limit

The HaveIBeenPwned API has a rate limit—so don't get too clingy. You're limited to one request every 1.5 seconds if you have an API key.

## Wrapping Up

And there you have it! The HaveIBeenPwned API is a must-have tool for any security-conscious developer. By integrating it into your app, you're offering more than a service; you're offering peace of mind. Borealis Bytes offers top-notch auditing and consulting services to help secure your application landscape. [Contact us today for a free consultation](https://calendly.com/borealisbytes/30min) and let's discuss how we can help strengthen your application security together.
