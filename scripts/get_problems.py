import re
import requests
from tabulate import tabulate
from bs4 import BeautifulSoup

def response_handler(f):
    def fun(url):
        response = requests.get(url)
        if response.status_code != 200:
            raise ValueError(response.url + " returned status code " + response.status_code)
        soup = BeautifulSoup(response.text, "lxml")
        return f(soup)

    return fun

@response_handler
def handle_stats(soup):
    both = []
    one = []
    for name, stats in [("stats-both", both), ("stats-firstonly", one)]:
        tags = soup.findAll("span", attrs={"class": name})
        for tag in tags:
            try:
                stats.append(int(next(tag.children)))
            except ValueError:
                pass
    return both[::-1], one[::-1]

@response_handler
def handle_problem(soup):
    match = re.search("Day \d+: (.*?) \-", str(soup.find("h2")))
    return match.group(1)


def split_time(tag):
    s = next(tag.children)
    hours, minutes, seconds = s.split()[2].split(":")
    return int(seconds) + 60 * (int(minutes) + 60 * int(hours))

@response_handler
def handle_leaders(soup):
    tags = soup.findAll("span", attrs={"class": "leaderboard-time"})
    return [split_time(tags[0]), split_time(tags[99])]

if __name__ == "__main__":
    problems = []
    headers = None
    for year in range(2015, 2021):
        both_stars, one_star = handle_stats(f"https://adventofcode.com/{year}/stats")
        for day in range(1,26):
            title = handle_problem(f"https://adventofcode.com/{year}/day/{day}")
            first_place, last_place = handle_leaders(f"https://adventofcode.com/{year}/leaderboard/day/{day}")

            problem = {}
            problem["Title"] = title
            problem["Day"] = day
            problem["Year"] = year
            problem["Solves (both stars)"] = both_stars[day-1]
            problem["Solves (one star)"] = both_stars[day-1]
            problem["First solve (both stars)"] = first_place
            problem["100th solve (one star)"] = last_place
            problems.append(problem.values())
            print(f"Added {year} {day}")
            if headers == None:
                headers = list(problem.keys())

    print(tabulate(problems, headers=headers))
