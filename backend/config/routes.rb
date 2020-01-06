Rails.application.routes.draw do

  resources :planets do 
    resources :moons
  end

  resources :users, only: [:index, :create, :show]
  resources :moons, only: [:index, :show]
  resources :planets, only: [:index, :show]
end
