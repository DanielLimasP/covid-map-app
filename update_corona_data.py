import subprocess
import shutil, os
import datetime
import time
import send2trash
from pathlib import Path

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
    for folder, subfolders, files in os.walk(corona_map_app_dir / 'public' ):
        print("Folder {}".format(folder))

        for subfolder_file in subfolders:
            print("Subfolder {}".format(subfolder_file))

        for file in files:
            print("File {}".format(file))

        print()

def copy_data():
    if corona_charts_dir.exists() and corona_map_app_dir.exists():
        public = corona_map_app_dir / 'public'
        if public.exists():
            shutil.rmtree(public)
        shutil.copytree(corona_charts_dir / 'data', corona_map_app_dir / 'public')
    else:
        print("At least one of the needed folders is absent. Please relocate it or clone the repository again")

    print("Copying process finished!")

def update_repo():
    hour, minute, dd, mm, yyyy = get_date()
    if len(str(minute)) == 1:
        minute = "0" + str(minute)
    d = "{}:{} {} {} {}".format(hour, minute, dd, mm, yyyy)
    #print("The date is: {}:{} {} {} {} ".format(hour, minute, dd, mm, yyyy))
    # Commit and display the status of the repo
    subprocess.Popen("git add *", shell = True)
    time.sleep(2)
    subprocess.Popen("git status", shell = True)
    time.sleep(2)
    subprocess.Popen("git commit -a -m \"{}:{} {}/{}/{}\"".format(hour, minute, dd, mm, yyyy), shell = True)
    time.sleep(2)
    subprocess.Popen("git push origin master", shell = True)
    time.sleep(8)

if __name__ == "__main__":
    copy_data()
    display_files()
    update_repo()