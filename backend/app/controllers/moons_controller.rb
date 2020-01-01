class MoonsController < ApplicationController

    def index
        moons = Moon.all
        render json: moons
    end

    def show
        moon = Moon.find_by(id: params[:id])
        render json: moon
    end

end
