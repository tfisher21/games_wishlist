# Fisher QuickStart Package:
---

## Nodes Used
* express
* ejs
* request
* body-parser
* mongoose
* dotenv
* method-override
* igdb-api-node

## Various App Notes
* [Internet Game Database (IGDb)](https://igdb.github.io/api/)
  * User Key: 19952379ada061b28c8e6115c7f11c25
* [Bootstrap - The most popular HTML, CSS, and JS library in the world.](http://getbootstrap.com/)
* [Icons | Font Awesome](https://fontawesome.com/icons/)
* [Hiding Secrets in Node](https://github.com/justincastilla/hiding-secrets-in-node)
* [Best practices for Express app structure](https://www.terlici.com/2014/08/25/best-practices-express-structure.html)
* [Wunderlist | Web](https://www.wunderlist.com/web/)

### Design Ideas
* [Microinteractions for to-do list app](https://dribbble.com/shots/3167358-Microinteractions-for-to-do-list-app)
* [Be amazing today](https://dribbble.com/shots/2589690-Be-amazing-today)

## Future Updates
* User Authentication
* Allow separate lists (wishlist, tracking, owned, etc.)
* How can I use animations to center the game name in the header and move the date to the bottom?
  * Is this jQuery, DOM manipulation, or something else?
* Add webapp start animation akin to pulling a physical game off a shelf.
* Is it better to continue pulling from the API, or minimize the times you pull from it
* Would a more traditional grid and card system be a better UI?
* Four initial default list types: Played, Wishlist, Replay, Future Release

### Improve Search branch
* Remove search restrictions
* Add search options
* Expand data saved
  * genre
  * platforms
  * description
* Move Search out of nav and to the top.
* We can add searchable DLC at some point.
* Pagination

### Commit To-Do
* Remove Developer/Publisher from Game model, Views, and Routes
* Add six total seeds
* Migrate database to cloud mongo service