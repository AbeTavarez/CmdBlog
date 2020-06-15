Rails.application.routes.draw do
  #resources:::::::::::::::::::::
  resources :users 
    resources :articles do
      resources :comments
    end
  resources :categories
 
  

  #:::::Authentication routes:::::::
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/userArticles', to: 'articles#userArticles'
  # root 'pages#home'
  get 'about', to: 'pages#about'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end