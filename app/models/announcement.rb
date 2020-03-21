# frozen_string_literal: true

# == Schema Information
#
# Table name: announcements
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Announcement < ApplicationRecord
  paginates_per 5
end
