class RostersController < ApplicationController

    def index
        render json: Roster.all
    end

    def create
        roster = Roster.create!(roster_params)
        # Roster.create
        if roster
            render json: roster.team, status: :created
        else
            render json: {error: "Unable to Create"}, status: :unprocessable_entity
        end
    end

    def show
        rosters = Roster.find_by(id: params[:id])
        if rosters
            render json: rosters.format_json
        else
            render json: {error: 'Not Found'}, status: :not_found
        end
    end

    def destroy
        rosters = Roster.find_by(id: params[:id])
        if rosters
            rosters.destroy
            render json: "Removed from Roster"
        else
            render json: {error: 'Roster Not Found'}, status: :not_found
        end
    end

    private

    def roster_params
        params.permit(:player_id, :team_id)
    end

end
