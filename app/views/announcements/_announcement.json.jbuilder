json.extract! announcement, :id, :title, :body, :category, :created_at, :updated_at
json.url announcement_url(announcement, format: :json)
