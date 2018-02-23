# "Affiliates" - Jekyll Template by WowThemes.net

[Live Demo](https://wowthemesnet.github.io/affiliates-jekyll-theme/) &nbsp; &nbsp; [Download](https://github.com/wowthemesnet/affiliates-jekyll-theme/archive/master.zip)

![enter image description here](assets/images/theme1.jpg)

### Features

- Built for Jekyll
- Compatible with Github pages
- Featured Posts
- Index Pagination
- Post Share
- Post Categories
- Prev/Next Link
- Category Archives (this is not yet compatible with github pages though)
- Jumbotron Categories
- Integrations:
    - Disqus Comments
    - Google Analaytics
    - Mailchimp Integration
    - Formspree.io Contact
    - ShareThis Integration
- Design Features:
    - Bootstrap v4.0.0-alpha.6
    - Font Awesome
    - Masonry
- Layouts:
    - Default
    - Post
    - Page
    - Archive
    
### How to Use

If you aren't familiar with Jekyll yet, you should know that it is a static site generator. It will transform your plain text into static websites and blogs. No more databases, slow loading websites, risk of being hacked...just your content. And not only that, with Jekyll you get free hosting with GitHub Pages! This page itself is free hosted on Github with the help of Jekyll and Affiliates template that you're currently previewing. If you are a beginner we recommend you start with [Jekyll's Docs](https://jekyllrb.com/docs/installation/). Now if you know how to use Jekyll, let's move on to using Affiliates template in Jekyll:

### Using Affiliates template with Jekyll

Download or Fork *Affiliates for Jekyll*. 
- In your local project, open <code>_config.yml</code>. Set your <code>baseurl</code>, your Google Analytics code, Disqus username, Authors, Mailchimp, ShareThis code (https://www.sharethis.com/) etc.
- Affiliates requires 2 plugins: 
    - <code>$ gem install jekyll-paginate</code>
    - <code>$ gem install jekyll-archives</code>.
    - Edit the header & footer in <code>default.html</code>.  Edit home in <code>index.html</code>. Edit the contact form in <code>contact.html</code> (https://formspree.io/).
- Start blogging by adding your .md files in <code>_posts</code>. If you download the template you will notice it already has a few as an example. 
- YAML front matter
    - post featured - <code>featured:true</code>
    - post featured image - <code>image: assets/images/mypic.jpg</code>
    - page comments - <code>comments:true</code>
    - meta description (optional) - <code>description: "this is my meta description"</code>
    
YAML Post Example:
<pre>
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
featured: true
---
</pre>

YAML Page Example
<pre>
---
layout: page
title: Affiliates Template for Jekyll
comments: true
---
</pre>

### Copyright

Copyright (C) 2018 WowThemes.net.

**Affiliates for Jekyll** is designed by [Sal](https://www.wowthemes.net) and it is licensed MIT. If this project helps you reduce time to develop or you want to remove the attribution credit, you can give me a cup of coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/wowthemes/5)

-----------------

## Contribute

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-new-affiliates-feature).
- Open a pull request on GitHub and describe the feature or fix.