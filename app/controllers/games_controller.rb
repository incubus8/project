class GamesController < ApplicationController

    def index
        render json: Game.all
    end

    def create
        game = Game.create!(game_params)
        # game.create
        if game
            render json: game
        else
            render json: {error: "Unable to Create"}, status: :unprocessable_entity
        end
    end

    def show
        games = Game.find_by(id: params[:id])
        if games
            render json: games
        else
            render json: {error: 'Game Not Found'}, status: :not_found
        end
    end

    def destroy
        games = Game.find_by(id: params[:id])
        if games
            games.destroy
            render json: "Removed game"
        else
            render json: {error: 'Game Not Found'}, status: :not_found
        end
    end

    def abracadabraca
        render json: {team: Team.all, player: Player.all, game: Game.all}
    end

    private

    def game_params
        params.require(:game).permit(:home_id, :away_id, :home_score, :away_score, :result, :date)
    end

end

