import React, { useEffect } from 'react'
import { getAllMobileFood } from '../../api/mobileFood'

export default function Home() {

  useEffect(() => {
    // init map
    const BMapGL = window.BMapGL;
    var point = new BMapGL.Point(-122.405, 37.752);
    var map = new BMapGL.Map("container"); 
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true, 20);

    async function initMap() {
      const res = await getAllMobileFood();
      if (res.code === 1) {
        
        const { data } = res;

        if (data.length) {
          // define marks and descriptions of the map
          var mapPoints = data
          var i = 0;
          map.enableScrollWheelZoom(true);

          function markerFun (points, label, infoWindows) {
            var markers = new BMapGL.Marker(points);
            map.addOverlay(markers);
            markers.setLabel(label);
            markers.addEventListener("click", function (event) {
              map.openInfoWindow(infoWindows,points); // params:window & points, show window according to clicked points
            });
          }
          for (;i < mapPoints.length; i++) {
            var points = new BMapGL.Point(mapPoints[i].longitude, mapPoints[i].latitude); // create points according to the data
            var opts = {
              width: 250,
              height: 500,
              title: mapPoints[i].applicant
            };
            var label = new BMapGL.Label(mapPoints[i].applicant,{
              offset:new BMapGL.Size(10, -2)
            });
            const detailObjStr = mapPoints[i]
            var targetStr = ''
            for (let key in detailObjStr) {
              targetStr += `
                <div>
                  <span style="font-weight: bold">${key}</span>：${detailObjStr[key]}
                </div>`
            }
            var infoWindows = new BMapGL.InfoWindow(targetStr, opts);
            markerFun(points, label, infoWindows);
          }
        } else {
          alert('no data (please make sure you have run test.sql and the server-end)')
        }

        
      } else {
        alert(res.msg)
      }
    }
    initMap()
    
    // add map controls
    var scaleCtrl = new BMapGL.ScaleControl();
    var zoomCtrl = new BMapGL.ZoomControl();
    var cityCtrl = new BMapGL.CityListControl();
    map.addControl(scaleCtrl);
    map.addControl(zoomCtrl);
    map.addControl(cityCtrl);
  }, [])

  return (
    <>
      <div id="container" style={{ width: '100%', height: document.documentElement.clientHeight }}></div>     
    </>
  )
}
