<h1>Arthur's Knights of the Round API Todo List Lab</h1>
<br>
<ul>
<li>
An overview of your API.
<br>
This API is a backend-only application designed to have different softwares communicate with each other. This allows us to send/receive data between users and the browser interface / database.
</li><br>
<li>
A description of how you implemented user authentication.
<br>
Json Web Tokens and a jwt-related set of code allows for user authentication. Bcrypt acts as a second layer of encryption on the password. We generate a token which is scrambled to a jumble of characters and then returned. Without this accurate token on every login, a user cannot be authenticated against the token saved on record, as the token is generated on every login attempt and must match the pre-existing one to move forward.
</li><br>
<li>
An explanation of how you structured your project following the MVC architecture.
<br>
Always start with the model of the data to be used. Then build the controller to define routes and the actions performed therein. THEN build the routes to quick-reference said controllers and send users to correct destination. This is also where Views would come into play if frontend was being coded. Views performs server-side rendering of the material to present back to user.
</li><br>
<li>
A summary of your findings when analyzing and optimizing your API's performance.
<br>
We didn't run artillery testing this time around.
</li><br>
<li>
Any challenges you faced during the project and how you overcame them.
<br>
Static CSS files threw us for a loop and we needed assistance. We also needed clarity on the intended failure tests as well.
</li><br>
</ul>
