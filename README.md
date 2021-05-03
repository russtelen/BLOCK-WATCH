# BLOCKWATCH : a modern way to connect with your community

### A Passion Project by 👐🏻 WU Tang, SOULJA BOI Telen 📞👄, Wiz Kuahlifa 🕶

### View it Live: https://blockwatch.netlify.app/ 

### Overview

This is a community building app. With this app, we aim to help our users find their community and get to know the people around them. Users can report incidents in their neighborhood, discuss community issues, and schedule community events.

Currently, communities use platforms such as Facebook to form groups however these groups are often by invite only and are difficult to find. This app is targeted to community groups only and aims to help your community become a safer, warmer and more pleasant place to live.

### Tech Stack & Features

| Tech Stack | App Features | 
| -------- | -------- | 
| React | RESTful API
|Material UI | Client / Server Validations
|SASS | Authentication using JWT and Session
|Bootstrap | Custom Middlewares
|NodeJS | Geocoding locations
|Express | 3rd Party API (MapBox, open weather map)
|Heroku |
|Netlify |
|MongoDB |
|Mongoose |
|MongoAtlas |
JWT / Session Based Auth | 


### Prototype

[Figma Prototype](https://www.figma.com/file/2CuDFzcuuQ4WG493aJDGKK/BLOCKWATCH?node-id=4%3A1)

### Screenshots



### Minimum Viable Products

MVP 1:

- users are able to register and log in
  - User: username, email, password, firstName, lastName, location
- users are able to search for community groups
- users are able to join community groups
  - Community: name, location, administrator, description, content: [posts], [users]
- users are able to post incident reports in the joined community group
  - Post: title, description, date, author, category: enum[incident reports]

MVP 2:

- users should be able to find groups in their area using a map
- on load, app should show groups where community.location === user.location
- users are able respond (comment/like) on each post

MVP 3:

- users can post in different channels (eg. social events, discussions)
- Post: - title, description, date, author, category: enum[incident reports, social events, discussions]

MVP 4:

- Premium accounts for Stratas to coordinate community members
