
source 'https://rubygems.org'
gem 'rails', '>= 5.0.0.beta3', '< 5.1'
gem 'sqlite3'
gem 'puma'
gem 'active_model_serializers'
gem 'redis', '~> 3.0'

gem 'uglifier', '>= 1.3.0'
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails', '~> 4.1.0' # Needed by action cable
gem 'react-rails', '~> 1.6.1'

source 'https://rails-assets.org' do
  gem 'rails-assets-alt'
  gem 'rails-assets-axios'
  gem 'rails-assets-bootstrap-sass'
  gem 'rails-assets-react', require: false
  gem 'rails-assets-react-bootstrap'
  gem 'rails-assets-bootswatch'
end

group :development, :test do
  gem 'pry'
  gem 'pry-byebug'
  gem 'rspec-rails', '~> 3.0'
  gem 'factory_girl_rails'
end

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'quiet_assets'
  gem 'guard-livereload', '~> 2.5', require: false
  gem 'rack-livereload'
  gem 'rubocop'
end

group :test do
  gem 'shoulda-matchers', '2.8.0'
  gem 'shoulda-context'
  gem 'database_cleaner'
  gem 'simplecov', :require => false
  gem 'rails-controller-testing'
end
