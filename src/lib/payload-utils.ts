import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value

  if (!token) {
    // Token missing, return no user or handle accordingly
    return { user: null }
  }

  const meRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  )

  // Check if the response is ok
  if (!meRes.ok) {
    throw new Error(`Failed to fetch user: ${meRes.status} ${meRes.statusText}`);
  }

  // Ensure that the response is JSON
  const contentType = meRes.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const text = await meRes.text();
    console.error('Expected JSON but got:', text);
    throw new Error('Response is not JSON');
  }

  const { user } = (await meRes.json()) as {
    user: User | null
  }

  return { user }
}
