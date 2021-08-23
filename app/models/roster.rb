class Roster < ApplicationRecord
    belongs_to :player
    belongs_to :team

    def format_json
        {
            id: self.id,
            player_id: player.id,
            team_id: team.id,
            player: 
                {
                    name: self.player.name,
                },
            team: 
                {
                    team: self.team.name
                }
        }
    end

end
