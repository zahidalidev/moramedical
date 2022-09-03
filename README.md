
# Inventory System

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v6.14.17

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm run dev


## Languages & tools

### Templating

- [Material UI](https://mui.com/material-ui/getting-started/overview/) for some structuring.

### JavaScript

- [Next.js](https://github.com/vercel/next.js) is used for UI.
- [axios](https://www.npmjs.com/package/axios) for handling api calls.
- [eslint](https://eslint.org/) for better code quality.
- [formik](https://formik.org/) for form rendering.
- [prettier](https://prettier.io/) for maintaining code quality in project.
- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component) for rendering data in table format.
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) for adding loading skeleton for better UX.
- [react-toastify](https://www.npmjs.com/package/react-toastify) for flash notifications.
- [node-schedule](https://www.npmjs.com/package/node-schedule) for schedule events.

### CSS
- [SCSS](https://sass-lang.com/) is used to write futureproof CSS in nested form.

## Notes
- Implemented a proper login system where user can login to with email and password the dashboard.
- Added Data Table.
- Implemented create event feature.
- Added validation on create event form Form.
- Added ESLint and Stylelint for consistency and better code quality.
- Added Skeletons for better User Experience while waiting for response.
- Added toast for proper notifications.

## Future Work
- We can add proper Authentication Process where user can signup with email and password.
- We can add detailed test cases.
- We can add Profile page.
- We can add profile CRUD.
- We can make it mobile responsive.

## Points for umair bhai
- Login with gmail and facebook properly working and implmented using next-auth
- Events and Attendees pages are implmented using "Incremental Static Regeneration" and revalidating time is 10 seconds. so these pages are generating only once while building and can be rebuild after 10 seconds when user make request and then another users can see latest changes, this feature is only for production.
- Creating event usign formik with validations
- Stream all events data into events_history table using MySQl events.
- Sending alerts of upcoming events and if admin cancel any attendee by email.
- all the points in the feature section of documentaion are implemneted except message (because it was paid)


