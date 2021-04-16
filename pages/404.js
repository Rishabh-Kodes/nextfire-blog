import Link from "next/link";
import Metatags from "@components/Metatags";

export default function Custom404() {
  return (
    <main>
      <Metatags
        title="Error 404 - Page not Found"
        description="Error 404 - The page you are looking for doesn't exists."
      />
      <h1>404 - Page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn-blue">Go Home</button>
      </Link>
    </main>
  );
}
