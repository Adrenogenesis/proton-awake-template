---
title: Les engagements
subtitle: La garantie des réalisations avec un suivi à long terme
category:
  - Third Party Integrations
author: BRODAR Frédéric
date: 2019-08-01T03:49:49.295Z
featureImage: /uploads/mailchimp.jpg
---
## 1. L'etude du projet

If you don't already have a mailchimp account, head on over to [mailchimp.com](https://mailchimp.com) and sign up (don't worry they have free tiers that will give you all you probably need).

## 2. Create a New Campaign

Go to "Campaigns" in the main navigation of the Mailchimp dashboard and then click the "Create Campaign" button on the top right.

## 3. Start Signup Form

From the modal overlay that appears choose "Signup Form", then click "Begin" under "Embedded Form"

![Les engagements](/uploads/mailchimp.jpg "Les engagements")

## 4. Get Form Action

Under "Copy/paste onto your site" you'll see the markup  for the newsletter form. Just copy the form action value from the form

![copy form action from mailchimp](/uploads/screen-shot-2019-08-01-at-1.05.09-pm.png)

## 5. Add the Action to the Awake Site Configuration

```
// Can be the form action on a mail chimp form, a hubspot form,
// or any other url you want to post the form data tomailchimp: {
    on: true,
    formAction:'enter url here'
}
```
