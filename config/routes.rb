# frozen_string_literal: true

Rails.application.routes.draw do
  authenticated :user, ->(u) { u.admin? } do
    namespace :admin do
      resources :users

      root to: 'users#index'
    end
  end

  authenticated :user do
  end

  devise_for :users
  get 'welcome/index'
  resource :api_token
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
