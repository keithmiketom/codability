Codability::Application.routes.draw do
  devise_for :admins

  devise_for :users

  get "aptitude/start"

  get "aptitude/end"

  get "aptitude/question"

  get "aptitude/answer"

  get "aptitude/index"

  resources :answers


  resources :questions


  resources :details


  get "results/atai"

  get "results/cesi"

  get "results/survey"

  get "results/test"

  get "results/individual"
  
  get "results/index"

  resources :learns


  get "site/about"

  get "site/index"

  get "site/learn"


#test functionality

  get "aptitude/index"
  
  post "aptitude/start"
  
  get "aptitude/question"
  
  post "aptitude/question"
  
  post "aptitude/answer"
  
  get "aptitude/end"

  post "answers/create"
  
  post "answers/destroy"
  
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'site#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
