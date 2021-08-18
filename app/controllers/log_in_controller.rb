class LogInController < ApplicationController

    def create
        player = Player.find_by(name:params[:player][:name])
        if player && player.authenticate(params[:player][:password])
            render json {id: player.id, name: player.name}
        else
            render {message: ['incorrect username and/or password']}
        end
    end
end
