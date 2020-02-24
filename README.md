# README

This is a boilerplate Rails project that uses:

- `ruby ~> 2.7`
- `postgresql` as the database
- `webpacker` with `react`
- the `react_on_rails` gem
- the `administrate` gem [docs](https://github.com/thoughtbot/administrate)

## Setup

- `rails db:create` (with your Postgres server up and running)
- `bundle`
- `yarn`
- `rails s`

## Deployment

### The Node.js buildback must be added first or precompiling of assets may fail on Heroku: [See this issue](https://github.com/rails/webpacker/issues/1164#issuecomment-443474860)

- `heroku create your-app-name`
- `heroku buildpacks:set --index 1 heroku/nodejs`
- `heroku buildpacks:add heroku/ruby`
- `git push heroku master`
- `heroku run rails db:migrate`
- _optional_: `heroku run rails db:seed`
