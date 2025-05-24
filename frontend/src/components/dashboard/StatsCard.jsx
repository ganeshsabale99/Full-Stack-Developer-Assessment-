import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const StatsCard = ({ title, value, change, changeType, color }) => {
  return (
    <div className="card p-5">
      <div className="flex items-center">
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">
              {title}
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
      <div className="mt-4">
        <div
          className={`flex items-center text-sm ${
            changeType === "increase" ? "text-success-500" : "text-danger-500"
          }`}
        >
          {changeType === "increase" ? (
            <ArrowUpIcon className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 flex-shrink-0" />
          )}
          <span className="ml-1">{change} from last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
