Rails.application.routes.draw do
  #resources :places

  get '/places/:zipcode/:limit' => 'places#index'
    root 'places#home'
  # get 'places' => 'places#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

end
