import pandas as pd
import json

scraped = pd.read_fwf("data/problems_scraped.txt")
data = scraped.to_dict()
data = [{k: data[k][i] for k in data} for i in range(1, len(scraped))]

#TODO: Open data/tags.txt and add tags before opening
json.dump(data, open("data/problems.json", "w"))
