# Decision log

Your methods section. About one page total.

Answer these as you go, not the night before it is due.
Specifics beat polish - a short honest answer is worth more than a long vague one.

Delete these instructions when you are done, or leave them. It does not matter.

---

## 1. What did you set out to build, and what changed?

What you wanted at the start, and what is actually live now.
Name one thing you dropped or added along the way, and why.

I wanted to build a one-page personal website that introduces me, my education, experience, projects, along with ways to contact me. As I worked more on it, I wanted it to feel more personal and less like a generic template. At the beginning, I had a About Me section right after the first part of the website that introduces me and a picture of me. I found this repetitive so I removed this section completely. One thing I added along the way is a light/dark mode toggle which I just thought of in the middle of implementing this. I thought it just added an added accesibilty feature and would make it more user-friendly. 

---

## 2. A fork in the road

Name one real choice where you could have gone two ways.
Plain HTML or a framework. One page or several. Your own CSS or someone's template.
What goes on the front page and what does not.

Say which you picked, what the alternative was, and what you gave up by not taking it.

"There was no alternative" is not an answer. Find the fork.

In the middle of development, I had to decide between keeping the original card-based layout for some of my sections, or switching to a more resume-like layout. I chose the style of the resume, using dates along the sides of the content and lines to seperate experiences. The alternative may have been better for a simpler and more portfolio-like style. But I chose the new layout because I felt it looked cleaner and more like a personal page and not a generic developer portfolio. 

---

## 3. Where you overruled the agent

One time Claude suggested, wrote, or claimed something and you did not take it.

What did it do? How did you notice? What did you do instead?

If it genuinely never happened, say so plainly, and then say what you would have had to
check in order to notice. Being honest here costs you far less than a story you cannot
defend when you record your video.

The only situation where this occured was when I was trying to fix a noticably large gap between the gallery of photos in Beyond Code and the Contact section. When I raised this problem to Claude, it suggested using a negative bottom margin to cancel out the extra space. It did not mention why the problem occured and from what code, due to my lack of specific instructions. Anyways, I saw this as hiding the symptom rather than a direct fix so I instead insisted it to find the actual cause in the CSS. This led to the fix in the interaction between the margins and padding and utimately solved the problem. 

---

## 4. How you know it works

What check did you run, and what did it tell you?

Then the real question: **what would have made this check fail?**
A check that could not have failed is not a check.

Link to your `verification/` folder.

I checked the link of the deployed Github Pages site rather than how I was viewing it locally. I also created the verification folder with the screenshot of the site along with the live url. Calude Code was able to fetch the love url and check that the website was actually functioning. This check would have failed if the url returned a 404 error or if the website used files that were not actually listed in the repository. 


---

## 5. What is still wrong

One thing on your own site that is not right, not finished, or that you do not
fully understand.

What would you do next, and how would you find out?

One thing I would like to check is the website's functionality on a variety of screen sizes. I only have two screens available to me: my laptop and my phone and the website seemed to look fine on both. However, everything did seem a little compact on my phone and and I had to scroll a lot more to see everything compared to on the laptop. But the toggle option on my phone made it very easy to navigate to each section of my page. So my next step would probably be to test different styles for screens like bigger monitors or tablets, which I do not have, and see how things like the images I have on my website are displayed. 
