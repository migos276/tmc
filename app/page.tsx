'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Zap, Database, Box, Layers, Terminal, ArrowRight, Github, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  const services = [
    {
      name: 'Django Backend',
      status: 'ready',
      icon: Layers,
      port: '8000',
      url: 'http://localhost:8000',
      description: 'REST API with JWT Auth',
      color: 'bg-blue-500'
    },
    {
      name: 'React Frontend',
      status: 'ready',
      icon: Zap,
      port: '3000',
      url: 'http://localhost:3000',
      description: 'PWA with Framer Motion',
      color: 'bg-cyan-500'
    },
    {
      name: 'PostgreSQL',
      status: 'ready',
      icon: Database,
      port: '5432',
      url: 'localhost:5432',
      description: 'Primary Database',
      color: 'bg-green-600'
    },
    {
      name: 'Redis Cache',
      status: 'ready',
      icon: Zap,
      port: '6379',
      url: 'localhost:6379',
      description: 'Session & Cache Store',
      color: 'bg-red-500'
    },
    {
      name: 'Nginx Proxy',
      status: 'ready',
      icon: Box,
      port: '80/443',
      url: 'https://tmc.supahuman.site',
      description: 'Reverse Proxy & SSL',
      color: 'bg-amber-500'
    },
    {
      name: 'Docker Compose',
      status: 'ready',
      icon: Terminal,
      port: 'Multi',
      url: 'All Services',
      description: 'Container Orchestration',
      color: 'bg-indigo-500'
    }
  ]

  const deploymentSteps = [
    {
      step: 1,
      title: 'Initialize',
      command: './scripts/init.sh',
      description: 'Setup project structure and environment'
    },
    {
      step: 2,
      title: 'Configure',
      command: 'cp .env.example .env',
      description: 'Edit environment variables'
    },
    {
      step: 3,
      title: 'Build & Start',
      command: 'docker-compose up -d',
      description: 'Launch all services'
    },
    {
      step: 4,
      title: 'Migrate Database',
      command: 'docker-compose exec backend python manage.py migrate',
      description: 'Initialize database schema'
    },
    {
      step: 5,
      title: 'Setup SSL',
      command: './scripts/setup-ssl.sh',
      description: 'Configure Let\'s Encrypt certificate'
    },
    {
      step: 6,
      title: 'Deploy',
      command: './scripts/deploy.sh',
      description: 'Deploy to production'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CamMarket+</h1>
              <p className="text-xs text-slate-400">Docker Infrastructure</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-300">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-300">
              <Download className="w-4 h-4 mr-2" />
              Download ZIP
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Complete Docker Infrastructure for CamMarket+
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Production-ready deployment with Django, React, PostgreSQL, Redis, and Nginx configured for <span className="font-semibold text-blue-400">tmc.supahuman.site</span>
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">Django</div>
              <p className="text-slate-400 text-sm">REST API Framework</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">React</div>
              <p className="text-slate-400 text-sm">Progressive Web App</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">PostgreSQL</div>
              <p className="text-slate-400 text-sm">Relational Database</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">Nginx</div>
              <p className="text-slate-400 text-sm">Reverse Proxy & SSL</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex gap-8 border-b border-slate-700 mb-8">
          {[
            { id: 'overview', label: 'Service Status' },
            { id: 'deployment', label: 'Deployment Steps' },
            { id: 'architecture', label: 'Architecture' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Service Status Grid */}
      {activeTab === 'overview' && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card
                  key={idx}
                  className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${service.color} p-3 rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium text-green-400">Ready</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{service.description}</p>
                    <div className="space-y-2 pt-4 border-t border-slate-700">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Port:</span>
                        <span className="text-slate-200 font-mono">{service.port}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">URL:</span>
                        <span className="text-blue-400 font-mono text-xs truncate">{service.url}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
      )}

      {/* Deployment Steps */}
      {activeTab === 'deployment' && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="space-y-6">
            {deploymentSteps.map((item, idx) => (
              <Card
                key={idx}
                className="bg-slate-800 border-slate-700 hover:border-blue-600/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 mb-4">{item.description}</p>
                      <div className="bg-slate-900 rounded border border-slate-700 p-4 font-mono text-sm text-green-400 overflow-x-auto">
                        {`$ ${item.command}`}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Architecture */}
      {activeTab === 'architecture' && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <Card className="bg-slate-800 border-slate-700">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">System Architecture</h3>
              <div className="space-y-6">
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-blue-400 font-bold mb-3">Frontend Layer</h4>
                  <p className="text-slate-300 text-sm">React 18 PWA with Tailwind CSS, Framer Motion animations, and responsive design. Service Worker for offline support and PWA capabilities.</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-green-400 font-bold mb-3">Reverse Proxy Layer (Nginx)</h4>
                  <p className="text-slate-300 text-sm">SSL/TLS termination, HTTP/2 support, security headers (HSTS, CSP), compression, and request routing to backend and frontend services.</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-cyan-400 font-bold mb-3">Application Layer</h4>
                  <p className="text-slate-300 text-sm">Django 4.2 REST API with DRF, JWT authentication, modular app structure (users, market, jobs, content, horoscope, groups, payments). Running on Gunicorn with 4 workers.</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-red-400 font-bold mb-3">Data Layer</h4>
                  <p className="text-slate-300 text-sm">PostgreSQL 15 for persistent data storage, Redis 7 for caching and session management. Both with health checks and automatic restart policies.</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                  <h4 className="text-amber-400 font-bold mb-3">Infrastructure</h4>
                  <p className="text-slate-300 text-sm">Docker containers orchestrated by Docker Compose. Persistent volumes for database and media files. Integrated Lygos payment API, automated backup/restore scripts, and production-ready SSL setup.</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Issues</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Deployment</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Local Dev</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Production</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SSL Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Django API</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">React App</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Database</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Domain</h4>
              <p className="text-slate-400 text-sm mb-2">tmc.supahuman.site</p>
              <p className="text-slate-500 text-xs">Configured for production deployment with SSL/TLS</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex items-center justify-between text-slate-400 text-sm">
            <p>CamMarket+ - Complete Docker Infrastructure</p>
            <p>© 2025 Built with Docker & Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
