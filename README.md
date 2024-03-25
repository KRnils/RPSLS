## Table of Contents


# RPSLS

Welcome to RPSLS, here you can play the game Rock, Paper, Scissors, Lizard, Spock. The rules are simple, just like Rock paper scissors but with lizards and Spock.

"Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors"

amiresponsive result

## Introduction

RPSLS is a web application that lets users enjoy a chance-based, single-user game against the computer online. RPSLS is based on the legacy (?) Rock Paper Scissors with added options. Users can pick a card to play it. They can do so multiple rounds with the score recorded and displayed.


## Design

### Colour Scheme

I have chosen a dark-themed colour scheme for RPSLS where a simple and minimal colour combination of about four colour variations are picked. It uses green, blue, white and dark grey. As an online game, this colour scheme contributes to a strong visual contrast without being too overwhelming. For readability, the background remains contrasting to the colour of the text consistently.

### Typography

I have picked Gemunu Libre as the font for the cards on the web application. It is very readable while still maintaining the fun element of a game. For the game status board, I have picked Source Code Pro as the font as it fits the mood and the theme while still being very readable.

### Accessibility

* Semantic HTML is used as much as possible and conforming with best practices.
* Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
* Ensuring that there is a sufficient colour contrast throughout the site.
* All links and buttons use some form of highlighting when hovered over to help convey that they are clickable.
* Visual - all text and images are clear, legible, and visible.
* Easy-to-navigate actions with large fonts and clear labels.
* Site resizes well to most device types and screen configurations.


### Wireframes

Wireframes were created for mobile and desktop versions...

- Home page

![index-wireframe](assets/readme/Wireframes/index-wireframe.webp)

- Home page mobile

## Features

* One html and JavaScript page with styles in one CSS file to create a uniform style
* Five card options
* One action button to play card
* One action button to start a new game after the fifth round on a given game
* One game status counter with score, round and narration.
* One CPU/computer player display on top of the site with its hand to visualise computer as the competitor the user is playing against.
* All buttons react to hover so it's clear that they are interactive

### Existing Features

* __Card game style graphics__

- Text

add image

- __Other feature__

- Text

add image


## Testing

### W3C Validator Testing

__All HTML has been tested with the W3C validator and show no errors or warnings.__

add results

__All CSS has been testeed with W3C validator (Jigsaw) and show no errors or warnings.__

add results

### Accessibility Test

comments + results

see [TESTING.md](TESTING.md) for all details and a full list of scores and other tests performed.

### Solved Bugs

* Making buttons clickable instantly

### Known Bugs

* 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://krnils.github.io/RPSLS/

## Credits

### Content

- bla
- Some coding solutions were inspired by the Code Institute [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) project
- The icons for the playing cards are provided by [Font Awesome](https://fontawesome.com/)
- Favicon was provided by https://favicon.io/ see [favicon about](assets/favicon/about.txt) for license details

### Media
- https://playgroundai.com/ was used to create the images for the reviews, they are all inspired by the real locations but I did not have time to go take pictures.
- The red coffe cup on the home page is a photo by Archie Binamira found on Pexels.com, thanks! https://www.pexels.com/photo/red-ceramic-mug-on-red-saucer-1187317/

### Tools

- [CSS CheatSheet](https://htmlcheatsheet.com/css/) was used to test css features with trial and error to see what attributes to put, a real timesaver.
- [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1) helped find issues with performance, accessibility, and SEO. The final results are also included in this README.md.
- [W3C HTML Validator](https://validator.w3.org/) Was used to validate all HTML, some issues were found and fixed this way.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) Was used to validate the CSS, no issues were found.
- [Coolors](https://coolors.co/) was used to help pick colors that fit the mood while maintaining good contrast for readability and accessibility.
- [http://ecotrust-canada.github.io/markdown-toc](http://ecotrust-canada.github.io/markdown-toc) table of contents generated with markdown-toc