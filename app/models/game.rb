class Game < ApplicationRecord
    belongs_to :team, class_name: 'Team'
    belongs_to :opponent, class_name: 'Team'
end
