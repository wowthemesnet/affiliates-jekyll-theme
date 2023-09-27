---
layout: post
title: "Odoo Insider: Activating Developer Mode and Navigating Hidden Features"
date: 2023-09-27
author: nirooba
categories: [Odoo, Developer Mode]
image: assets/images/bug_dev.jpg
---

Odoo's developer mode unveils a treasure trove of advanced features that aren't accessible in the regular interface. There are two primary methods to activate it, which I'll detail below. But first, let me share a little story from just today that underscores the importance of knowing these techniques.

### A Day in the Life:

Today, while collaborating on an Odoo module with a colleague, I noticed something peculiar. She mentioned that a specific menu I could view wasn't visible on her account. As someone with full admin access, my first instinct was to grant her the requisite permissions. Surprisingly, she already had admin rights for that module. That's when it hit me: I operate with the developer mode perpetually activated, so certain features that appear ordinary to me might be hidden for others.

After realizing she lacked access to the Settings app – and I wasn’t authorized to grant it – I employed a neat little trick. By merely modifying her URL, I unveiled the elusive menu for her. This workaround saved the day, and she gratefully bookmarked the link.

This incident made me reflect: How many others face similar predicaments? How many need access to developer-exclusive features but are restricted by their settings? Hence, this guide!

### 1. Through the Dashboard:

- **Login to Odoo**: Start by logging into your Odoo instance with administrative rights.
- **Navigate to Settings**: Once inside, head over to the `Settings` menu.
- **Access Developer Mode**:
  - Find the link named "Activate the developer mode" at the bottom and click on it.
  - If you can't locate the link, open the `About` box (usually symbolized by a question mark or the info icon). From the pop-up, select the option to activate developer mode.
- **Deactivation**: To switch off developer mode, revisit the `Settings` and choose the "Deactivate the developer mode" link.

### 2. Using the URL:

![Odoo Developer Mode]({{ site.baseurl }}/assets/images/after_bugactive.png)

- **Access Odoo URL**: Launch your browser and open your Odoo instance. The URL generally appears as `https://yourdomain.com/web`.
- **Modify the URL**: Add `?debug=1` at the URL's end. This should transform your URL into: `https://yourdomain.com/web?debug=1`.
- **Enter Developer Mode**: Hit `Enter` or `Return` on your keyboard. The page will refresh, ushering you into developer mode.
- **Deactivation**: To exit this mode, simply erase the `?debug=1` segment and refresh the page.

**Note**: Developer mode is not just a fanciful tool; it's essential for accessing advanced Odoo functionalities. But exercise caution; with greater power comes greater responsibility. Always back up your data and configurations before delving deep.



---

**Need Odoo Expertise?**  
If you're seeking specialized consultation for Odoo or require assistance with customization and optimization, Borealis Bytes is here to help. We're all about finding the right fit for you. [Reach out to us for a free consultation](https://calendly.com/borealisbytes/30min) and let's elevate your Odoo experience together.

