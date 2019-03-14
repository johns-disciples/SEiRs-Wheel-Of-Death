# SEiR Wheel of Death

Getting up to speed to work on this:
1. npm install - install all dependencies (note, if you don't have nodemon globally installed you'll need to add it)
2. npm run seed - generate dummyData.json file for dev purposes
3. npm run build
4. npm run start
5. http://localhost:3000

Server has one route set up, it fetches data from the generated dummyData.json file. See dummy.js in /server if you want to see how it works. I tried to simulate how I imagined the shape of the data would be when the DB is fully built out.

## To Do:

#### Front End

1. General
- [x] CSS Styling, general flair
- [x] CSS Individual Student Cards
- [x] Fix CSS on Floating Navigation Bar
- [ ] Write more tests!
- [ ] Also fix tests I've broken by changing things.
- [ ] Set up CircleCI integration
- [x] Optimize display for mobile - https://css-tricks.com/fun-viewport-units/
- [ ] Add Animations - https://www.npmjs.com/package/react-animated-css or https://github.com/reactjs/react-transition-group

2. Optional Front End To Do
- [ ] Add tap to confirm call on student (increment timesCalled counter) -- Note: may conflict with existing tap to add note feature
- [ ] Wheel animation
- [ ] We could make a component that generates an exportable randomized list, for things like deciding student presentation order
- [x] Add feature to allow for adding Notes to student cards (will require put/patch route on back end)
- [ ] Add Title or something to Navigation Component
- [ ] Create a component where you can add all students to a list then submit to add class to DB (Redis APIs built for an array of strings structure: ['firstname lastname'])

#### Back End
- [ ] Build out DB (redis)
- [ ] Add API routes for patch/update (updating timesCalled/lastCalled)
- [ ] Add API route/method for adding/saving notes
- [x] Add method for uploading .csv/.tsv files (Added method on Front End, but it only sends an alert to confirm receipt)
- [ ] Write method/DB model to send .csv/.tsv file to populate DB

