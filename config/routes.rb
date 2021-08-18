Rails.application.routes.draw do
  
  resources :games
  resources :rosters
  resources :teams
  resources :players
  resources :log_in, only: [:create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "wow", to: "games#abracadabraca"
  post '/signin', to: "players#signin"
  post '/signup', to: "players#signup"
  get '/me', to: "players#me"
end
