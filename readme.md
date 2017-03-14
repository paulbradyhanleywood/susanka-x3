#Sample Responsive Site Pages


This small kit includes 3 responsive sample pages for Susanka.com (index.html, index2.html, and index3.html).

The pages are intended to handle browser widths from 320px (iPhone 5) up to 1200px (and wider!).

### Project Layout
```
/public
	/assets
		/img
			(misc placeholder images)
		/style
			main.css (the CSS version of the stylesheet)
			bootstrap.css (for your reference)
	index.html				
	index2.html
	index3.html
/sass
	main.scss (the SASS version of the stylesheet)
susanka_landingpages--target-layouts.png (the desktop mockup)
...
(other trival files)

```

### Bootstrap 4
We have used the soon-to-be-released Bootstrap 4 (alpha 6 currently), like we do on our own upcoming websites.  

+[Bootstrap 4 Homepage](https://v4-alpha.getbootstrap.com/)

+[Bootstrap 4 Docs (Spacing/Centering/etc...)](https://v4-alpha.getbootstrap.com/utilities/spacing/)


You do not need to install download or install Boostrap 4 to work on this project.  The pages load the required files from the web.  (However, a copy of the Bootstrap.css is included in /public/asset/style/ for your handy reference.)

You'll notice in the index.html pages that MOST of the CSS comes from Bootstrap.  When I wasn't able to easily get what I wanted from Bootstrap, I edited the CSS myself (SASS actually).

More about that below...


###SASS / CSS
-----

LINK:  [SASS Basics -- See "Nesting" section](http://sass-lang.com/guide)

CSS is 100% compatible with SASS.  But by using SASS, you have extra features (like NESTING) that will help keep your CSS organized... and much shorter / readable.  STILL... using SASS is optional.

You have two choices at this point:

1. You can forget using SASS (/sass/main.scss), and just edit the (/public/asset/style/main.css) file directly.
2. Or, you can run the SASS compiler, and edit the SASS file directly (/sass/main.scss) --> and the compiler watches for changes to your main.scss file, and compiles them into clean, validated CSS (in public/asset/style/main.css).


BEWARE, IF YOU EDIT THE /PUBLIC/CSS/MAIN.CSS FILE DIRECTLY, *THEN* RUN THE SASS COMPILER, YOUR MAIN.CSS FILE CHANGES WILL BE OVERWRITTEN!!!



##How to install the SASS compiler

###Installing:  
```
[sudo] gem install sass -n/usr/local/bin
```


###Running the SASS Compiler
1. Open Terminal and go to the project root...
```
cd susanka-x3
```

2. Then type 
```
sass --watch sass:public/asset/style/
```
3. Watch the terminal window for CSS errors.  You'll need to correct these for your CSS to fully compile.


###Tricky Bits
1. Probably the trickiest part is the HERO module on the top of each page.  (FYI -- Bootstrap calls them Jumbotrons.) There are two types...

		- Short Jumbotrons (see index.html and index2.html)
		- Normal Jumbotron (see index3.html)

The text div in the center of these Jumbotrons was created by me, with the class "ss-hero", in the main.scss.  "ss-hero" creates a "normal" sized hero.  And you'll notice that the inner white div with the text in it changes position/size slightly as the browser window gets larger and smaller.

On these pages, Bootstrap is setup to handle pages with 5 different widths, in steps...  xs-ExtraSmall, sm-Small, md-Medium, lg-Large, and xl-ExtraLarge.  [See Bootstrap Responsive Breakpoints](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints). My "ss-hero" class mimics Bootstrap's breakpoints, to provide resonable text div layouts for each "step".)

Add the class "ss-shorter" alongside "ss-hero", like this...
```
<div class="ss-shorter ss-hero"></div>
```

...and this enables the shorter version of the same ss-hero, with appropriate shorter layouts for the white text div.


2. The green border around the page is created alongside the "container" class, by adding two classes "border-1-green-upper" and "border-1-green-lower".

You'll notice that if you add a "margin-top" (mt-5), or "margin-bottom" (mb-5) to a the container in the middle of a page, you might see a white vertical gap where the green border breaks off.

If you see this, use a "padding-top" (pt-5) or "padding-bottom" (pb-5) instead of margin.



---
###Google Fonts Used
* Alegreya - (regular 400)
* Muli - (regular 400)
* Muli-italic - (light 300 italic) (optional)
* Cardo - (regular 400)
* Cardo-italic - (regular 400 italic) (optional)

---
###Site Images
* These images were taken directly from the site mockup document.  You'll have better quality images if you take them from the existing site, or it's original PSD archive.

---
If you have any questions, please contact me at...  
Thanks,
Paul Brady - paulbrady@hanleywood.com

---
Copyright © 2016 Hanley Wood Media, Inc. All rights reserved
©2017 Susanka Studios. All Rights Reserved.

