# Boilerplate code for running CMS

## Setup Locally

🔍 `cp .env.sample .env.local`
 - Add the secrets to the environment variable file.

🚀 `npm i`
🚀 `npm run dev`

### Features

#### Hygraph
 - http://localhost:3000/hygraph/

#### StoryBlok
 - http://localhost:3000/storyblok/

#### DotCMS
 - Run `curl -o docker-compose.yml https://dotcms.com/run/demo && docker-compose up`
 - To sign in to the administrative console, go to https://local.dotcms.site:8443/dotAdmin
 - use the following credentials: `admin@dotcms.com / admin`