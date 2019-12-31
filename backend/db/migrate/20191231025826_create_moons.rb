class CreateMoons < ActiveRecord::Migration[6.0]
  def change
    create_table :moons do |t|
      t.string :name
      t.string :size
      t.string :orbital_period
      t.string :gravity
      t.string :link

      t.timestamps
    end
  end
end
