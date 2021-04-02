import Link from "next/link";

// Top Navbar
export default function Navbar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* User is signed-in and has a username */}
        {username && (
          <>
            <ul>
              <li className="push-left">
                <Link href="/admin">
                  <button className="btn-blue">Write Posts</button>
                </Link>
              </li>
              <li>
                <Link href={`${username}`}>
                  <img src={user?.photoURL} />
                </Link>
              </li>
            </ul>
          </>
        )}

        {/* User is not signed-in or has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
