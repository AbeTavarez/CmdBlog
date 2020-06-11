Rails.application.routes.draw do
  #:::::Authentication routes:::::::
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  #resources:::::::::::::::::::::
  resources :categories
  resources :articles
  resources :comments
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end