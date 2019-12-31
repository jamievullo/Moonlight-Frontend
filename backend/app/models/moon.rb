class Moon < ApplicationRecord

    belongs_to :planet 
    has_many :pictures
    
end
