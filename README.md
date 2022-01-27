# Project Overview

## Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This portfolio application will highlight a responsive design that will adapt to users devices ranging from mobile, tablet, and desktops. Implementing Javascript to curate a more interactive user experience throughout all devices. The application will include a navigation menu, an About me section, previous projects, and a contact form. 

## Wireframes

Include images of wireframe with a description of the specific wireframe.   

- [Mobile](https://ibb.co/vdLDwfd) (https://ibb.co/JpQ8XL1) 
- [Desktop](https://ibb.co/2y0zxMV)


## Time/Priority Matrix 

[Link](https://ibb.co/BLjYWnV)

#### MVP (examples)

- Navigation Menu
- Hamburger Switches to a fully displayed menu of page and will take you to the following section of the page. 
- Responsive design 
- Contact Section
- About me Section
- Projects Section

#### PostMVP 

- Color change while scrolling on page 
- Additional Styling

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 2hr | hr | 4hr 
| Nav Bar Functions | H | 3 Hr | hr | 6hr
| Regular Nav | H | 1hr | hr |  1hr
| Javascript/ Jquery Functionality | H | 4 hr|  hr | 1hr | 6hr
| CSS Layout and flex| M | 5hr | hr| 4hr 
| Responsive | H | 3-4 hr | hr | hr | 4hr
| Total | H | 21 hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| CSS styling (Text, Colors, ETC) | L | 4hr | -hr | hr | 5hr
| Images and Icons | L | 2 hr | hr | 2hr
| Color change while scrolling on page  | L | 2 hr | hr |
| Total | H | 8 hrs| hrs |

## Additional Libraries
Google Fonts - importing different font families.
Font Awesome - adding icons to the contact section.
Jquery - add interaction between the user and the navigation bar and the contact submission section. 
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}

$(() => {

    const $menuToggle = $('.toggle');
    
    const $menuShowcase = $('.menu');
    
    $menuToggle.click(function (){
        $menuToggle.toggleClass('active');
        $menuShowcase.toggleClass('active');
    })
});

```

## Issues and Resolutions
Creating the NAVBAR and its functionality took more time that expected. I couldn't get the layout of the sliding menu to display correctly. But, then I realized that I needed to hide the menu from the view port and return it using a toggle function. I used this resource https://www.freecodecamp.org/news/how-to-build-a-sliding-menu-bar-using-html-css-and-javascript-669f0c1c37a7/ which helped explain A LOT! However, it still took a lot of tweaking and moving elements around. About 6 hours total...

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object