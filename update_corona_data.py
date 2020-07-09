import subprocess
import shutil, os
import datetime
from pathlib import Path

p = Path.home()
covid_charts_dir_1 = p / 'Documents/Workspace/NodeJs/covid-charts/data/js' 
covid_charts_dir_2 = p / 'Documents/Workspace/NodeJs/covid-charts/data/json' 
covid_map_app_dir = p / 'Documents/Workspace/NodeJs/covid-map-app/public/data'

def get_date():
    currentDT = datetime.datetime.now()
    yyyy = currentDT.year
    mm = currentDT.month
    dd = currentDT.day
    return dd, mm, yyyy

def copy_data():
    for folderName, subfolders, filenames in os.walk(covid_charts_dir_1):
        print("The current folder is " + folderName)

        for subfolder in subfolders:
            print(subfolder)

        for filename in filenames:
            print("""
            Copying file %r 
            to directory %r
            """ %(filename, covid_map_app_dir))
            shutil.copy2(covid_charts_dir_1/filename, covid_map_app_dir)
            d = str(covid_map_app_dir)
            f = str(filename)
            git_add = "git add %r/%r" % (d,f)
            subprocess.Popen(git_add, shell = True)

    for folderName, subfolders, filenames in os.walk(covid_charts_dir_2):
        print("The current folder is " + folderName)
        
        for subfolder in subfolders:
            print(subfolder)
        
        for filename in filenames:
            print("""
            Copying file %r
            to directory %r
            """ %(filename, covid_map_app_dir))
            shutil.copy2(covid_charts_dir_2/filename, covid_map_app_dir)
            d = str(covid_map_app_dir)
            f = str(filename)
            git_add = "git add %r/%r" % (d,f)
            subprocess.Popen(git_add, shell = True)

def update_repo():
    dd, mm, yyyy = get_date()
    # We commit the recently changed files...
    git_commit = "git commit -a -m %s/%s/%s" %(dd, mm, yyyy)
    git_push = "git push origin master"
    subprocess.Popen(git_commit, shell = True)
    subprocess.Popen(git_push, shell = True)

# Fix the copying of the fileserinos
#copy_data()
update_repo()