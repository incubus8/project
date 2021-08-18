class ApplicationController < ActionController::API
  include ActionController::Cookies

    def authenticate       
      auth_header = request.headers["Authorization"]
      token = auth_header.split.last
      payload = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})[0]
      @current_user = Player.find_by(id: payload["player_id"])
  rescue
      render json: {errors: ["Not Authorized"]}, status: :unauthorized
  end
end
