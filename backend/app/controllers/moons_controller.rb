class MoonsController < ApplicationController

    def index
        moons = Moon.all
        if params[:planet_id] #if planet id exists
            moons = Planet.find_by(id: params[:planet_id]).moons #finds planets moons with planet id
        else
            moons = Moon.all
        end
        #binding.pry
        render json: moons
    end

    def show
        moon = Moon.find_by(id: params[:id])
        #binding.pry
        render json: moon
    end

end
