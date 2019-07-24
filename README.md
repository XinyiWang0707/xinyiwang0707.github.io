From this assignment, I learnt a lot of things.

New things:
1. Overlay.

the below is an example form W3C school:
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
 
Firstly, we need to create a div in the html, and give it a class or id called: overlay. (or others)

Then we need to set the display of this div to none;(but it still there on the page.Not as same as visibility: hidden:
The reason:
(display:none means that the tag in question will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags.

visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn't seen on the page.)

For example:

test | <span style="[style-tag-value]">Appropriate style in this tag</span> | test
Replacing [style-tag-value] with display:none results in:

test |   | test
Replacing [style-tag-value] with visibility:hidden results in:

test |                        | test

2. The paragraph that had been commented in the index.js. If doesn't work because you want to give a constant variable to the container that has id image${number}.

But the id="image${number}" above, why it worked, because we already wrote the (const number of numbers), so it dynamically knows that the number is 1,2,3,4....

out of the loop, it is impossible to know what is the number dynamically. It will be read as normal text.

3.If I don't use +$gallery.innerHTML when join, it will overwrite the ??? But I think that it will just overwrite what is in the <main>


What I need to know:
1. Never forget to put the <scrpt></scrpt>to the <body>
2. We can use the "for of" loop when we have an array.(It could be an array like const xx = [1, 2, 3] or a ul with different li has the same class) The browser is intelligent enough to know how many times it should do this.
3. We only need to push the second and the last second line to the where we want to join things.
4.when you want to add the addEventListener to something, you can simply change the situation of other elements on the page too. (no hierarchy needs)
<!-------------------------------------->


Why I choose this theme?

I found out so many color smoke pictures on unsplash.com, and then I felt they were so impressive and beautiful. 

The challenges and how I did the work:
1.Don't know about overlay: I went to W3C school then find it.
2. don't know that I need to + html and change the Id format. I am calling it, not giving it name. $needs backsticks and it means give a name.)