# -*- coding: utf-8 -*-
"""
Created on Fri Oct 19 08:49:44 2018

@author: Arnab Gupta
"""

import numpy as np
import csv

for i in range(1984,2017):
    with open(str(i)+'.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',',quotechar='|', quoting=csv.QUOTE_MINIMAL)
        for j in range(1,53):
            print(j)
            if j<10:
                dirf="data\\sea_ice_age\\sea_ice_age_data\\"+str(i)+"\\iceage.grid.week."+str(i)+".0"+str(j)+".n.v3.bin"
            else:
                dirf="data\\sea_ice_age\\sea_ice_age_data\\"+str(i)+"\\iceage.grid.week."+str(i)+"."+str(j)+".n.v3.bin"
            f = open(dirf, "r")
            a = np.fromfile(f, dtype=np.uint8)
            tot_ice=0;
            X=[0 for i in range(5)]
            for k in range(len(a)):
                if a[k]!=254 and a[k]!=255 and a[k]!=0:
                    tot_ice=tot_ice+1;
                    if a[k]==5:
                        X[0]=X[0]+1
                    elif a[k]==10:
                        X[1]=X[1]+1
                    elif a[k]==15:
                        X[2]=X[2]+1
                    elif a[k]==20:
                        X[3]=X[3]+1
                    elif a[k]>=25:
                        X[4]=X[4]+1
            for k in range(5):
                X[k]=X[k]/tot_ice;
            writer.writerow(X)
    print(i);
    
        
