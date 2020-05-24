class Legion < ApplicationRecord
    has_many :legion_generality
    has_many :faction
    has_many :character
end
