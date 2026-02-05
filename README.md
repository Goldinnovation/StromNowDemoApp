
## How to Set Up the Application (Development Team)

###  Prerequisites:

- Node.js (v18+ recommended)
- npm 
- Expo CLI
- Android Studio (für Android Development)
- EAS CLI (EAS Build)

<br>

### Steps:
1. Clone the GitHub repository
   ```bash
   git clone <repo-url>
   ```

2. Navigate to the project root
   ```bash
   cd dojopix
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Run the Expo server
   ```bash
   npx expo start
   ```

<br>


## Any assumptions you made or questions you had

### Assumptions:
- The API of chargetrip seems to be quite old

### Questions: 
- How can I improve the Architecture of the app for better maintainability and scalability?
- How can I improve the Performance when it comes to rendering the map and the stations?

<br>



## Improvements with More Time

#### Error Handling
- Implement error boundaries
- Add retry logic for failed API calls
- Improve user-friendly error messages across all screens

#### Performance Optimization
- Optimize re-renders and component updates

#### Testing
- Add unit tests for hooks and utilities
- Integration tests for API calls
- E2E tests for critical user flows (navigation, location permissions, station loading)

#### Type Safety
- Replace `any` types with proper TypeScript interfaces
- Create strict types for API responses and Redux state
- Improve type safety across the codebase

#### State Management
- Implement proper loading/error states globally
- Optimize Redux store structure
