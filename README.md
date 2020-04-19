# Boilerplate React + TypeScript

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Configuration
The module uses [config](https://www.npmjs.com/package/config) for loading configuration entries.

In the `config` directory:

- Consult/update `custom-environment-variables.json` for loading values via environment. This overrides any value set in files defined below.
- Create `local.json` for local config.
- Consult/update `development.json` for values at development. (The default env)
- Consult/update `testing.json` for values at testing. `NODE_CONFIG_ENV` must be set to `testing` for this.
- Consult/update `staging.json` for values at staging. `NODE_CONFIG_ENV` must be set to `staging` for this.
- Consult/update `production.json` for values at production. `NODE_CONFIG_ENV` must be set to `production` for this.
- Consult/update `default.json` for **constant values only**.

**INFO:** `local*` files allows you to manually provide config during development and are set not to be tracked by VCS. Any environment can be overridden locally via `local-{env}.json`.

**INFO:** Read more about in what order the config entries are loaded [here](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order).

**Entries**

Only `public.*` entries are accessible via client. Entries marked with `REQUIRED` are essential for getting the app up and running. Each entry here is an object notation and is provided with short description.

**NOTE:** Entries with `REQUIRED` needs to be manually provided either via `local*.json` during development or in environment variables.

- `logger.console` `Boolean` - For enabling registration of `Console` as logger transport. (Default: `true`)
- `papertrail.host` `String` - If provided, logging via [Papertrail](https://papertrail.com) will be enabled.
- `papertrail.port` `String` - If provided, logging via [Papertrail](https://papertrail.com) will be enabled.
- `papertrail.program` `String` - Papertrail program. Useful for prefixing log messages with custom namespace.
- `papertrail.handleExceptions` `Boolean` - For enabling logging of un-handled exceptions via papertrail. (Default: `false`)
- `public.env` `String` - Environment for the app
- `public.apiEndpoint` `String` - URL for API endpoint.
- `public.sentryDSN` `String` - API key for [Sentry](https://sentry.io)
- `public.sentryENV` `String` - Environment for [Sentry](https://sentry.io)
- `www.port` `String` - Port for listening incoming HTTP connection.

## Linting

Added Linting using eslint
Run `npm run lint` to run linting

## Unit tests

Added Unit testing using Jest, Enzyme
Run `npm run test` to run test cases


## Features

- Complete codebase is using React Hooks
- TypeScript support, Webpack 4
- React Router with Protected Routes
- Error reporting via Sentry.
- Unit Testing using Jest, Enzyme
- Continuous Integration using CircleCI
- Internationalization support `react-i18next (i18next)`
- Dependency Injection using React Context (see `src/app/helpers/dependency.context.tsx`)
- Heroku deployment-ready (see `app.json` and `Procfile`)
