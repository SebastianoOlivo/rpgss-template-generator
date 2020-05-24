# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200520194302) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armors", force: :cascade do |t|
    t.bigint "faction_id"
    t.string "name", null: false
    t.string "rank", null: false
    t.boolean "available", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["faction_id"], name: "index_armors_on_faction_id"
  end

  create_table "characters", force: :cascade do |t|
    t.bigint "armor_id"
    t.bigint "legion_id"
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["armor_id"], name: "index_characters_on_armor_id"
    t.index ["legion_id"], name: "index_characters_on_legion_id"
  end

  create_table "factions", force: :cascade do |t|
    t.bigint "legion_id"
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["legion_id"], name: "index_factions_on_legion_id"
  end

  create_table "legion_generalities", force: :cascade do |t|
    t.bigint "legion_id"
    t.text "generality", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["legion_id"], name: "index_legion_generalities_on_legion_id"
  end

  create_table "legions", force: :cascade do |t|
    t.string "name", null: false
    t.string "image", null: false
    t.string "quote", null: false
    t.text "summary", null: false
    t.string "hierarchy", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.boolean "isActive", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "armors", "factions"
  add_foreign_key "characters", "armors"
  add_foreign_key "characters", "legions"
  add_foreign_key "factions", "legions"
  add_foreign_key "legion_generalities", "legions"
end
