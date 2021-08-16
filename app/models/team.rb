class Team < ApplicationRecord
    has_many :rosters
    has_many :players, through: :rosters


    def format_json
        {
            id: self.id,
            name: self.name,
            image: self.image,
            players: self.players.map do |player|
                {
                    id: player.id,
                    name: player.name,
                    email: player.email
                }
            end
        }   
    end

end
