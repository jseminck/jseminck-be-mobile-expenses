# React Native AWS

This repository contains a small react-native application that allows me to log-in to my API server, see the status of my Amazon instances, and start or stop them based on their current status.

### Configuration File

It's necessary to create a `config.json` file in the `src` directory.

For development purposes, a `testUser` can be set-up that overrides the username and password in the login screen, to ease the development by not having to repeat the credentials every time.

See `config.example.json` for an example.
```
{
    "navigation": "tabs|swiper",
    "testUser": {
        "username": "joachim@seminck.be",
        "password": "Some password"
    }
}
```

### Run

* `npm run start` via cmd
* Run via XCode (build and run on a simulator)

To run on a device, connect to laptop and change the URL in `AppDelegate.m` to match the local laptop ip (instead of using localhost).

### Screenshots

![Tabs](https://github.com/jseminck/react-native-github-feed/blob/master/screenshots/aws.gif)
