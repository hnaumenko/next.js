import React from 'react'
import Link from 'next/link'

export default function Users() {
  return (
    <div>
      <Link
        prefetch={false}
        href={`/orgadmin/organizations`}
        as="/orgadmin/organizations"
      >
        <a href="/orgadmin/organizations">Organizations</a>
      </Link>
      <Link prefetch={false} href={`/orgadmin/hubs`} as="/orgadmin/hubs">
        <a href="/orgadmin/hubs">Hubs</a>
      </Link>
      <Link prefetch={false} href={`/orgadmin/users`} as="/orgadmin/users">
        <a href="/orgadmin/users">Users</a>
      </Link>

      <h1>Organizations</h1>
    </div>
  )
}
