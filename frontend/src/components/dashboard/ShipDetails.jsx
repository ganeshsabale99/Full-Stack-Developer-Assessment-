import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ShipDetails = () => {
  const { shipName } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchShipDetails = async () => {
      try {
        const response = await api.ships.getByName(shipName);
        setShip(response.data);
      } catch (error) {
        console.error('Error fetching ship details:', error);
        setError('Failed to fetch ship details. The ship may not exist.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchShipDetails();
  }, [shipName]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-danger-500 text-xl mb-4">{error}</div>
        <Link to="/ships" className="btn btn-primary">
          Back to Ships
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      
      <Link 
        to="/ships" 
        className="inline-flex items-center text-primary-600 hover:text-primary-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to Ships
      </Link>
      
      
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{ship.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-primary-100">IMO: {ship.imo}</span>
              <span className="mx-2 text-primary-300">•</span>
              <span className="text-primary-100">{ship.type}</span>
              <span className="mx-2 text-primary-300">•</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                ship.status === 'Active' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {ship.status}
              </span>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Vessel Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Flag</h3>
                <p>{ship.flag}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Year Built</h3>
                <p>{ship.yearBuilt}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Gross Tonnage</h3>
                <p>{ship.grossTonnage.toLocaleString()} GT</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Deadweight</h3>
                <p>{ship.deadWeight.toLocaleString()} DWT</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Dimensions</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Length</h3>
                <p>{ship.length} m</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Beam</h3>
                <p>{ship.beam} m</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Ownership & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Owner</h3>
              <p>{ship.owner}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Operator</h3>
              <p>{ship.operator}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipDetails;