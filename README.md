# Counter app demo

This is a simple counter application.

### Notes:

- The project was bootstrapped using create-react-app, so the Webpack bundler is included
- Some basic CSS was added, just to make it less painful to watch :) BEM convention was used
- Tests were made using Jest and Enzyme
- React Router was used for navigation

### Specifications:

- First page:
  - The page should contain a counter, +, - buttons and a navigation to navigate to the second page.
  - By pressing specific + or – buttons, the counter should increase or decrease its number.
  - The number in the counter cannot be negative and the highest possible number should be 10.
  - By pressing on the navigation button, we should be redirected to the second page.
  - The whole state of the counter should be in the Redux store.
- Second page:
  - The second page should contain a list with all the numbers which were present in the counter up to that point and a navigation button to go back to the counter page.

- Everything needs to be unit tested.
- For navigation React Router should be used.
- A bundler needs to be in place, which will output production ready code into a "dist" folder.
(preferably Webpack but you can use something else as well)

#### Technology stack to be used:

- React
- Redux
- React Router
- Jest + Enzyme (if you feel more at home with Mocha, Jade and Sinon, you can use this stack as well)
- Webpack or any other alternative
- Any other helper library
