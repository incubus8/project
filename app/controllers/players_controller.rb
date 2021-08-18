class PlayersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authenticate, only: [:me, :update]

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

    def signin
        # byebug
        player = Player.find_by(name: params[:player][:name])
        
        if player && player.authenticate(params[:player][:password])
            token = JWT.encode({player_id: player.id}, 'secret', 'HS256')
            render json: {player: PlayerSerializer.new(player), token: token}
        else
            render json: { errors: 'incorrect username and/or password'}, status: :not_found
        end
    end 

    def signup
        newPlayer = Player.create(player_params)
        if newPlayer.valid?
            token = JWT.encode({ player_id: newPlayer.id }, 'secret', 'HS256')
            render json: { player: PlayerSerializer.new(newPlayer), token: token }, status: :created
        else
            render json: { errors: newPlayer.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def me
        render json: @current_user
    end

    def update
        @current_user.update(player_params)
        render json: @current_user
    end


    private

    def player_params
        params.require(:player).permit(:name, :email, :password)
    end
    
    
end
