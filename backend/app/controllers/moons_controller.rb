class MoonsController < ApplicationController

    def index
        moons = Moon.all
        if params[:planet_id]
            moons = Planet.find_by(id: params[:planet_id]).moons
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
