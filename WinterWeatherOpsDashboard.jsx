import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, TrendingDown, Cloud, Thermometer } from 'lucide-react';

const WinterWeatherOpsDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [stockIndex, setStockIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStockIndex(prev => (prev + 1) % stocks.length);
    }, 3000);
    return () => clearInterval(stockTimer);
  }, []);

  const stocks = [
    { symbol: 'KR', name: 'Kroger', price: 58.42, change: +2.3 },
    { symbol: 'WMT', name: 'Walmart', price: 96.18, change: +1.8 },
    { symbol: 'TGT', name: 'Target', price: 147.32, change: -0.5 },
    { symbol: 'ACI', name: 'Albertsons', price: 19.87, change: +3.1 },
    { symbol: 'GIS', name: 'General Mills', price: 63.24, change: +4.2 },
    { symbol: 'MDLZ', name: 'Mondelez', price: 60.15, change: +1.5 },
  ];

  const stores = [
    { name: 'Publix - Columbia (Forest Dr)', bread: 'CRITICAL', milk: 'LOW', status: 'yellow', lat: 34.0007, lng: -80.9738 },
    { name: 'Harris Teeter - Greenville', bread: 'ADEQUATE', milk: 'CRITICAL', status: 'yellow', lat: 34.8526, lng: -82.3940 },
    { name: 'Kroger - Charleston', bread: 'DEPLETED', milk: 'DEPLETED', status: 'red', lat: 32.7765, lng: -79.9311 },
    { name: 'Walmart Supercenter - Spartanburg', bread: 'LOW', milk: 'ADEQUATE', status: 'yellow', lat: 34.9496, lng: -81.9320 },
    { name: 'Food Lion - Rock Hill', bread: 'ADEQUATE', milk: 'ADEQUATE', status: 'green', lat: 34.9249, lng: -81.0251 },
    { name: 'Bi-Lo - Myrtle Beach', bread: 'CRITICAL', milk: 'CRITICAL', status: 'red', lat: 33.6891, lng: -78.8867 },
    { name: 'Piggly Wiggly - Beaufort', bread: 'LOW', milk: 'LOW', status: 'yellow', lat: 32.4316, lng: -80.6698 },
    { name: 'Publix - Lexington', bread: 'ADEQUATE', milk: 'LOW', status: 'green', lat: 33.9816, lng: -81.2362 },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'CRITICAL': return 'text-red-500 bg-red-950';
      case 'DEPLETED': return 'text-red-600 bg-red-900';
      case 'LOW': return 'text-yellow-500 bg-yellow-950';
      case 'ADEQUATE': return 'text-green-500 bg-green-950';
      default: return 'text-gray-500 bg-gray-800';
    }
  };

  const getStoreStatusColor = (status) => {
    switch(status) {
      case 'red': return 'bg-red-600';
      case 'yellow': return 'bg-yellow-500';
      case 'green': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const currentStock = stocks[stockIndex];

  const criticalCount = stores.filter(s => s.status === 'red').length;
  const warningCount = stores.filter(s => s.status === 'yellow').length;
  const operationalCount = stores.filter(s => s.status === 'green').length;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 font-mono">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 border-2 border-blue-700 rounded-lg p-6 mb-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/SCWX-Logo-Transparent.png`}
              alt="South Carolina Weather" 
              className="h-24 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-white tracking-wider mb-1">
                WINTER WEATHER OPERATIONS CENTER
              </h1>
              <p className="text-blue-300 text-lg">BREAD & MILK SUPPLY MONITORING SYSTEM</p>
              <p className="text-blue-400 text-sm mt-1">Built by Chris Jackson</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="text-sm text-blue-300">
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-900 border-2 border-red-600 rounded-lg p-4 mb-6 flex items-center gap-4 animate-pulse">
        <AlertTriangle className="w-8 h-8 text-yellow-400" />
        <div>
          <div className="font-bold text-xl text-white">WINTER WEATHER ALERT ACTIVE</div>
          <div className="text-red-200">Southern Panic Protocol Initiated - Multiple facilities reporting critical supply levels</div>
        </div>
      </div>

      {/* Live Stock Ticker */}
      <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-4 mb-6 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="font-bold text-blue-400 whitespace-nowrap">MARKET DATA:</div>
          <div className="flex items-center gap-6 animate-fadeIn">
            <span className="text-xl font-bold text-white">{currentStock.symbol}</span>
            <span className="text-gray-400">{currentStock.name}</span>
            <span className="text-2xl font-bold text-white">${currentStock.price.toFixed(2)}</span>
            <span className={`flex items-center gap-1 ${currentStock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {currentStock.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
              {currentStock.change >= 0 ? '+' : ''}{currentStock.change}%
            </span>
          </div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border-2 border-red-600 rounded-lg p-6">
          <div className="text-red-500 text-sm font-bold mb-2">CRITICAL STATUS</div>
          <div className="text-5xl font-bold text-white">{criticalCount}</div>
          <div className="text-red-300 text-xs mt-2">FACILITIES COMPROMISED</div>
        </div>
        <div className="bg-gray-900 border-2 border-yellow-600 rounded-lg p-6">
          <div className="text-yellow-500 text-sm font-bold mb-2">WARNING STATUS</div>
          <div className="text-5xl font-bold text-white">{warningCount}</div>
          <div className="text-yellow-300 text-xs mt-2">FACILITIES AT RISK</div>
        </div>
        <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-6">
          <div className="text-green-500 text-sm font-bold mb-2">OPERATIONAL</div>
          <div className="text-5xl font-bold text-white">{operationalCount}</div>
          <div className="text-green-300 text-xs mt-2">FACILITIES STABLE</div>
        </div>
        <div className="bg-gray-900 border-2 border-blue-600 rounded-lg p-6">
          <div className="text-blue-500 text-sm font-bold mb-2 flex items-center gap-2">
            <Cloud className="w-4 h-4" />
            WEATHER STATUS
          </div>
          <div className="text-3xl font-bold text-white flex items-center gap-2">
            <Thermometer className="w-8 h-8" />
            28°F
          </div>
          <div className="text-blue-300 text-xs mt-2">FREEZING CONDITIONS</div>
        </div>
      </div>

      {/* Store Status Grid */}
      <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          FACILITY STATUS REPORT
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {stores.map((store, idx) => (
            <div key={idx} className={`bg-gray-800 border-2 ${store.status === 'red' ? 'border-red-600' : store.status === 'yellow' ? 'border-yellow-600' : 'border-green-600'} rounded-lg p-4`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${getStoreStatusColor(store.status)} animate-pulse`}></div>
                  <div>
                    <div className="font-bold text-white text-lg">{store.name}</div>
                    <div className="text-gray-400 text-sm">Lat: {store.lat.toFixed(4)} | Lng: {store.lng.toFixed(4)}</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">BREAD STATUS</div>
                    <div className={`px-4 py-2 rounded font-bold text-sm ${getStatusColor(store.bread)}`}>
                      {store.bread}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">MILK STATUS</div>
                    <div className={`px-4 py-2 rounded font-bold text-sm ${getStatusColor(store.milk)}`}>
                      {store.milk}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>SCWX Winter Weather Operations Center | Real-time Supply Chain Monitoring</p>
        <p className="text-xs mt-1 text-gray-600">
          "Because Weather Matters" - Especially When It Comes to French Toast Supplies
        </p>
      </div>
    </div>
  );
};

export default WinterWeatherOpsDashboard;
