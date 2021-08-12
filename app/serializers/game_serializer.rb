class GameSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :opponent_id, :date
end
