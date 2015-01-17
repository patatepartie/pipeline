class PeopleController < BaseController

  private
    def person_params
      puts "underscored #{params}"
      params.require(:person).permit(:first_name, :last_name, :coolness_factor)
    end

    def query_params
      params.permit(:first_name, :last_name)
    end
end
