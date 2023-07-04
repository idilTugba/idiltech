import React, { useEffect, useRef, useState } from 'react';

const EllipseAnimation = (ellipseRef) => {
  
  useEffect(() => {
    const ellipseRef = document.getElementById('ellipse');
    const elements = document.querySelectorAll('.circle-item');
    const numElements = elements.length;
    const ellipseLength = ellipseRef.getTotalLength();
  
    const dAttribute = ellipseRef.getAttribute('d');
    const angleIncrement = (2 * Math.PI) / numElements;

    // elipsin merkez ve yarıçap kordinatları
    // Nokta dizisini almak için "M" ve "Z" karakterlerini kaldırma
    const pointString = dAttribute.slice(1, -1);

    const pointPairs = pointString.split("c").map(pair => pair.split(",").map(parseFloat));

    // Elipsin çevre noktalarını bulma
    const ellipsePoints = pointPairs.map(pair => pair);
    
    // X ve Y değerlerini ayıklama
    const xValues = ellipsePoints.map(point => point[0]);
    const yValues = ellipsePoints.map(point => point[1]);

    // Minimum ve maksimum X ve Y değerlerini bulma
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    
    // Merkez noktanın hesaplanması
    const centerX = (Math.abs(minX) + Math.abs(maxX)) / 2;
    const centerY = (Math.abs(minY) + Math.abs(maxY)) / 2;

    // Yarıçapların hesaplanması
    const radiusX = (Math.abs(maxX) - Math.abs(minX)) / 2;
    const radiusY = (Math.abs(maxY) - Math.abs(minY)) / 2;

    
    let startTime = Date.now();
    const duration = 360000;
    let timer;

    const updatePositions = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      elements.forEach((element, index) => {
        const angle = (radiusY + radiusX) + (2 * Math.PI * (elapsedTime / duration));

        element.style.left = (centerX + radiusX) * Math.cos((index+2)*angleIncrement) + 'px';
        element.style.top = (centerY + radiusY) * Math.sin((index+2)*angleIncrement) + 'px';

        const offsetX = Math.cos(angle) * 100;
        const offsetY = Math.sin(angle) * 100;

        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      if (elapsedTime < duration) {
        timer = setTimeout(updatePositions, 1000 / 100);
      }
    };

    timer = setTimeout(updatePositions, 1000 / 100);

    
  }, []);


  return (
      <ul className="circle-items">
        <li className="circle-item">PROJELER</li>
        <li className="circle-item">TIC TAC TOE</li>
        <li className="circle-item">HAVA DURUMU</li>
        <style jsx>{'.circle-items{position: absolute;top: 34%;left: 25%;width: 100%;height: 100%;}.circle-item{position:absolute; transform: translate(0,0); transition-duration: 15s; transition-timing-function: linear;}'}</style>
      </ul>
  );
};

export default EllipseAnimation;