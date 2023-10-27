# JS-Collisions
This was a fun and useful Javascript project for detecting collisions. Collisions can be useful for any type of web design, whether its for webpage animations, or a game on the web.

The first Event Listener (from line 1 - 51) is just one of the ways to control the 2 circles using the wasd keys for the blue circle and the arrow keys for the green circle.

The control() function is used only if wanted, as it asks to choose if a user would want to control either of 2 circles with a cursor. You can test the control function by just clicking anywhere on the page. 

The collision() function is the magic of the whole page, as it detects if a collision occurs between the 2 objects. It does this by first getting the bounds of each object (getBoundingClientRect()) and by getting the radius of each circle. 
It then gets the x and y position of the blue circle - the x and y position of the green circle. The reason its done like this is to create an imaginary right triangle between both circles. 
Then, its up to the Pythagorean Theorem to determine the length of the last side, and store it in 'distance' and the sum of both radius' into "sum". If the distance is less than the sum of both radius' (if they overlap), a collision is detected and it returns true, and false otherwise.

The last Event Listener is just to display whether a collision has occured, if it has, it displays "Contact" and "no contact" otherwise.

I also would appreciate some help with the animations of the movements, as I am not too good at creating smooth animations. Thank you.

Hope you enjoy
