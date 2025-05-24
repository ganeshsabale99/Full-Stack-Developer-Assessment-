import { Link } from 'react-router-dom';

const ShipStatusCard = ({ ship }) => {
  return (
    <div className="card">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{ship.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            ship.status === 'Active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {ship.status}
          </span>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          {ship.type} • {ship.flag} • IMO {ship.imo}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <span className="text-xs text-gray-500">Year Built</span>
            <p className="font-medium">{ship.yearBuilt}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Tonnage</span>
            <p className="font-medium">{ship.grossTonnage.toLocaleString()} GT</p>
          </div>
        </div>
        
        <Link 
          to={`/ships/${ship.name}`} 
          className="btn btn-outline w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShipStatusCard;