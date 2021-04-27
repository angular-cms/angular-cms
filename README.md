# The project has relocated to https://github.com/typijs

# Angular Cms

The single app CMS based on Angular, Express, NodeJs and MongoDB.

**Status: Working In Progress, not ready to use in production**

## How it work?

Let assume you need build the dynamic website, in Angular CMS, we need to breakdown this page to properties, blocks like this

![cms-demo-site-breakdown](resources/images/cms-demo-site-breakdown.png)

So thinking of the architecture in which the site which breakdowns to many pages, each page will also breakdowns to blocks and properties. After that we will definite the page types, block types to build the site.

From this idea, in Angular CMS, we will definite the `Home Page` page type like this

```typescript
@PageType({
    displayName: "Home Page",
    componentRef: HomeComponent,
    description: "This is home page type"
})
export class HomePage extends PageData {

    @Property({
        displayName: "Logo",
        displayType: UIHint.Input
    })
    logo: string;

    @Property({
        displayName: "Latest Projects Page Root",
        displayType: UIHint.Input
    })
    latestProjectRoot: string;

    @Property({
        displayName: "Highlight Features",
        description: "This is highlight feature will be in banner area",
        displayType: UIHint.ContentArea
    })
    features: Array<any>;

    @Property({
        displayName: "Highlight Portfolios",
        displayType: UIHint.ContentArea,
    })
    portfolios: Array<any>;

    @Property({
        displayName: "Footer",
        displayType: UIHint.ContentArea
    })
    footer: Array<any>;

    @Property({
        displayName: "Footer Text",
        description: "This is footer text to show the copyright",
        displayType: UIHint.Xhtml
    })
    footerText: string;
}

```

Basically, we have just created the page type with properties: logo, features, portfolios, footer...

Then corresponding to page type, we will create a template (like Html template). In Angular CMS, this template actually is the Angular Component

```typescript
import { Component } from '@angular/core';
import { CmsComponent } from '@typijs/core';
import { HomePage } from './home.pagetype';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent extends CmsComponent<HomePage> {
    constructor() {
        super();
    }
}

```

Now when create the page with page type of `Home Page`, the `HomeComponent` is charge of rending the page's template

So after we done all things above, how to we create a page. In Angular CMS, we have the admin/editor UI to manage all pages like this

The Editor UI can be accessed via router: http://localhost:4200/cms/editor

The Admin UI can be accessed via router: http://localhost:4200/cms/admin

**Using the account: **

`admin/12345678` or `editor/1234qwer!`

## How it run
I created a GIF for demo purpose. It's just only 35MB (haha), so be patient for loading please.

> In case your device or browser can't load the this gif, there is a video you can see [Angular Cms Demo](https://www.youtube.com/watch?v=2Bq-7O1n9Gc)

![cms-demo-site](resources/images/angular-cms-demo.gif)

This Admin/Editor UI is build with plug-in architecture

![cms-demo-site](resources/images/component-based-extensible.png)

Each page you created has the unique friendly SEO URL like `/home-page`, `/home-page/about`, `/portfolio/article-1`...and the page is published, it can be access via those urls

Check it out with other nice features:

## Features

1. Page Types, Page Template, Page Properties
2. Block Types, Block Template, Block Properties
3. Media management: Upload multi files (images, doc, pdf, ...), resizing image, drag and drop...
4. Friendly URL
5. SEO (using Angular Universal)
6. Multi site
7. Modules architecture for extend the Admin UI

**and last but most important: the site you build with Angular CMS is actually the Angular App, it mean it is Angular from router, render, .... You will only work with Angular.**

However, it still need a storage to store data, right?. Angular CMS uses the API system which was built by ExpressJS (NodeJS framework) and MongoDB (using mongoose as ORM)

## Screenshots

**The minimal, simple, clear screen for Editor to edit content**

![cms-demo-site](resources/images/new-cms-editor.jpg)

**On page preview**

![cms-demo-site](resources/images/on-page-preview.jpg)

**Upload media by drag & drop**

![cms-demo-site](resources/images/upload-media-progress.jpg)

## Prerequisites
Must install:
* Node.js version 10+ or later
* MongoDB latest
  
Optional:
* MongoDB Compass Community (Optional)
* Visual Studio Code

## Module dependency

```mermaid
    graph TD
    A(cms core)-->B(cms modules)
    B-->C(cms portal)
    C-->Z(cms demo)
    X(cms api)-->Z

```

## How to setup for development

### Setup Npm Symlinks

For running examples, we need set up the [symlinks](https://docs.npmjs.com/cli/link.html) between modules as below:

1. Go to `cms-api` folders and run command 
```
    npm install
    npm link
    npm run build
``` 

2. Go to `cms-server` folder and run commands

```
    npm link @typijs/api
```

### Run in Dev Mode

1. First step, under `cms-server` folder, run the command
```
    npm install
    npm run dev
```
> If you have the issue installing such as the `@typijs/api` package is not found, temporary remove it in package.json, run install command then add it again

This command will run script to connect to mongo db, so make sure you have the correct path to your db.
For example, in my local, I have the db path like as `D:/ProgramData/MongoDB/data/db`
```
    mongod --dbpath D:/ProgramData/MongoDB/data/db
```

> If you install the MongoDB and run it as the service in Window, you can skip this step

2.  After the MongDb instance running, you can use the example data under the resources/db/dump/angularcms using the MongoDb command `mongorestore` to backup these collections

For example, under the `resources/db` folder, run command line 

```
mongorestore  dump/

``` 
to restore from a dump directory to a local mongod instance running on port 27017:


3. Final step, under `cms` folder, run the command sequentially
```
    npm install
    ng build core
    ng build modules
    ng build portal
    npm run dev
```
> Make sure you installed Angular CLI with `--global`

### Run Angular Universal (SSR) in Dev mode

```
    npm install
    ng build core
    ng build modules
    ng build portal
    ng build
    ng run cms-demo:server
```
Copy three folders `dist\core`, `dist\modules` and `dist\portal` into `cms\node_modules\@typijs` folder then run this script to start Server Site Render

```
    npm run start:ssr
```

If there is any change these libs `core` or `modules` or `portal` need to run build for each lib again then run 

```
ng run cms-demo:server
```

and start server site again

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to `angular-cms`, please write the [issue](https://github.com/angular-cms/angular-cms/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/angular-cms/angular-cms/issues) on GitHub.

## Versioning

We are current on Alpha version

## Authors

* **Hung Dang Viet** - *Initial work and maintain* - [danghung1202](https://github.com/danghung1202)

## Acknowledgments

* Inspiration from [Episerver CMS](https://www.episerver.com/)

## 📝 License

This project is [MIT](https://github.com/angular-cms/angular-cms/blob/dev/LICENSE) licensed.

```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



