# -*- coding: utf-8 -*-
"""
Created on Fri Oct 19 16:50:40 2018

@author: Arnab Gupta
"""

import numpy as np
import csv

with open('avg_ice_age.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',',quotechar='|', quoting=csv.QUOTE_MINIMAL)
    for i in range(1984,2017):
        avg=[0 for i in range(5)]
        with open('data\\sea_ice_age\\sea_ice_age_csv\\'+str(i)+'.csv', newline='') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            for row in reader:
                for i in range(5):
                    avg[i]=float(row[i])+avg[i]
            
            for i in range(5):
                avg[i]=avg[i]/0.52;
        writer.writerow(avg);                
