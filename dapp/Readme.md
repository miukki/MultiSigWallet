Ethereum Multisignature Wallet UI
===================

A web user interface for the [MultiSigWallet](https://github.com/gnosis/MultiSigWallet).

Requirements
-------------
* Node v5+
* [Grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

Install
-------------
```
npm install -g grunt-cli
npm install
npm run start
```

Managing Style Sheets
-------------
Style sheets are a bit weird. There are LESS files but they do not seem to be a part of the build process.

However the following appears to work:

```
npm install less -g

lessc less/bootstrap.less css/gnosis-bootstrap.css 
```

This will at least build `gnosis-bootstrap.css` from source files...

Test
-------------
```
npm test
```
