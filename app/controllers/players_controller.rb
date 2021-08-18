class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players
    end

    def show
        player = Player.find_by(id: params[:id])

        if player
            render json: player.format_json
        else
            render json: {error: "No such player"}, status: :not_found
        end
    end

    def create
        player = Player.create(player_params)
        if Player.valid?
            render json: {id:player.id, name: player.name}, status: :created
        else
            render json: {error: player.errors.full_messages}
        end
    end

    def update
        player = Player.find(params[:id])
        player.update(player_params)

        render json: player
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        render json: player
    end


    private

    def player_params
        params.require(:player).permit(:email, :name, :password)
    end
    
    
end
