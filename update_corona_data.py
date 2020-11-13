# Script to auto-update the info of the app
# Made by me. Now with fancy shmancy ANSI colors!

import subprocess
import shutil, os
import datetime
import time
import send2trash
from pathlib import Path

# ANSI COLORS:
RED = "\033[0;31m"
GREEN = "\033[0;32m"
CYAN = "\033[0;36m"
LIGHT_GRAY = "\033[0;37m"

home_dir = Path.home()
corona_charts_dir = home_dir / 'Documents/Workspace/nodejs/covid-charts'
corona_map_app_dir = home_dir / 'Documents/Workspace/nodejs/covid-map-app'

def get_date():
    currentDT = datetime.datetime.now()
    hour = currentDT.hour
    minute = currentDT.minute
    yyyy = currentDT.year
    mm = currentDT.month
    dd = currentDT.day
    return hour, minute, dd, mm, yyyy

def display_files():
    # Display the files inside data folder of covid-charts
    print()
    for folder, subfolders, files in os.walk(corona_map_app_dir / 'public' / 'data'):
        print(GREEN + "Folder {}".format(folder))

        for subfolder_file in subfolders:
            print(LIGHT_GRAY + "Subfolder {}".format(subfolder_file))

        for file in files:
            print(LIGHT_GRAY + "File {}".format(file))

        print()

def copy_data():
    if corona_charts_dir.exists() and corona_map_app_dir.exists():
        public_data = corona_map_app_dir / 'public' / 'data'
        if public_data.exists():
            shutil.rmtree(public_data)
        shutil.copytree(corona_charts_dir / 'data', corona_map_app_dir / 'public' / 'data')
    else:
        print(RED + "At least one of the needed folders is absent. Please relocate it or clone the repository again")

    print(CYAN + "Copying process finished!")

def update_repo():
    hour, minute, dd, mm, yyyy = get_date()
    if len(str(minute)) == 1:
        minute = "0" + str(minute)
    d = "{}:{} {} {} {}".format(hour, minute, dd, mm, yyyy)
    print(CYAN + "The current time and date is: {}:{} {} {} {} ".format(hour, minute, dd, mm, yyyy))
    print(LIGHT_GRAY)
    # Commit and display the status of the repo
    subprocess.Popen("git add *", shell=True)
    time.sleep(2)
    subprocess.Popen("git status", shell=True)
    time.sleep(2)
    subprocess.Popen("git commit -a -m \"{}:{} {}/{}/{}\"".format(hour, minute, dd, mm, yyyy), shell=True)
    time.sleep(2)
    subprocess.Popen("git push origin master", shell=True)
    time.sleep(14)
    print()
    print(GREEN + "Done!")
    print(LIGHT_GRAY)

if __name__ == "__main__":
    copy_data()
    display_files()
    update_repo()