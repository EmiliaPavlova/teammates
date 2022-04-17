## Task:
It’s a list of teammates that informs you when somebody is having a birthday. You can add new teammate using the form. The fields are validated, so it’s expected that a teammate has both first and last names and the birthday is a valid date. On the bottom of the form, there are Submit and Cancel buttons. The first one submits the form and adds new record if all inputs are valid, the second one closes the form and clears all fields.
- Rewrite the component using TypeScript and functional components syntax
- Disentangle the component and separate it into several components
- The business logic should be extracted from the component
- State should also be managed outside (you can use any solution you find suitable)
- Write tests covering the logic
- Additional functionality:
  - Process pressing Enter and Escape keys and map them onto Submit and Cancel buttons’ actions, respectively
  - Render day and month of birthday (omit the year) in human readable format (e.g., «Jun, 16») instead of age
  - Sort the list in the day-month order ignoring the year (we want to see the order of birthdays, and not the order of ages)
  - Add a new field into both form and the record that will hold the date a teammate joined the team. Render it near the birthday (don’t forget the year)
  - Render the form in a modal window
    * (optional) Let the list look like a table but without using table tag
    * (optional) Add the functionality to remove the teammate from the list:
Add a button at the end of each row
Before submitting the removal, ask a user to enter a required date when the teammate left the team and optional comment
Move the removed item into another list and render it under the list of active teammates
Specify there the teammate’s name, date of joining, date of leaving and the comment
If the list is empty don’t show the heading
#

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
