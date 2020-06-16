# Nextjs prismic website and blog

To use this as your website you'll need the following:

- git
- GitHub
- npm
- Vercel
- prismic

Click the green "Use this template" button above to create your copy of this repo.

Create an account, content types, and content in [prismic](https://prismic.io/). When creating each content type you can copy (and paste into prismic) the JSON for each content type from the custom_types directory. Go to Settings -> API & Security and setup a Permanent access token. You can leave this tab open so you can copy the token into your Vercel Environment Variables.

Create an account on [Vercel](https://vercel.com/). Use the git integration with the repo you created. Go to that project's Settings -> General and add the following Environment Variables for all 3 environments:

- _name:_ PRISMIC*API_ENDPOINT \_value:* copy & paste the API Endpoint URL from your prismic settings page
- _name:_ PRISMIC*ACCESS_TOKEN \_value:* copy & paste the Permanent access token from your prismic settings page

In Vercel go to Settings -> Git Integration and create a Deploy Hook so you can trigger new builds and deploys when you update content in prismic. Copy the Deploy Hook URL and add it to your prismic Settings -> Webhooks.

In your terminal go to the root of your repo and run `vercel env pull .env.local`. This will pull the local Environment Variables you setup in the Vercel Settings.

Run `npm i` to install dependencies.

Run `npm run dev` to start up your local dev environment.
