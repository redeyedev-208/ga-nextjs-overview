## NextJS App with Prisma, Dynamic Routing, and Render Cloud Services
In this project we have set up a NextJs project to allow CRUD functionality. 
With this project you can see how the standard counter example is being handled in NextJs. 

We are also calling a drink API not that I am huge drinker it is just that the API is easy to use. 
For our Prisma tab we won't be able to see anything in Production as this is only available in local development. 
Routing we are validating and catching errors as needed. 

Visual displays of toasts are also used for the attempt in trying to click on the counter when it is at zero. 
One great way to handle forms in React is via the new hook called "useFormStatus" which is pretty cool I think. 
Feel free to pull down the code and have fun, with it. 
___

## Packages
To ensure the project will run make sure to pull down the code and run `npm install` this will make sure that all the needed packages are pulled and that your local environment has all the needed versions or NodeJS, React, NextJS and everything else. 

Look inside the `package.json` file to see what packages are needed. 

<b>Prisma</b>
The Prisma tab won't display anything in Production so you will need to run the following command: `npx prisma studio`
With this command running and the project running you will now be able to see any newly added tasks that are in the db to display correctly. 
You'll need to change the setting though as we are live in production, initially an `SQLite` db was used but for Production I went with `PostGres`. 

___

## External Services
We are using Render which has a 30 day free tier before upgrading. I am really liking the layout of the service it is visually appealing and easy to use. 
- [Render Cloud Hosting](https://render.com/)

![render-dashboard-for-project](https://github.com/redeyedev-208/ga-nextjs-overview/assets/60634649/21a9fd86-3101-4eaa-9583-590620047685)

- [Vercel](https://vercel.com/)
- [Prisma](https://www.prisma.io/)
- [The Cocktail DB](https://www.thecocktaildb.com/api.php)

___

## Deployed App to Vercel
Here is a screen shot along with the url link to the live project. 

![next-js-over-view-main](https://github.com/redeyedev-208/ga-nextjs-overview/assets/60634649/56b3e77f-a38e-4888-95c4-89d7b2a18cfc)



[NextJs App deployed to Vercel](https://vercel.com/gil-aguilars-projects/ga-nextjs-overview)
