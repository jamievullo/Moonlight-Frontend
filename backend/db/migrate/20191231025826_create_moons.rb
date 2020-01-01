class CreateMoons < ActiveRecord::Migration[6.0]
  def change
    create_table :moons do |t|
      t.string :name
      t.string :size
      t.string :orbital_period
      t.string :gravity
      t.string :description
      t.string :link
      t.integer :planet_id

      t.timestamps
    end
  end
end
