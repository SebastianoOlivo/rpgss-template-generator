class Faction < ApplicationRecord
    belongs_to :legion
    has_many :armor
end
