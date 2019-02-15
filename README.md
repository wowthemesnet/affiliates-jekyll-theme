# "Affiliates" - Jekyll Template by WowThemes.net

[Live Demo](https://wowthemesnet.github.io/affiliates-jekyll-theme/) &nbsp; | &nbsp; [Download](https://github.com/wowthemesnet/affiliates-jekyll-theme/archive/master.zip) &nbsp; | &nbsp; [Buy me a coffee](https://www.paypal.me/wowthemes/10)


![affiliates](assets/images/theme1.jpg)

### Features

- Built for Jekyll
- Compatible with Github pages
- Feed
- Sitemap
- SEO
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

- `git clone https://github.com/wowthemesnet/affiliates-jekyll-theme.git`
- `cd affiliates-jekyll-theme`
- `bundle`
- Edit `_config.yml`. If your site is in root: `baseurl: '/'`. Also, change your Google Analytics code, Disqus username, Authors, Mailchimp, ShareThis code etc.
- `jekyll serve --watch`
- Start blogging by adding your .md files in `_posts`. 

- YAML front matter
    - post featured - `featured:true`
    - post featured image - `image: assets/images/mypic.jpg`
    - page comments - `comments:true`
    - meta description (optional) - `description: "this is my meta description"`
    
YAML Post Example:
```
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
featured: true
---
```

YAML Page Example
```
---
layout: page
title: Affiliates Template for Jekyll
comments: true
---
```

### Copyright

Copyright (C) 2019 WowThemes.net.

**Affiliates for Jekyll** is designed by [Sal](https://www.wowthemes.net) and it is licensed MIT. If this project helps you reduce time to develop or you want to remove the attribution credit, you can give me a cup of coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/wowthemes/10)

-----------------

### Contribute

1. [Fork the repo](https://github.com/wowthemesnet/affiliates-jekyll-theme.git).
2. Clone a copy of your fork on your local
3. Create a branch off of master and give it a meaningful name (e.g. my-new-mediumish-feature).
4. Make necessary changes, commit, push and open a pull request on GitHub.

Thank you!