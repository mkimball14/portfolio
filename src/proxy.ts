import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:5174', 'http://localhost:5173'],
  credentials: true
}));

// Proxy middleware configuration
app.use('/tableau', createProxyMiddleware({
  target: 'https://public.tableau.com',
  changeOrigin: true,
  pathRewrite: {
    '^/tableau': ''
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add CORS headers to the response
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
  }
}));

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
}); 