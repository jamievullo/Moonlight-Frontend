class CreatePlanets < ActiveRecord::Migration[6.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :size
      t.string :distance
      t.string :orbital_period
      t.string :day_length
      t.string :gravity
      t.string :link

      t.timestamps
    end
  end
end
