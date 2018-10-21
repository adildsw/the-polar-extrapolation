# -*- coding: utf-8 -*-
"""
Created on Mon Oct 15 19:18:32 2018

@author: anisha
"""

from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api
from json import dumps
#from flask_jsonpify import jsonify
import csv

app = Flask(__name__)
api = Api(app)

cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

#Ice Area Server Nodes (Month-Wise)
@app.route("/icearea/1", methods=['GET'])
def iceArea1(): return iceAreaMain('01')
@app.route("/icearea/2", methods=['GET'])
def iceArea2(): return iceAreaMain('02')
@app.route("/icearea/3", methods=['GET'])
def iceArea3(): return iceAreaMain('03')
@app.route("/icearea/4", methods=['GET'])
def iceArea4(): return iceAreaMain('04')
@app.route("/icearea/5", methods=['GET'])
def iceArea5(): return iceAreaMain('05')
@app.route("/icearea/6", methods=['GET'])
def iceArea6(): return iceAreaMain('06')
@app.route("/icearea/7", methods=['GET'])
def iceArea7(): return iceAreaMain('07')
@app.route("/icearea/8", methods=['GET'])
def iceArea8(): return iceAreaMain('08')
@app.route("/icearea/9", methods=['GET'])
def iceArea9(): return iceAreaMain('09')
@app.route("/icearea/10", methods=['GET'])
def iceArea10(): return iceAreaMain('10')
@app.route("/icearea/11", methods=['GET'])
def iceArea11(): return iceAreaMain('11')
@app.route("/icearea/12", methods=['GET'])
def iceArea12(): return iceAreaMain('12')
#Sea Level Server Nodes
@app.route("/sealevel", methods=['GET'])
def seaLevel0(): return seaLevelMain('0')
@app.route("/sealevel/rates", methods=['GET'])
def seaLevel1(): return seaLevelMain('1')
#Sea Ice Age Server Nodes
@app.route("/seaiceage", methods=['GET'])
def seaIceAge0(): return seaIceAge()
#Elevation Surface Server Nodes
@app.route("/elevationsurface", methods=['GET'])
def elevationSurface(): return elevSurf()

def elevSurf():
    import math
    
    parameters=request.args
    
    input_lat=float(parameters['lat'])
    input_lon=float(parameters['lon'])
    ret_data_wint=[];
    for k in range(2003,2010):
        filename='data\\elevation_h5\\winter\\'+str(k)+'.10.20\\info.csv'
        data=[]
        lonw=[]
        latw=[]
        with open(filename, newline='') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            for row in reader:
                latw.append(row[0])
                lonw.append(row[1])
                data.append(row[2])
            close_ptw=0;
            absdist=float('inf');
            for i in range(len(lonw)):
                dist=math.sqrt((input_lon-lonw[i])*(input_lon-lonw[i]) + (input_lat-latw[i])*(input_lat-latw[i]))
                if absdist==float('inf'):
                    comp1=float('inf')
                else:
                    comp1=int(absdist*100)
                if dist==float('inf'):
                    comp2=float('inf')
                else:
                    comp2=int(dist*100)
                if comp2<comp1:
                    absdist=dist;
                    close_ptw=i;
            ret_data_wint.append(data[close_ptw])
    ret_data_summ=[];
    for k in range(2003,2010):
        filename='data\\elevation_h5\\summer\\'+str(k)+'.03.20\\info.csv'
        data=[]
        lons=[]
        lats=[]
        with open(filename, newline='') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='|')
            for row in reader:
                lats.append(row[0])
                lons.append(row[1])
                data.append(row[2])
            close_pts=0;
            absdist=float('inf');
            for i in range(len(lons)):
                dist=math.sqrt((input_lon-lons[i])*(input_lon-lons[i]) + (input_lat-lats[i])*(input_lat-lats[i]))
                if absdist==float('inf'):
                    comp1=float('inf')
                else:
                    comp1=int(absdist*100)
                if dist==float('inf'):
                    comp2=float('inf')
                else:
                    comp2=int(dist*100)
                if comp2<comp1:
                    absdist=dist;
                    close_pts=i;
            ret_data_summ.append(data[close_pts])
    total_data=[{"Year": [2003,2004,2005,2006,2007,2008,2009], "Latitude": latw, "Longitude": lonw, "Elevation": ret_data_wint},{"Year": [2003,2004,2005,2006,2007,2008,2009], "Latitude": lats, "Longitude": lons, "Elevation": ret_data_summ}]
    return dumps(total_data)

def seaIceAge():
    dir_str='data/sea_ice_age/avg_ice_age.csv'
    data=[[],[],[],[],[]]
    with open(dir_str, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in reader:
            data[0].append(round(float(row[0]),2))
            data[1].append(round(float(row[1]),2))
            data[2].append(round(float(row[2]),2))
            data[3].append(round(float(row[3]),2))
            data[4].append(round(float(row[4]),2))
    years=[i for i in range(1984,2017)]
    total_data=[{"Year": years, "Avg percentage": data[0], "ice age": 1}, {"Year": years, "Avg percentage": data[1], "ice age": 2},{"Year": years, "Avg percentage": data[2], "ice age": 3},{"Year": years, "Avg percentage": data[3], "ice age": 4},{"Year": years, "Avg percentage": data[4], "ice age": 5}]
    return dumps(total_data)


def iceAreaMain(month):
    years, region, extent, area=[], [], [], [];
    
    dir_str='data/sea_ice_extent_area_data/N_' + month + '_extent_v3.0.csv'
    csvfile = open(dir_str, 'r')
    fieldnames = ("year","mo","data-type","region","extent","area")
    reader = csv.DictReader( csvfile, fieldnames)
    next(reader)
    ncount=0;
    for row in reader:
        ncount=ncount+1;
        years.append(int(row['year']))
        region.append(row['region'])
        extent.append(float(row['extent']))
        area.append(float(row['area']))
        
    dir_str='data/sea_ice_extent_area_data/S_' + month + '_extent_v3.0.csv'
    csvfile = open(dir_str, 'r')
    fieldnames = ("year","mo","data-type","region","extent","area")
    reader = csv.DictReader( csvfile, fieldnames)
    next(reader)
    for row in reader:
        years.append(int(row['year']))
        region.append(row['region'])
        extent.append(float(row['extent']))
        area.append(float(row['area']))
       
    for i in range(len(extent)):
        if extent[i]==-9999:
            if i>0 and i<len(extent)-1:
                extent[i]=(extent[i+1]+extent[i-1])/2;
            elif i==0:
                extent[i]=extent[i+1]-(extent[i+2]-extent[i+1]);
            else:
                extent[i]=extent[i-1]+(extent[i-1]-extent[i-2]);
        if area[i]==-9999:
            if i>0 and i<len(area)-1:
                area[i]=(area[i+1]+area[i-1])/2;
            elif i==0:
                area[i]=area[i+1]-(area[i+2]-area[i+1]);
            else:
                area[i]=area[i-1]+(area[i-1]-area[i-2]);
    
    
    total_data=[{"Year": years[0:ncount], "Area": area[0:ncount], "region": 'Arctic Circle'}, {"Year": years[ncount:len(years)], "Area": area[ncount:len(years)], "region": 'Antarctic Circle'}]
    return dumps(total_data)
    
def seaLevelMain(year):
    import csv
    import numpy as np
    import json 
    
    date, level, xpoints, ypoints=[], [], [], []
    X=[[[],[]] for i in range(26)]    
    
    x_count=0;
    dir_str='data/sea_level_data/sea_levels.csv';
    with open(dir_str, 'r') as csvfile:
        reader=csv.reader(csvfile,delimiter=',',quotechar='|')
        ref=0;
        for row in reader:
            if ref==0:
                ref=float(row[1])
            date.append(float(row[0]))
            level.append(round(float(row[1]) - ref,2))
            X[int(float(row[0]))-1993][0].append(float(row[1]))
            x_count=x_count+1;
            X[int(float(row[0]))-1993][1].append(x_count)
    
    if int(year)==0:      
        start=1993;
        str_date=[0 for i in range(len(date))]
        for i in range(len(date)):
            
            if int(date[i])!=start:
                #str_date[i]="";
                str_date[i]=str(start-1);
            else:
                str_date[i]=str(start);
                start=start+1;
        print(str_date)
        total_data=[{"Date": str_date, "SeaLevel": level}]
        return dumps(total_data)
       
    m=[0 for i in range(26)]
    years=[(i+1993) for i in range(26)]
    for i in range(26):
        compute=np.mean(X[i][1][:])*np.mean(X[i][0][:])
        compute=np.mean(np.multiply(X[i][1][:],X[i][0][:]))
    
        m[i] = ((np.mean(X[i][1][:])*np.mean(X[i][0][:])) - np.mean(np.multiply(X[i][1][:],X[i][0][:]))) / ((np.mean(X[i][1][:])*np.mean(X[i][1][:])) - np.mean(np.multiply(X[i][1][:],X[i][1][:]))) 
        
    total_data=[{"Year": years, "Rate": m}]
    return dumps(total_data);
    

        

if __name__ == '__main__':
     app.run(port=5002)