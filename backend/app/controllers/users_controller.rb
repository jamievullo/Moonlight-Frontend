class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create 
        #binding.pry
        user = User.create(user_params)
        render json: user, except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    private 

    def user_params
        params.require(:user).permit(:name)
    end

end
