---
title: Collaboration
subtitle: Les méthodes de collaboration.
category:
  - Third Party Integrations
author: BRODAR Frederic
date: 2019-07-24T19:59:59.000Z
featureImage: /uploads/disqus-hero.jpg
---
Mes compétences organisationnelles sont au service de notre collaboration. Avec les outils comme Trello ou Projeqtor, vous suivez l'avancement de votre projet en temps réel. Ce qui évite les mauvaises surprises.

## Trello

Une collaboration simple et gratuite.

![Screenshot of Disqus homepage](/uploads/trello.png)

## Step 2

Choose "I want to install Disqus on my site"

![Disqus button "I want to install Disqus on my site"](/uploads/disqus-add-to-website.jpg)

## Step 3

Sign-up or sign in

## Step 4

Enter site name, Disqus URL and select a category. The Disqus URL name is your site’s name in your account where you can access all the required settings.

## Step 5

Select a plan. There are several premium versions available, but don't worry the free one works just great too!

## Step 6

Disqus supports a number of different platforms but also works great in static sites like Awake. Scroll to the very bottom of the list and choose: "I don't see my platform listed, install manually with"

![Disqus button "I don't see my platform listed, install manually with"](/uploads/disqus-platform-button.jpg)

## Step 7

You can ignore everything on this page, as the Awake template has already configured it for you. All you have to do is find your "Site Short Name" (it's the first part of the url) and add it to `config/_siteConfig.js`.

Take it from here:

![Site Short Name in url](/uploads/disqus-site-short-name.jpg)

and put it here:

```
// config/_siteConfig.js
export default {
...
// Disqus
  disqus: {
    on: false,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'testing-bjsj2bjl0i'
  },
}
```

## Step 8

That's it! You've got comments up and running on your site. Go checkout a post and see your new fancy comments section.
