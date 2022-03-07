---
title: 'Building with Next.js, TailwindCSS and Firebase'
date: 'March 3, 2022'
excerpt: 'Combining Next.js and TailwindCSS to make an incredibly fast website with CI/CD to Firebase Hosting'
cover_image: '/images/Next.webp'
---

Starting my journey into commerical web development I thought I'd start with my very own website to showcase my abilities and test my knowledge. I chose to go with Next.js as it runs incredibly fast giving me rapid response times on my website and making it an all around pleasant experience for my users.

My previous experience with Next.js and CSS Modules was a tiresome one, I decided to go with [TailwindCSS](https://tailwindcss.com/) for styling. At first glace I found Tailwind disgusting. However after playing around with the module I grew to love its simplicity. The addons for VSCode were incredibly helpful for their use of intellisense on the classnames. After everything I think its safe to say, I have fallen in love with the library and will likely use it in upcoming projects. Stay Tuned.

Finally, hosting was an entirely new ball game for me. I decided to use firebase and its free hosting services. Having very limited use of the software in the past I thought a deep dive in setting things up and using the docs would be beneficital in the long run. Alas I was wrong. After using github actions to setup a good continuous integration and continuous deployment pipeline. Changes and updates were a breeze.

**However** I encounted one glaring bug. Firebase when refreshed would send my website to the homepage, no matter what page the user had navigated to. Google returned little results but from what I did manage to gather this was a firebase specific issue. I changed provider over to [Vercel](https://vercel.com/dashboard) and with a seemless integration with my Github account, CI/CD was implemented yet again and my site ran flawlessly.
