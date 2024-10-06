import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, BarElement, LinearScale } from 'chart.js';
import './MainDashboard.css';

// Register the components needed for the chart
Chart.register(CategoryScale, BarElement, LinearScale);

const MainDashboard = () => {
  const [treeData, setTreeData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/trees');
        const result = await response.json();
        setTreeData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!treeData) {
    return <div>Loading...</div>;
  }

  const locations = treeData.map((tree) => tree.location);
  const treeCounts = treeData.map((tree) => tree.count);

  const chartData = {
    labels: locations,
    datasets: [
      {
        label: 'Trees Planted',
        data: treeCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Location',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Trees',
        },
      },
    },
  };

  const nextImage = (index, photosLength) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photosLength);
  };

  const prevImage = (index, photosLength) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photosLength) % photosLength);
  };

  return (
    <div className="dashboard-container">
      <h1>Tree Plantation Dashboard</h1>
      <div className="chart-section">
        <h2>Tree Count by Location</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="info-cards">
        <div className="card">
          <h3>Total Trees Planted</h3>
          <p>{treeData.reduce((sum, tree) => sum + tree.count, 0)}</p>
        </div>
        <div className="card">
          <h3>Number of Locations</h3>
          <p>{treeData.length}</p>
        </div>
        <div className="card">
          <h3>Latest Planting Date</h3>
          <p>{new Date(Math.max(...treeData.map((tree) => new Date(tree.datePlanted)))).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="images-section">
        <h2>Images of Trees Planted</h2>
        {treeData.map((tree, index) => (
          <div key={tree._id} className="location-section">
            <h3>{tree.location}</h3>
            <div className="images-container">
              <button
                className="carousel-button left"
                onClick={() => prevImage(index, tree.photos.length)}
              >
                &#10094;
              </button>
              <div className="carousel-wrapper" style={{ transform: `translateX(-${currentImageIndex * 210}px)` }}>
                {tree.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`Tree at ${tree.location}`}
                    className="tree-image"
                  />
                ))}
              </div>
              <button
                className="carousel-button right"
                onClick={() => nextImage(index, tree.photos.length)}
              >
                &#10095;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;
