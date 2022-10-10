// 2a. via src/main.jsx
// 2b. create the root layout component
  // first route is what often called the "root route" since the rest of routes will render inside of it. 
  // it will serve as the root layout of the UI, and will have nested layouts as it gets farther along.

// 5b. via src/main.jsx
// 5c. render an <Outlet />
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {/* 5c. */}
        <Outlet />
      </div>
    </>
  );
}

// 2c. Go to src/main.jsx