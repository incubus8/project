class Team < ApplicationRecord
    has_many :rosters
    has_many :players, through: :rosters

    has_many :team_1, foreign_key: :team_id, class_name: 'Game'

    has_many :opponents, through: :team_1

    has_many :team_2, foreign_key: :opponent_id, class_name: 'Game'
    
    has_many :teams, through: :team_2

end
