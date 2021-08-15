class TeamsController < ApplicationController
    
    def index
        teams = Team.all
        render json: teams
    end

    def show
        team = Team.find_by(id: params[:id])
        render json: team
    end

    def create
        team = Team.create(team_params)
        if Team.valid?
            render json: team
        else
            render json: {message: team.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        team = Team.find_by(id: params[:id])
        team.update(team_params)

        render json: team
    end

    def destroy
        team = Team.find_by(id: params[:id])
        if team
            team.destroy
        else
            render json: { error: "Team not found" }, status: :not_found
        end
    end


    private

    def team_params
        params.require(:team).permit(:image, :name)
    end

end
