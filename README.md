# Board game app

This app is made made with `react` and `redux`.
Using `react-redux` (as a binder) and `redux-thunk` (as middleware).

Using the awesome [Board Game Atlas](https://www.boardgameatlas.com/api/docs) API.

#### Dislaimers:

- Using `yarn` as package manager, not `npm`.
- No `.env` file in the github - the fetching won't work without the api key. If you want to make it work and get the key, follow the instruction [**below**](#to-get-the-api-keys).

---

## To run the application

#### 1. If you don't have yarn installed

```bash
npm install -g yarn
```

#### 2. Install dependencies

```bash
yarn
# or
yarn install
```

#### 3. Make a `.env` file in the same directory. And put in this code:

```
REACT_APP_CLIENT_ID={here is your client id from the Board Game Atlas}

REACT_APP_CLIENT_SECRET={here is your client secret from the Board Game Atlas, currently not using}
```

It should look something like this:

```
REACT_APP_CLIENT_ID=12345

REACT_APP_CLIENT_SECRET=987654321
```

#### 4. And then start the app

```bash
yarn start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

## To get the api keys

1. Go to the [Board Game Atlas](https://www.boardgameatlas.com/api/docs/apps) website
2. Follow the instructions to make an app
3. Save your `client_id` and `client_secret` (currently not using)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
