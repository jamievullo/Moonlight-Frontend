Rails.application.routes.draw do

  resources :planets do 
    resources :moons
  end

  resources :users, only: [:index, :create, :show]
  resources :moons, only: [:index, :show]
  resources :planets, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
