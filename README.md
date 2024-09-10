This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Running the application

First, install the dependencies:

```bash
npm install
```

Then, add provided Builder.io public API key in `.env` or create a new file based on it called `.env.local`.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

This is a Next.js application using App Router and the latest version of Builder.io React SDK v2 (@builder.io/sdk-react).

We have a single catch-all route defined here [app/[[...slug]]/page.tsx](app/[[...slug]]/page.tsx), which is responsible for dynamically rendering Builder.io page model entries (based on https://www.builder.io/c/docs/integrating-builder-pages#add-a-builder-component-to-your-app).

We have registered a single `LiveChat` component in Builder.io - [components/liveChat.tsx](components/liveChat.tsx).
There is a section model defined inside the root layout of the application, which is a box for rendering the custom `LiveChat` component (defined here - [app/layout.tsx](app/layout.tsx)), on all of the application routes.

## Issue reproduction

1. Go to http://localhost:3000/live-chat-demo, you should see 404 page.
2. Go to https://builder.io/content/96c5e997c2c44393b619595da1407daa/edit?activeDesignerTab=0&activeLocale=Default, to see the preview mode of `live-chat-demo` section model.
3. Instead of 404, the application will properly display the contents of the section model in a preview mode, but you will see that there is a dummy Builder.io integration message "Hello! ...".
