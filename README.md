# clearmix-jam-session

![](./splash.png)

- [Nest API](./api/)

- [Next App](./next/)

## Instructions for running the project

- I'm using npx on my machine and running node version `16.5.0`, npm version `7.19.1`

- I've excluded the node_modules folders to keep the zip file small

- I ran the applications using the package.json scripts `npm run start:dev` + `npm run dev`

- The Nest API should be hosted on `http://localhost:3001/api`

- The Next app should be hosted on `http://localhost:3000/`

### My Own Questions + Comments

- I became curious and had a question after looking around on youtube and some blog posts / resources. I noticed some people tend to have their own preferences when it comes to naming conventions for certain things in Nest. In my case I noticed how sometimes a resource would either be spelled in plural or singular.

  - Based on some of the info I saw out there, it seemed like there would be developers out there who would maybe have opted to create and name the resource I created in this project "playlist" instead of "playlists"

  - When naming the resource for "playlist/playlists" it made sense to me to go with a plural naming convention. My thought process behind it was "I'm dealing with one or more playlists, therefore plural makes sense"

  - I then also googled around and saw this on a [github issue for the Nest repo](https://github.com/nestjs/docs.nestjs.com/issues/1176)

    - So it seems to me like plural seems to be recommended

  - In the existing codebase do you tend to stick to a preferred naming convention for certain things like in this example?

- In the root index page for the app I don't render anything meaningful and simply redirect to the playlists page when the index page request is made to the server inside of `getServerSideProps`. Would it make more sense in a production scenario to simply use a redirect inside of the next config?
