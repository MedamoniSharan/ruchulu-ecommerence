# Backend Integration Setup

This project has been configured to use the deployed backend at:
**https://ruchulu-ecommerence-backend.onrender.com**

## Configuration Files

### Frontend
- **`frontend/env.config.js`** - Environment configuration
- **`frontend/src/config.js`** - Frontend configuration exports
- **`frontend/src/services/api.js`** - API service configuration

### Admin
- **`admin/env.config.js`** - Environment configuration  
- **`admin/src/services/api.js`** - Admin API service configuration

## Environment Variables

The following environment variables are configured:

- `BACKEND_URL`: https://ruchulu-ecommerence-backend.onrender.com
- `API_URL`: https://ruchulu-ecommerence-backend.onrender.com/api

## Switching Environments

To switch between different environments (local development vs production):

1. **Local Development**: Update the values in `env.config.js` files
2. **Production**: The current configuration points to the deployed backend

## API Endpoints

All API calls are now configured to use the deployed backend:
- Authentication: `/api/auth/*`
- Users: `/api/users/*`
- Products: `/api/products/*`
- Orders: `/api/orders/*`
- Subscriptions: `/api/subscriptions/*`
- Payments: `/api/payment/*`

## Testing the Integration

1. Start your frontend: `cd frontend && npm run dev`
2. Start your admin: `cd admin && npm run dev`
3. Test API calls to ensure they're connecting to the deployed backend

## Troubleshooting

If you encounter CORS issues:
- Ensure your backend has CORS configured to allow requests from your frontend/admin domains
- Check that the backend URL is accessible and responding
- Verify API endpoints are working correctly
