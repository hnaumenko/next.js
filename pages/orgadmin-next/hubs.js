import React from 'react'
import Link from 'next/link'

export default function Users() {
  return (
    <div>
      <Link
        prefetch={false}
        href={`/orgadmin-next/organizations`}
        as="/orgadmin-next/organizations"
      >
        <a href="/orgadmin-next/organizations">Organizations</a>
      </Link>
      <Link
        prefetch={false}
        href={`/orgadmin-next/hubs`}
        as="/orgadmin-next/hubs"
      >
        <a href="/orgadmin/hubs">Hubs</a>
      </Link>
      <Link prefetch={false} href={`/orgadmin/users`} as="/orgadmin/users">
        <a href="/orgadmin/users">Users</a>
      </Link>

      <h1>Hubs</h1>
    </div>
  )
}
