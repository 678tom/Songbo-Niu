import csv
import json

data_list = []

with open("prisma/seed/data.csv") as csvfile:
    csvfile.readline()
    businesses = csv.reader(csvfile, delimiter=',')
    for business in businesses:
        business_dict = {
            "business_name": business[0],
            "business_category": business[3],
            "service": business[6],
            "location": business[8],
            "workshops": True if business[9] == "Yes" else False,
            "podcast": True if business[10] == "Yes" else False,
            "course_referral": True if business[11] == "Yes" else False,
            "social_media_handle": business[12],
            "giveaway_interest": True if business[13] == "Yes" else False,
            "website": business[14],
            "description": business[15],
        }
        data_list.append(business_dict)

with open("business_data.json", "w") as outfile:
    json_object = json.dumps(data_list, indent = 4)
    outfile.write(json_object)

