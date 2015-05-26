require 'rails_helper'

RSpec.describe Place, type: :model do

  context "Instance Methods" 

    let(:place){Place.new("Oregano","btwn N. 8th & N. 7th St", "www.oreganowilliamsburg.com", "Italian", "S64xMN", "(718) 599-5988")}

    it "has a name" do
      expect(place.name).to eq("Oregano")
    
    end

    it "has cross streets" do
      expect(place.cross_streets).to eq("btwn N. 8th & N. 7th St")
    
    end

    it "has a URL" do
      expect(place.url).to eq("www.oreganowilliamsburg.com")
    
    end

    it "has a category" do
      expect(place.category).to eq("Italian")
    
    end

    it "has a foursqure id" do
      expect(place.foursquare_id).to eq("S64xMN")
    
    end

    it "has a phone number" do
      expect(place.phone).to eq("(718) 599-5988")
    
    end

end