# Prerequisites
You will need the Qtum client for the OS you are testing on (or building against).

Download the [Qtum client](https://github.com/qtumproject/qtum/releases) for the correct OS and put the `bin/` folder in the corresponding dir:

    qtum/mac/bin
    qtum/win64/bin
    qtum/win32/bin
    qtum/linux64/bin
    qtum/linux32/bin

# Run Dev Environment
1. `git clone https://github.com/bodhiproject/bodhi-graphql.git`

2. `cd bodhi-graphql`

3. `npm run install-dep`

4. To start services either:

	`npm start` // starts API, sync
	or
	`npm run start-elec` // start API, sync, launch UI (static built files in ui/ folder)

5. App at `127.0.0.1:5555` or GraphiQL at `127.0.0.1:5555/graphiql`

# Release
We are currently using [Electron](https://github.com/electron/electron) and [Electron-Builder](https://github.com/electron-userland/electron-builder) to package our apps into native format depending on OS.

1. `npm run install-dep` to install all node modules from npm and yarn

2. Run the build script for the appropriate OS:

    npm run build:mac // creates dmg
    npm run build:win // creates exe
    npm run build:lin // creates appimage

3. Run the executable
