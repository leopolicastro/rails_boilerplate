# README

This is a boilerplate Rails project that uses:

- `ruby ~> 2.7`
- `postgresql` as the database
- `webpacker` with `react`
- the `react-rails` gem [docs](https://github.com/reactjs/react-rails)
- the `administrate` gem [docs](https://github.com/thoughtbot/administrate)
- The `bootstrap` [docs](https://getbootstrap.com)
- The `faker` gem [docs](https://github.com/faker-ruby/faker)
- The `annotate` gem [docs](https://github.com/ctran/annotate_models)
- The `aws-sdk-s3` gem [docs](https://github.com/aws/aws-sdk-ruby)
- the `devise` gem [docs](https://github.com/heartcombo/devise)
- ActiveText enabled for.
- ActiveStorage enabled and configured for an S3 compatible bucket.

## Setup

- `bundle`
- `yarn`
- `rails db:create db:migrate db:seed` (with your Postgres server up and running)
- `EDITOR='vim' rails credentials:edit --environment=development` and configure S3 credentials (optional)
- `foreman start`

Sign in to admin account with `admin@admin.com` and to user account with `some@guy.com`.  
Password is defaulted to `password` for all seeded accounts.

## Deployment

- `heroku create your-app-name`
- `git push heroku master`
- `heroku run rails db:migrate`
- _optional_: `heroku run rails db:seed`
