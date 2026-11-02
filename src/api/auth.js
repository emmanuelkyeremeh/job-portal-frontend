// TODO(AJSP-23): confirm endpoint paths, request/response shape and session handling with the backend team

/**
 * Authenticates an existing user against the backend.
 * During development, Vite proxies /api to http://localhost:3000.
 *
 * @param {Object} credentials - { email, password, rememberMe }
 * @returns {Promise<Object>}
 */
export async function loginUser(credentials) {
  // TODO(AJSP-23): confirm endpoint paths, request/response shape and session handling with the backend team
  // Example future contract:
  // const res = await fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(credentials),
  // })
  // if (!res.ok) {
  //   const errData = await res.json().catch(() => ({}))
  //   throw new Error(errData.message || 'Invalid email or password')
  // }
  // return await res.json()

  // Simulated backend delay and success for story demo:
  await new Promise((resolve) => setTimeout(resolve, 600))
  if (!credentials.email || !credentials.password) {
    throw new Error('Please fill in all required fields.')
  }
  return { success: true, token: 'demo-token' }
}

/**
 * Registers a new user account with the backend.
 *
 * @param {Object} userData - { firstName, lastName, middleName, email, password, agreeTerms }
 * @returns {Promise<Object>}
 */
export async function registerUser(userData) {
  // TODO(AJSP-23): confirm endpoint paths, request/response shape and session handling with the backend team
  // Example future contract:
  // const res = await fetch('/api/auth/register', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData),
  // })
  // if (!res.ok) {
  //   const errData = await res.json().catch(() => ({}))
  //   throw new Error(errData.message || 'Unable to create account')
  // }
  // return await res.json()

  // Simulated backend delay and success for story demo:
  await new Promise((resolve) => setTimeout(resolve, 600))
  if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
    throw new Error('Please fill in all required fields.')
  }
  return { success: true, userId: 'demo-user-id' }
}
