# Star Wars Characters

Web catalog of Star Wars Characters, using the data provided by [The Star Wars API](https://swapi.dev/), it is a [React](https://reactjs.org/) application built with [Next.js](https://nextjs.org/).
The components were built using [Storybook](https://storybook.js.org/) and they are styled using [styled components](https://styled-components.com/), the data retrieval logic was implemented using [axios](https://github.com/axios/axios) to fetch the data and [React Query](https://react-query.tanstack.com/) to cache and update the data.
There are different levels of automated tests built using [Jest](https://jestjs.io/).

## Data Loading and Caching

The app consists of two pages: 

- The main one that renders in the root route `/`; it shows the main list of characters.
- The character details page that renders in the `/[id]` route (where id is the ID of the character); it shows the character information. It also performs new requests to retrieve homeworld, vehicles, starships, species and films of the character.

The app uses Next.js `getServerSideProps` function to load the first _page_ of characters on the server-side, so the whole initial page is statically rendered. The characters' information already retrieved on the main page is cached, so most of the information is already available when entering a character details page. Movies, species, starships, planets and vehicle data are also cached after the first retrieval.

## Usage

### Development

You need to have [yarn](https://yarnpkg.com/) installed to build a development environment. It will take care of installing all the necessary tools.

1. Install the dependencies:
```sh
yarn
```

2. Start the development web server:
```sh
yarn dev
```

The web server will serve the app in 3000 port.

3. Build a production-ready version
```sh
yarn build
```

A new version of the app will be available.

### Tests

Unit tests are used to test all modules, [Jest](https://jestjs.io/) is used to run the tests and mock dependencies.

1. Run all unit tests:
```sh
yarn test
```

2. Watch any file change and run the unit tests

```sh
yarn test:watch
```

### Storybook

1. You can see the components in Storybook running:
```sh
yarn storybook
```

2. To build a production-version:
```sh
build-storybook
```

## Architecture

The system architecture was designed to decouple the main modules as much as possible and keep external dependencies isolated so that future changes would have the minimum impact possible.

### Model

The model is composed of types that reflect the data coming from the API service: `Character`, `Film`, `Planet`, `Specie`, `Starship` and `Vehicle`. All of them have fields for the necessary.
All the mentioned types are subtypes of `Resource` and share these fields:
- `id`: An positive integer based on the ID present in the resource's(character, film, etc.) URL.
- `type`: A string based on the resource part present in the URL can assume one of the following values: `people`, `films`, `planets`, `species`, `startships` or `vehicles`.

### Modules Dependency Diagram

This diagram shows the dependencies of the main modules:

![Emails Editor Component](/images/modules-dependency-diagram.jpg)

### SwApi

This module exposes fetch functions specifically made for the app's use cases. They use `axios` to send requests to the API:

| Fetchers | Description |
| --- | ---|
| `fetchCharacterList` | Retrieve a list of characters, it uses a pagination strategy imposed by the API. |
| `fetchResource` | Retrieve a single resource(character, film, etc.) based on the provided URL. |
| `fetchResourceById` | Retrieve a single resource based on the provided `id` and `type`. |

### SwReactQuery

This module exposes [Hooks](https://reactjs.org/docs/hooks-intro.html) specifically made for the app's use cases. They expose [React Query](https://react-query.tanstack.com/) capabilities like infinite scrolling and caching while abstracting it from the rest of the app.

| Hooks | Description |
| --- | ---|
| `useCharactersInfiniteQuery` | Hook that provides a list of `Character`'s and a method to fetch more data, used to implement the infinity scroll. |
| `useResourceQueryById` | Hook that retrieves a resource based on the provided `id` and `type` |
| `useResourceQuery` | Hook that retrieves a resource based on the provided URL. |

### Components

| Components | Description |
| --- | ---|
| `AttributesContainer` | Shows all the character information in a fun way |
| `Button` | Stylized button |
| `Card` | Stylized card container component, used as a div or a li |
| `CharacterLoader` | `AttributesContainer` wrapper that retrieves homeworld information from the API |
| `DataContainer` | Stylized container component, used as a ul, contains one or more `Card`'s |
| `Heading` | Stylized Heading component, used as an h1 or h2 |
| `Logo` | Our logo |
| `Main` | Renders the main application page with the list of characters |
| `NavBar` | Stylized Top navigation bar, contains the `Logo` |
| `ResourceCard` | Stylized card container that show a list of resources using a `ResourceList`, used as a div  |
| `ResourceItem` | Renders one resource, used as a li |
| `ResourceList` | Responsible for showing a list of resources; it contains one or more `ResourceItem`. Used as a div |
| `ViewContainer` | Stylized outer container component |
