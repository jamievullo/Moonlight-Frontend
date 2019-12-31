class Planet < ApplicationRecord

    has_many :moons
    has_many :pictures 
    
end
