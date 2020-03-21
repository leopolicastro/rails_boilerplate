# frozen_string_literal: true

Rails.application.routes.draw do
  authenticated :user, ->(u) { u.admin? } do
    resources :announcements

    namespace :admin do
      resources :users
      resources :announcements

      root to: 'announcements#index'
    end
  end

  authenticated :user do
    resources :announcements, only: %i[index show]
  end

  devise_for :users
  get 'welcome/index'
  resource :api_token
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
