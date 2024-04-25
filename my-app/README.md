# Project Notes

## Prop Drilling

the process of passing data from one component to another through multiple layers of intermediary components using props. It typically occurs in deep component hierarchies where certain pieces of data or callbacks need to be available to nested components that are several layers down the component tree. 

This is sometimes unavoidable, but there are some solutions, such as using a global state managment library like Recoil (we do in this project). 
We can also use the Context API in React to solve this problem. 

## Static Site Generation (SSG)

Generate the full HTML for the page at build time rather than runtime. This is for parts of our website that don't change, unlike
SSR (Server Side Rendering) which is for dynmaic items, but still faster that rendering JSX on the client. Next.js offers this by default.

## Data Handling

For our data, we will use our Firebase DB for our dynamic data and a local database for our static data.

**Static Data:** It makes the most sense for our static data to be stored within a file in our project, especially since this website is still at small scale. 
To accomplish this, we defined the type of a problem, just a Javascript object that has keys for each piece of data that constitutes a problem.
With that definition, we were able to define each problem in a separte file, filling out the attributes as defined by our type. After that, we drilled the data
through props into the correct spot in the component hierarchy. 
---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
