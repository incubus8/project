class GameSerializer < ActiveModel::Serializer
  attributes :id, :home_id, :away_id, :date, :result, :home_score, :away_score
end
