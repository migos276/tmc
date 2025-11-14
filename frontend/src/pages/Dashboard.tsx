import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <motion.div 
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Bienvenue sur CamMarket+</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Marché', icon: '🛒', path: '/market' },
          { title: 'Emplois', icon: '💼', path: '/jobs' },
          { title: 'Contenus', icon: '📚', path: '/content' },
          { title: 'Horoscope', icon: '✨', path: '/horoscope' },
          { title: 'Groupes', icon: '👥', path: '/groups' },
          { title: 'Admin', icon: '⚙️', path: '/admin' },
        ].map((module, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl mb-4">{module.icon}</div>
            <h2 className="text-xl font-bold text-gray-800">{module.title}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
