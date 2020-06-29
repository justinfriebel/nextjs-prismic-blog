# Nextjs prismic website and blog

To use this as your website you'll need the following:

- git
- GitHub
- npm
- Vercel
- prismic

Click the green "Use this template" button above to create your copy of this repo.

Create an account, content types, and content in <a href="https://prismic.io/" target="_blank">prismic</a>. When creating each content type you can copy (and paste into prismic) the JSON for each content type from the custom_types directory. Go to Settings -> API & Security and setup a Permanent access token. You can leave this tab open so you can copy the token into your Vercel Environment Variables.

Create an account on <a href="https://vercel.com/" target="_blank">Vercel</a>. Use the git integration with the repo you created. When setting up your git integration it will ask you for environment variables, enter the ones listed below.

- Prismic API Endpoint Environment Variable
  - name: PRISMIC_API_ENDPOINT
  - value: copy & paste the API Endpoint URL from your prismic settings page
- Prismic Access Token Environment Variable
  - name: PRISMIC_ACCESS_TOKEN
  - value: copy & paste the Permanent access token from your prismic settings page
- Google Analytics Tracking ID Environment Variable
  - name: NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID
  - value: copy & paste the Tracking ID from Google Analytics

This only adds the environment variables for Production and Preview environments, you'll need to add them for your Development environment as well in Vercel's Settings -> General -> Environment Variables -> Development.

In Vercel go to Settings -> Git Integration and create a Deploy Hook so you can trigger new builds and deploys when you update content in prismic. Copy the Deploy Hook URL and add it to your prismic Settings -> Webhooks.

In your terminal go to the root of your repo and run `vercel env pull .env.local`. This will pull the local Environment Variables you setup in the Vercel Settings.

Make sure you have Node.js 10.13 or later, preferably the latest Node.js LTS release.

Run `npm i` to install dependencies.

Run `npm run dev` to start up your local dev environment.

Update colors.ts and config.ts with your prefrences.

Any updates pushed to master will deploy live! Any content updates made in prismic will trigger your Vercel webhook, rebuild and deploy.
