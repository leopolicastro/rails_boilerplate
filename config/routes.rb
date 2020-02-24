# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  authenticated :user, ->(u) { u.admin? } do
    namespace :admin do
      resources :users

      root to: 'users#index'
    end
  end

  get 'welcome/index'
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'welcome#index'
end
