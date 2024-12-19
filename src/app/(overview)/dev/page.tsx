import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Page() {
  const allPosts = getAllPosts("dev");

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

  return (
    <main>
      dev
      {allPosts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/dev/${post.slug}`} key={post.slug}>
              {post.title}
            </Link>
          </div>
        );
      })}
      {/* <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        />
      </Container> */}
    </main>
  );
}