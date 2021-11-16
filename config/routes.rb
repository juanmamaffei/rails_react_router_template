Rails.application.routes.draw do
  root 'pages#index'
  # Leave /rr routes to react router
  match '/rr/*path', to: 'pages#index', via: :all
end
